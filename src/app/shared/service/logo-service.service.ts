import { Injectable } from '@angular/core';
import { LogoModel } from '../model/logo-model';

@Injectable({
  providedIn: 'root'
})
export class LogoServiceService {

  logoService: LogoModel[] = [
    {
      imgPath:'./assets/1.png'
    },
    {
      imgPath:'./assets/2.png'
    },
    {
      imgPath:'./assets/3.png'
    },
    {
      imgPath:'./assets/4.png'
    },
    {
      imgPath:'./assets/5.png'
    },
    {
      imgPath:'./assets/6.png'
    },
    {
      imgPath:'./assets/7.png'
    },
  ]

  constructor() { }
}
