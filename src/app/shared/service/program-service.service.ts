import { Injectable } from '@angular/core';
import { ProgramModel,ProgramTitle } from '../model/program-model';

@Injectable({
  providedIn: 'root'
})
export class ProgramServiceService {

  programTitle: ProgramTitle[] = [
    {
      title: 'all'
    },
    {
      title: 'strength'
    },
    {
      title: 'hypertrophy'
    },
    {
      title: 'conditioning'
    },
    {
      title: 'calisthenics'
    },
    
  ]

  programService: ProgramModel[] = [
    {
      imgPath: './assets/p1.jpg',
      name:'Strength & Power',
      rate:'10',
      class:'strength'
    },
    {
      imgPath: './assets/p2.jpg',
      name:'Core Strength',
      rate:'10',
      class:'strength'
    },
    {
      imgPath: './assets/p4.jpg',
      name:'Hypertrophy',
      rate:'9',
      class:'hypertrophy'
    },
    {
      imgPath: './assets/p3.webp',
      name:'Women`s Training',
      rate:'10',
      class:'hypertrophy'
    },
    {
      imgPath: './assets/p5.jpg',
      name:'Maximum Fat Loss',
      rate:'8',
      class:'conditioning'
    },
    {
      imgPath: './assets/p6.jpg',
      name:'Ab Training',
      rate:'10',
      class:'conditioning'

    },
    {
      imgPath: './assets/p7.jpg',
      name:'Bodyweight',
      rate:'9',
      class:'calisthenics'

    }
  ]

  constructor() { }
}
