import { Component, NgZone, ViewEncapsulation } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import * as am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import { MAHOL_COUNTRIES_DATA } from '../../../../../../shared/constants/world-data.constants';
import { CountryCantonData } from 'src/app/core/models/map';

@Component({
  selector: 'app-world-map',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './world-map.component.html',
  styleUrl: './world-map.component.scss'
})

export class WorldMapComponent {
  private root!: am5.Root;
  private chart!: am5map.MapChart;
  private polygonSeries!: am5map.MapPolygonSeries;
  private pointSeries!: am5map.MapPointSeries; // Série pour les étiquettes/bulles

  // Vos données pays sous forme de tableau, avec les coordonnées géométriques

  // Carte interne pour des recherches rapides par ID de pays
  private countryDataMap: { [key: string]: CountryCantonData } = {};

  constructor(private zone: NgZone) {
    // Transforme le tableau en carte pour des recherches rapides par ID de pays
    MAHOL_COUNTRIES_DATA.forEach(country => {
      this.countryDataMap[country.id] = country;
    });
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initMap();
    });
  }

  private initMap(): void {
    this.root = am5.Root.new('chartdiv');
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    this.chart = this.root.container.children.push(
      am5map.MapChart.new(this.root, {
        projection: am5map.geoNaturalEarth1(), // Projection Natural Earth 1
        panX: "none",
        panY: "none",
        wheelX: "none",
        wheelY: "none",
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0
      })
    );

    let zoomControl = this.chart.set("zoomControl", am5map.ZoomControl.new(this.root, {}));
    zoomControl.homeButton.set("visible", true);


    this.polygonSeries = this.chart.series.push(
      am5map.MapPolygonSeries.new(this.root, {
        geoJSON: am5geodata_worldLow.default,
        exclude: ['AQ'], // Exclure l'Antarctique
        fill: am5.color('#939292'), // Couleur grise par défaut
      })
    );

    this.polygonSeries.mapPolygons.template.setAll({
      toggleKey: 'active',
      interactive: true,
      stroke: am5.color(0xffffff), // Bordure blanche
      strokeWidth: 0.5,
      cursorOverStyle: 'pointer',
      tooltipText: '{name}' // Rétablit l'infobulle au survol du pays pour afficher le nom du pays
    });

    // Définir les couleurs pour les pays avec cantons et gérer le survol
    this.polygonSeries.mapPolygons.template.adapters.add('fill', (fill, target) => {
      const dataItem = target.dataItem as am5.DataItem<any>;
      const countryId = dataItem?.get('id');

      const hasCantons = countryId && this.countryDataMap[countryId];
      const isHovered = target.isHover(); // Vérifie si le polygone est actuellement survolé

      if (hasCantons) {
        if (isHovered) {
          return am5.color('#8b573e'); // Couleur brun clair pour le survol (pays avec cantons)
        } else {
          return am5.color('#6e422e'); // Couleur brun foncé pour l'état normal (pays avec cantons)
        }
      } else {
        // Pays sans cantons
        if (isHovered) {
          return am5.color('#c0c0c0'); // Gris plus clair pour le survol (pays sans cantons)
        } else {
          return am5.color('#939292'); // Gris par défaut pour l'état normal (pays sans cantons)
        }
      }
    });

    // Ajouter un événement de clic pour un comportement de type modal
    this.polygonSeries.mapPolygons.template.events.on('click', (ev) => {
      const dataItem = ev.target.dataItem;
      const countryId = (dataItem as any)?.get('id');

      const amchartsCountryName = (dataItem as any)?.get('name');

      if (countryId && this.countryDataMap[countryId]) {
        // Mettre à jour le nom du pays dans notre structure de données s'il est différent du nom d'AmCharts
        if (this.countryDataMap[countryId].name !== amchartsCountryName) {
          //this.countryDataMap[countryId].name = amchartsCountryName;
        }
        this.showCountryDetails(countryId);
      }
    });

    // --- MapPointSeries pour les bulles (étiquettes fixes par défaut) ---
    this.pointSeries = this.chart.series.push(
      am5map.MapPointSeries.new(this.root, {})
    );

    /*
    // Modèle pour les marqueurs de la série de points (les étiquettes/bulles)
    this.pointSeries.bullets.push((root, series, dataItem: any) => {

      const label = am5.Label.new(root, {
        centerX: am5.percent(50),
        centerY: am5.percent(50),
        fill: am5.color(0xffffff),
        fontSize: 15,
        populateText: true,
        text: String(dataItem.dataContext.cantonCount) // Affiche le nombre de cantons
      });

      // NOUVEAU: Fond pour l'étiquette en forme de CERCLE
      const background = am5.Circle.new(root, {}); // Créez d'abord l'instance Circle
      background.setAll({ // Puis appelez setAll sur cette instance
        radius: 12, // Rayon du cercle, ajustez si besoin pour que le chiffre rentre
        fill: am5.color(0x000000), // Couleur de fond du cercle
        fillOpacity: 1,
        centerX: am5.percent(50),
        centerY: am5.percent(50),
      });

      label.set('background', background);

      return am5.Bullet.new(root, {
        sprite: label
      });
    });
*/
    // Peupler la série de points directement à partir de countryDataMap
    console.log("Préparation des données pour les étiquettes.");
    const pointSeriesData: any[] = [];

    Object.values(this.countryDataMap).forEach(countryInfo => {
      if (countryInfo.latitude != null && countryInfo.longitude != null) {
        const cantonCount = countryInfo.cantons.length;
        console.log(`Ajout des données pour l'étiquette du ${countryInfo.name}: ${cantonCount} cantons à Long: ${countryInfo.longitude}, Lat: ${countryInfo.latitude}`);
        pointSeriesData.push({
          geometry: { type: "Point", coordinates: [countryInfo.longitude, countryInfo.latitude] },
          cantonCount: cantonCount,
          countryName: countryInfo.name
        });
      } else {
        console.warn(`Aucune latitude/longitude fournie pour ${countryInfo.name} (${countryInfo.id}). L'étiquette sera ignorée.`);
      }
    });

    this.pointSeries.data.setAll(pointSeriesData);

    this.polygonSeries.events.once("datavalidated", () => {
      console.log("Données de la carte des polygones validées.");
    });
  }

  private showCountryDetails(countryId: string): void {
    const countryInfo = this.countryDataMap[countryId];
    if (!countryInfo) {
      console.warn(`Aucune information de pays trouvée pour l'ID : ${countryId}`);
      return;
    }

    let cantonsList = '';
    console.log(countryInfo);
    countryInfo.cantons.forEach(canton => {
      //cantonsList += `<li>${canton.name} ( ${canton.population} personnes )</li>`;
      cantonsList += `<li>${canton.name} </li>`;
    });

    const modalContentHTML = `
      <div class="country-modal-content">
        <h3>${countryInfo.name}</h3>
        <span>${countryInfo.cantons.length} Cantons</span>
        <ul>
          ${cantonsList}
        </ul>
        <button class="close-modal-button">Fermer</button>
      </div>
    `;

    const existingModal = document.querySelector('.country-modal-overlay');
    if (existingModal) {
      existingModal.remove();
    }

    const modalContainer = document.createElement('div');
    modalContainer.className = 'country-modal-overlay';
    modalContainer.innerHTML = modalContentHTML;

    document.body.appendChild(modalContainer);

    const closeButton = modalContainer.querySelector('.close-modal-button');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        document.body.removeChild(modalContainer);
      });
    }

    modalContainer.addEventListener('click', (event) => {
      if (event.target === modalContainer) {
        document.body.removeChild(modalContainer);
      }
    });

    console.log(`Modale affichée pour : ${countryInfo.name}`);
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
