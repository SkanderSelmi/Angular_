import { Component } from '@angular/core';
import { Collect } from '../models/collect';

@Component({
  selector: 'app-collects-list',
  templateUrl: './collects-list.component.html',
  styleUrl: './collects-list.component.css'
})
export class CollectsListComponent {

   listeDechets: Collect[] = [
    {
      id: 1,
      zone: 'Zone A',
      statut: 'En cours',
      typeDechet: 'Plastique',
      date: new Date('2024-01-05'),
      capacite: 500
    },
    {
      id: 2,
      zone: 'Zone B',
      statut: 'Collecté',
      typeDechet: 'Métal',
      date: new Date('2024-01-10'),
      capacite: 750
    },
    {
      id: 3,
      zone: 'Zone C',
      statut: 'En attente',
      typeDechet: 'Verre',
      date: new Date('2024-01-15'),
      capacite: 1000
    }
  ];

}
