import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-details',
  standalone: true,
  imports: [],
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css',
})
export class QuizDetailsComponent {
  @Input() subjects!: any[];

  ngOnInit() {
    console.log(this.subjects);
  }
}
