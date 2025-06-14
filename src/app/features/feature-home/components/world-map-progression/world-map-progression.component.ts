import { Component } from '@angular/core';

import { WorldMapComponent } from './components/world-map/world-map.component'
import { MapLoaderComponent } from './components/map-loader/map-loader.component';

@Component({
  selector: 'app-world-map-progression',
  templateUrl: './world-map-progression.component.html',
  styleUrl: './world-map-progression.component.scss',
  imports: [
    MapLoaderComponent,
    WorldMapComponent,
  ]
})

export class WorldMapProgressionComponent {}