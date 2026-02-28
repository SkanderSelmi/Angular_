import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent implements OnInit {
  suggestion?: Suggestion;
  suggestionId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.suggestionId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadSuggestion();
  }

  loadSuggestion(): void {
    this.suggestionService.getSuggestionById(this.suggestionId).subscribe({
      next: (response) => {
        this.suggestion = response.suggestion;
      },
      error: (err) => {
        console.error('Error loading suggestion:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/suggestions']);
  }
  goToUpdate(): void {
    this.router.navigate(['/suggestions/edit', this.suggestionId]);
  }

}