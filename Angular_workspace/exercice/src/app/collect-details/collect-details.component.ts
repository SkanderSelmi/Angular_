import { Component } from '@angular/core';
import { Collect } from '../models/collect';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collect-details',
  templateUrl: './collect-details.component.html',
  styleUrl: './collect-details.component.css'
})
export class CollectDetailsComponent {
   C?: Collect
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the :id from the URL (e.g. localhost:4200/details/3)
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Find the matching collecte
    this.C = this.listeDechets.find(d => d.id === id)!;
  }

}
