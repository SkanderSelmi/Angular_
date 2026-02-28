import { Injectable } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  private suggestionUrl = 'http://localhost:3000/suggestions';

  constructor(private http: HttpClient) { }

   getSuggestionsList(): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(this.suggestionUrl);
  }

  // GET suggestion by ID
  getSuggestionById(id: number): Observable<any> {
    return this.http.get<any>(`${this.suggestionUrl}/${id}`);
  }

  // POST create suggestion
  addSuggestion(suggestion: Suggestion): Observable<any> {
    return this.http.post<any>(this.suggestionUrl, suggestion);
  }

  // PUT update suggestion
  updateSuggestion(id: number, suggestion: Suggestion): Observable<any> {
    return this.http.put<any>(`${this.suggestionUrl}/${id}`, suggestion);
  }

  // DELETE suggestion
  deleteSuggestion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.suggestionUrl}/${id}`);
  }

  // POST increment likes
  likeSuggestion(id: number): Observable<any> {
    return this.http.post<any>(`${this.suggestionUrl}/${id}/like`, {});
  }

}
