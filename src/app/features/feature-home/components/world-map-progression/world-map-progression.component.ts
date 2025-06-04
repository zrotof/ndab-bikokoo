import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';

import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import * as am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5geodata_data from '@amcharts/amcharts5-geodata/data/countries2';

@Component({
  selector: 'app-world-map-progression',
  templateUrl: './world-map-progression.component.html',
  styleUrl: './world-map-progression.component.scss',
  imports: [

  ]
})
export class WorldMapProgressionComponent implements OnInit, OnDestroy {
  @ViewChild('chartdiv', { static: true }) chartRef!: ElementRef<HTMLDivElement>;
  private root!: am5.Root;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.root = am5.Root.new(this.chartRef.nativeElement);
      this.root.setThemes([am5themes_Animated.new(this.root)]);

      const chart = this.root.container.children.push(
        am5map.MapChart.new(this.root, {
          panX: 'none',
          panY: 'none',
          wheelX: 'none',
          wheelY: 'none',
          projection: am5map.geoMercator(),
        })
      );

      const polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(this.root, {
          geoJSON: am5geodata_worldLow.default,
          exclude: ['AQ'],
        })
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: '{name}',
        interactive: true,
      });

      polygonSeries.mapPolygons.template.states.create('hover', {
        fill: am5.color(0x677935),
      });

      // 🔵 Membres par pays
      const membersByCountry = [
        { id: 'FR', name: 'France', value: 120 },
        { id: 'CM', name: 'Cameroun', value: 80 },
        { id: 'US', name: 'États-Unis', value: 45 },
        { id: 'DE', name: 'Allemagne', value: 30 },
        { id: 'GB', name: 'Royaume-Uni', value: 20 },
        { id: 'IN', name: 'Inde', value: 100 },
      ];

      // 🟢 Convertir en bulles avec lat/lon
      const bubbleData = membersByCountry.map((item) => {
        const geo = (am5geodata_worldLow as any).data[item.id];
        if (!geo) {
          console.warn('Aucune donnée trouvée pour', item.id);
          return null;
        }
        return {
          latitude: geo.latitude,
          longitude: geo.longitude,
          value: item.value,
          name: item.name,
        };
      }).filter(Boolean);

      const bubbleSeries = chart.series.push(
        am5map.MapPointSeries.new(this.root, {
          latitudeField: 'latitude',
          longitudeField: 'longitude',
          valueField: 'value',
        })
      );

      bubbleSeries.bullets.push(() => {
        const container = am5.Container.new(this.root, {});
        const circle = container.children.push(
          am5.Circle.new(this.root, {
            radius: 20,
            fill: am5.color(0x448aff),
            fillOpacity: 0.7,
            stroke: am5.color(0xffffff),
            strokeWidth: 2,
          })
        );

        const label = container.children.push(
          am5.Label.new(this.root, {
            text: '{value}',
            populateText: true,
            centerX: am5.p50,
            centerY: am5.p50,
            fill: am5.color(0xffffff),
            fontSize: 12,
          })
        );

        return am5.Bullet.new(this.root, {
          sprite: container,
        });
      });

      bubbleSeries.data.setAll(bubbleData);

      chart.appear(1000, 100);
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}