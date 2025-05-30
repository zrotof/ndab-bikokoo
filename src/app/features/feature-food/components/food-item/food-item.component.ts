import { Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConvertStringLabelToFontawesomeIconPipe } from 'src/app/core/pipes/convertStringLabelToFontawesomeIcon/convert-string-label-to-fontawesome-icon.pipe';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.scss',
  imports: [
    FontAwesomeModule,
    ConvertStringLabelToFontawesomeIconPipe
  ],
})

export class FoodItemComponent {

  name = input<string>();

  protected currentFood = computed(() => this.foods.find(food => food.code === this.name()))

  protected readonly foods = [
    {
      code: "bongo-tchobi",
      title: "Bongo'o Tchobi",
      image: "/img/food/bongoo.jpg",
      description: "C’est une sauce noire épicée, souvent servie avec du poisson ou de la viande. Le mot bongoo fait référence à l'ingrédient principal : une épice noire obtenue à partir de graines torréfiées et moulues, qui donne au plat sa couleur sombre et son goût fumé unique.",
      options: [
        {
          icon: "faClock",
          value: "30 Min de préparation"
        },
        {
          icon: "faDollarSign",
          value: "Environ 30€"
        },
        {
          icon: "faChartLine",
          value: "Difficulté Moyenne"
        }
      ]
    },
    {
      code: "sanga",
      title: "Sanga",
      image: "/img/food/sanga.jpg",
      description: "Le Sanga est un mélange savoureux de feuilles de manioc pilées, de maïs frais (ou parfois de maïs en grains précuits) et de jus de noix de palme (huile rouge ou lait de palme), le tout cuit ensemble pour former une pâte consistante et parfumée.",
      options: [
        {
          icon: "faClock",
          value: "30 Min de préparation"
        },
        {
          icon: "faDollarSign",
          value: "Environ 30€"
        },
        {
          icon: "faChartLine",
          value: "Difficulté Moyenne"
        }
      ]
    }
  ]
}
