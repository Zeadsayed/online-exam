import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-details',
  standalone: true,
  imports: [],
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css',
})
export class QuizDetailsComponent {
  @Input() subjects!: any[];
  router = inject(Router);
  ngOnInit() {}

  getExams(id: string) {
    this.router.navigate(['/subjects', id]);
  }
}
