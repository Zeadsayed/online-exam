import { Component, inject } from '@angular/core';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { SubjectsService } from '../../../shared/services/subjects.service';

@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [QuizDetailsComponent],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.css',
})
export class QuizesComponent {
  private _subjectsService = inject(SubjectsService);
  subjects!: any[];
  ngOnInit() {
    this.getSubject();
  }

  getSubject() {
    this._subjectsService.getAllSubjects().subscribe(
      (res) => {
        this.subjects = res.subjects;
        console.log(this.subjects);
      },
      (error) => console.error(error)
    );
  }
}
