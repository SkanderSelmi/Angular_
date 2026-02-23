import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-collect',
  templateUrl: './update-collect.component.html',
  styleUrl: './update-collect.component.css'
})
export class UpdateCollectComponent implements OnInit {
    
  updateForm!: FormGroup;  

    constructor(private fb: FormBuilder) {}
    
    ngOnInit() {
    // [18] — build the form with all validators
    this.updateForm = this.fb.group({
      typeDechet: ['', Validators.required],
      zone:       ['', [Validators.required, Validators.minLength(3)]],
      statut:     ['', [Validators.required,
                    Validators.pattern(/^(En attente|En cours|Collecté)$/)]],
      date:       ['', Validators.required],
      capacite:   ['', [Validators.required, Validators.min(1), Validators.max(5000)]]
    });
  }

}
