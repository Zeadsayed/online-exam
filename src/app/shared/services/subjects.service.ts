import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Subjects } from '../models/App/subjects/subjectsRes';
import { Exams } from '../models/App/subjects/examsRes';
import { Questions } from '../models/App/subjects/Questions';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  private readonly env: string = environment.baseURL;

  constructor() {}

  private http = inject(HttpClient);

  getAllSubjects(): Observable<Subjects> {
    return this.http.get<Subjects>(this.env + '/api/v1/subjects');
  }

  getAllExams(id: string): Observable<Exams> {
    const params = { subject: id }; // Query parameters
    return this.http.get<Exams>(this.env + '/api/v1/exams', { params });
  }

  getQuestions(id: string): Observable<Questions> {
    const params = { subject: id }; // Query parameters
    return this.http.get<Questions>(this.env + '/api/v1/questions', { params });
  }
}
