import { Injectable } from '@angular/core';

import { Slike } from 'src/app/shared/models/slike';


@Injectable({
  providedIn: 'root'
})
export class SlikeService {

  constructor() { }

  getAll(): Slike[] {
    return [
      {
        id: 1,
        name: 'Milena, Ana i Jovana',
       
        imageUrl: '/assets/images/1.png',
        
      },
      {
        id: 2,
        name: 'Jovana i Stefan',
       
        imageUrl: '/assets/images/2.png',
      
      },
      {
        id: 3,
        name: 'Komsije Jovanovici',
        
        imageUrl: '/assets/images/3.png',
        
      },
      {
        id: 4,
        name: 'Manekeni',
        
        imageUrl: '/assets/images/4.png',
        
      },
      {
        id: 5,
        name: 'I ovi poziraju',
       
        imageUrl: '/assets/images/5.png',
        
      },
      {
        id: 6,
        name: 'Jovana, Ana i Milena',
        
        imageUrl: '/assets/images/6.png',
        
      },
    ];
  }
}
