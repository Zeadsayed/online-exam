import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  private readonly env: string = environment.baseURL;

  constructor() {}

  private http = inject(HttpClient);
  getAllSubjects(): Observable<any> {
    return this.http.get(this.env + '/api/v1/subjects');
  }
}
