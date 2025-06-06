import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import * as am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

interface Canton {
  name: string;
  population: number;
}

// Interface pour les données du pays incluant ses cantons et ses coordonnées géométriques
interface CountryCantonData {
  id: string; // Code pays ISO 2 lettres
  name: string; // Nom complet du pays
  cantons: Canton[];
  latitude: number; // Nouvelle propriété: latitude du point pour l'étiquette
  longitude: number; // Nouvelle propriété: longitude du point pour l'étiquette
}


@Component({
  selector: 'app-world-map-progression',
  templateUrl: './world-map-progression.component.html',
  styleUrl: './world-map-progression.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [

  ]
})
export class WorldMapProgressionComponent {
  private root!: am5.Root;
  private chart!: am5map.MapChart;
  private polygonSeries!: am5map.MapPolygonSeries;
  private pointSeries!: am5map.MapPointSeries; // Série pour les étiquettes/bulles

  // Vos données pays sous forme de tableau, avec les coordonnées géométriques
  private countryDataArray: CountryCantonData[] = [
    {
      id: 'DE',
      name: 'Germany',
      cantons: [
        { name: 'Baden Württemberg', population: 148 },
        { name: 'Bayern', population: 31 },
        { name: 'Berlin', population: 84 },
        { name: 'Hambourg', population: 284 },
        { name: 'Nordrhein - Westfalen', population: 170 },
        { name: 'Nordrhein - Westfalen Bis', population: 60 },
        { name: 'Hessen', population: 158 },
      ],
      latitude: 51.1657, // Centre approximatif de l'Allemagne
      longitude: 10.4515
    },
    {
      id: 'GB',
      name: 'United Kingdom',
      cantons: [
        { name: 'Nguissi Mère (London)', population: 209 },
        { name: 'Nguissi Nord (Manchester)', population: 151 },
        { name: 'Birmingham', population: 288 },
      ],
      latitude: 55.3781, // Centre approximatif du Royaume-Uni
      longitude: -3.4360
    },
    {
      id: 'AU',
      name: 'Australia',
      cantons: [
        { name: 'Australie', population: 259 },
      ],
      latitude: -25.2744, // Centre géographique de l'Australie
      longitude: 133.7751
    },
    {
      id: 'AT',
      name: 'Austria',
      cantons: [
        { name: 'Autriche', population: 199 },
      ],
      latitude: 48.2082, // Vienne
      longitude: 16.3738
    },
    {
      id: 'BE',
      name: 'Belgium',
      cantons: [
        { name: 'Belgique Mère', population: 119 },
        { name: 'Linoyoi li Belgique', population: 297 },
        { name: 'Mawanda ma Belgique Mère', population: 105 },
        { name: 'Nsebla u Belgique', population: 99 },
      ],
      latitude: 50.8503, // Bruxelles
      longitude: 4.3517
    },
    {
      id: 'ES',
      name: 'Spain',
      cantons: [
        { name: 'Barcelone', population: 226 },
        { name: 'Madrid', population: 38 },
        { name: 'Nem Masse ma Bilbao', population: 237 },
      ],
      latitude: 40.4168, // Madrid
      longitude: -3.7038
    },
    {
      id: 'FR',
      name: 'France',
      cantons: [
        { name: 'Bilama bi Côte d’Azur', population: 293 },
        { name: 'Bordeaux', population: 134 },
        { name: 'Cœur de Lyon', population: 71 },
        { name: 'Cœur de Toulouse', population: 109 },
        { name: "Côte d'azur Monaco", population: 257 },
        { name: 'Gloire de Lyon', population: 93 },
        { name: 'Grand Est', population: 207 },
        { name: 'Grand Ouest', population: 150 },
        { name: 'La Lorraine', population: 95 },
        { name: 'Le Mans Mère', population: 57 },
        { name: 'Like li nkeke li Lyon', population: 163 },
        { name: 'Makwassi ma Lyon', population: 45 },
        { name: 'Mivag mi Grand Est', population: 173 },
        { name: 'Marseille', population: 32 },
        { name: 'Masse ma Lyon', population: 135 },
        { name: 'Mère de Lyon', population: 107 },
        { name: 'Paris Adna', population: 71 },
        { name: 'Paris Ambiance', population: 157 },
        { name: 'Paris Bisai -', population: 294 },
        { name: 'Paris Bords de Marne', population: 246 },
        { name: 'Paris Centre', population: 188 },
        { name: 'Paris Espoir', population: 193 },
        { name: 'Paris Est Mère', population: 73 },
        { name: 'Paris Est Etoile', population: 77 },
        { name: 'Paris Est Karis', population: 11 },
        { name: 'Paris Est Normandie', population: 198 },
        { name: 'Paris Est Rive de Seine', population: 264 },
        { name: 'Paris Est Sanaga', population: 73 },
        { name: 'Paris Est Victoire', population: 154 },
        { name: 'Paris Est Village', population: 111 },
        { name: 'Paris Grand Nord', population: 235 },
        { name: 'Paris Hémle', population: 284 },
        { name: 'Paris Lipém -', population: 87 },
        { name: 'Paris Lumière', population: 297 },
        { name: 'Paris Maéba', population: 202 },
        { name: 'Paris Maliga', population: 177 },
        { name: 'Paris Maliga 18ième -', population: 28 },
        { name: 'Paris Mahol', population: 236 },
        { name: 'Paris Manogla', population: 15 },
        { name: 'Paris Midi Convivialité', population: 151 },
        { name: 'Paris Midi Express', population: 59 },
        { name: 'Paris Midi Mère', population: 235 },
      ],
      latitude: 46.2276, // Centre géographique de la France
      longitude: 2.2137
    },
    {
      id: 'IT',
      name: 'Italy',
      cantons: [
        { name: 'Florence', population: 167 },
        { name: 'Milan Mère', population: 284 },
        { name: 'Porta di Roma', population: 75 },
        { name: 'Rome', population: 204 },
      ],
      latitude: 41.9028, // Rome
      longitude: 12.4964
    },
    {
      id: 'LU',
      name: 'Luxembourg',
      cantons: [
        { name: 'Trois Frontières', population: 162 },
      ],
      latitude: 49.8153, // Luxembourg-Ville
      longitude: 6.1296
    },
    {
      id: 'NL',
      name: 'Netherlands',
      cantons: [
        { name: 'Hollande', population: 64 },
      ],
      latitude: 52.3676, // Amsterdam
      longitude: 4.9041
    },
    {
      id: 'CH',
      name: 'Switzerland',
      cantons: [
        { name: 'Mahol ma Suisse', population: 211 },
        { name: 'Mane ma Suisse', population: 120 },
      ],
      latitude: 46.8182, // Centre approximatif de la Suisse
      longitude: 8.2275
    },
    {
      id: 'US',
      name: 'United States',
      cantons: [
        { name: 'USA Mère', population: 182 },
        { name: 'Libak li America', population: 239 },
        { name: 'Liyomba li America', population: 81 },
        { name: 'Massoda ma America', population: 40 },
        { name: 'Minkwel mi America', population: 118 },
      ],
      latitude: 39.8283, // Centre géographique des États-Unis contigus
      longitude: -98.5795
    },
    {
      id: 'JP',
      name: 'Japan',
      cantons: [
        { name: 'Tokyo', population: 264 },
      ],
      latitude: 35.6762, // Tokyo
      longitude: 139.6503
    }
  ];

  // Carte interne pour des recherches rapides par ID de pays
  private countryDataMap: { [key: string]: CountryCantonData } = {};

  constructor(private zone: NgZone) {
    // Transforme le tableau en carte pour des recherches rapides par ID de pays
    this.countryDataArray.forEach(country => {
      this.countryDataMap[country.id] = country;
    });
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.initMap();
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }

  private initMap(): void {
    this.root = am5.Root.new('chartdiv');
    this.root.setThemes([am5themes_Animated.new(this.root)]);

    this.chart = this.root.container.children.push(
      am5map.MapChart.new(this.root, {
        panX: 'rotateX',
        panY: 'rotateY',
        projection: am5map.geoNaturalEarth1(), // Projection Natural Earth 1
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0
      })
    );

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
}