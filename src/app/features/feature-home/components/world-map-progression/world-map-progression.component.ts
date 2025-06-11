import { Component } from '@angular/core';

import { WorldMapComponent } from './components/world-map/world-map.component'

@Component({
  selector: 'app-world-map-progression',
  templateUrl: './world-map-progression.component.html',
  styleUrl: './world-map-progression.component.scss',
  imports: [
    WorldMapComponent
  ]
})

export class WorldMapProgressionComponent {}