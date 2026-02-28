import { Component, OnInit } from '@angular/core'
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../core/services/suggestion.service';
@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent implements OnInit{
 
   searchText: string = '';

  favorites: Suggestion[] = [];

  suggestions: Suggestion[] = [];

constructor(private suggestionService: SuggestionService) {}

 ngOnInit(): void {
    this.loadSuggestions();
  }


  loadSuggestions(): void {
    this.suggestionService.getSuggestionsList().subscribe({
      next: (data) => {
        this.suggestions = data;
      },
      error: (err) => {
        console.error('Error loading suggestions:', err);
      }
    });
  }

  get filteredSuggestions(): Suggestion[] {
    if (!this.searchText) {
      return this.suggestions;
    }
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  likeSuggestion(suggestion: Suggestion): void {
    this.suggestionService.likeSuggestion(suggestion.id).subscribe({
      next: () => {
        suggestion.nbLikes++;
      },
      error: (err) => {
        console.error('Error liking suggestion:', err);
      }
    });
  }

  deleteSuggestion(suggestion: Suggestion): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette suggestion?')) {
      this.suggestionService.deleteSuggestion(suggestion.id).subscribe({
        next: () => {
          this.loadSuggestions(); // Reload list
        },
        error: (err) => {
          console.error('Error deleting suggestion:', err);
        }
      });
    }
  }

  addToFavorites(suggestion: Suggestion): void {
    if (!this.favorites.find(f => f.id === suggestion.id)) {
      this.favorites.push(suggestion);
    }
  }

  removeFromFavorites(suggestion: Suggestion): void {
    this.favorites = this.favorites.filter(f => f.id !== suggestion.id);
  }

}
