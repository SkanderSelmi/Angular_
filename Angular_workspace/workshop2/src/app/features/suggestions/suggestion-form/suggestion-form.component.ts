import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {

   suggestionForm!: FormGroup;
   isEditMode = false;
   suggestionId?: number;
  
  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.initForm();
     // Check if we're in edit mode by checking the route parameter
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.isEditMode = true;
      this.suggestionId = Number(id);
      console.log('Edit mode - ID:', this.suggestionId); // Debug log
      this.loadSuggestion();
    } else {
      console.log('Add mode'); // Debug log
    }
  }

  initForm(): void {
    this.suggestionForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z ]*$')
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(30)
      ]],
      category: ['', Validators.required],
      date: [{ value: new Date().toISOString().split('T')[0], disabled: true }],
      status: [{ value: 'en attente', disabled: true }],
      nbLikes: [0]
    });
  }

   loadSuggestion(): void {
    this.suggestionService.getSuggestionById(this.suggestionId!).subscribe({
      next: (response) => {
         console.log('Loaded suggestion:', response); // Debug log
        const suggestion = response.suggestion;
        
        // Format date for input field
        const formattedDate = new Date(suggestion.date).toISOString().split('T')[0];
        
        this.suggestionForm.patchValue(response.suggestion);
      },
      error: (err) => {
        console.error('Error loading suggestion:', err);
        alert('Erreur lors du chargement de la suggestion');
      }
    });
  }

  // Getters for easy access in template
  get title() { return this.suggestionForm.get('title'); }
  get description() { return this.suggestionForm.get('description'); }
  get category() { return this.suggestionForm.get('category'); }

  onSubmit(): void {
    if (this.suggestionForm.valid) {
      const suggestionData: Suggestion = {
        id: this.suggestionId || 0,
        title: this.suggestionForm.get('title')?.value,
        description: this.suggestionForm.get('description')?.value,
        category: this.suggestionForm.get('category')?.value,
        date: new Date(),
        status: 'en attente',
        nbLikes: 0
      };

      if (this.isEditMode && this.suggestionId) {
        console.log('Updating suggestion ID:', this.suggestionId, suggestionData); // Debug
        // Update existing suggestion
        this.suggestionService.updateSuggestion(this.suggestionId!, suggestionData).subscribe({
          next: () => {
            this.router.navigate(['/suggestions']);
          },
          error: (err) => {
            console.error('Error updating suggestion:', err);
          }
        });
      } else {
        // Add new suggestion
        console.log('Adding new suggestion:', suggestionData); // Debug
        this.suggestionService.addSuggestion(suggestionData).subscribe({
          next: () => {
            this.router.navigate(['/suggestions']);
          },
          error: (err) => {
            console.error('Error adding suggestion:', err);
          }
        });
      }
    }
  }

}
