import { Injectable } from '@angular/core';
import { CardModel } from '../model/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  cardService: CardModel[] = [
    {
      title: 'Strength',
      icon:'fas fa-hand-rock',
      info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto facere voluptate nam facilis quasi. Voluptatum, perferendis? Repellendus numquam eaque sed minima quaerat, magni ab soluta, reiciendis, alias doloribus nemo.'
    },
    {
      title: 'Hypertrophy',
      icon:'fas fa-dumbbell',
      info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto facere voluptate nam facilis quasi. Voluptatum, perferendis? Repellendus numquam eaque sed minima quaerat, magni ab soluta, reiciendis, alias doloribus nemo.'
    },
    {
      title: 'Power',
      icon:'fas fa-fire',
      info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto facere voluptate nam facilis quasi. Voluptatum, perferendis? Repellendus numquam eaque sed minima quaerat, magni ab soluta, reiciendis, alias doloribus nemo.'
    },
    {
      title: 'Conditioning',
      icon:'fas fa-running',
      info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto facere voluptate nam facilis quasi. Voluptatum, perferendis? Repellendus numquam eaque sed minima quaerat, magni ab soluta, reiciendis, alias doloribus nemo.'
    }
  ]
  constructor() { }
}
