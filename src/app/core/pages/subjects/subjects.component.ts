import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../../../shared/services/subjects.service';
import { Exam, Exams } from '../../../shared/models/App/subjects/examsRes';
import { MainBtnComponent } from '../../../shared/components/ui/main-btn/main-btn.component';
import { NgIf } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastService } from '../../../shared/services/toast.service';
import { InstructionsComponent } from '../../../shared/components/ui/instructions/instructions.component';
import { ExamComponent } from '../../../shared/components/ui/exam/exam.component';
import { Question } from '../../../shared/models/App/subjects/Questions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [
    MainBtnComponent,
    InstructionsComponent,
    ExamComponent,
    ProgressSpinnerModule,
    NgIf,
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
})
export class SubjectsComponent implements OnInit, OnDestroy {
  uiState = {
    isLoading: false as boolean,
    isVisible: false as boolean,
    isExamVisible: false as boolean,
  };
  route = inject(ActivatedRoute);
  private _subjectsService = inject(SubjectsService);
  private _toastService = inject(ToastService);
  subscription!: Subscription;
  quizId: any;
  exams: Exam[] = [];
  questions: Question[] = [];
  examDuration!: number;

  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('id');
    this.getExams();
  }

  getExams() {
    this.uiState.isLoading = true;
    this._subjectsService.getAllExams(this.quizId).subscribe({
      next: (res) => {
        this.exams = res.exams;
        this.uiState.isLoading = false;
      },
      error: (err) => {
        this.uiState.isLoading = false;
        this._toastService.showToast(err.error.message, 'error');
      },
    });
  }

  openExam(id: string) {
    this._subjectsService.getQuestions(id).subscribe(
      (res) => {
        this.questions = res.questions;
        res.questions.map((d) => (this.examDuration = d.exam.duration));
        this.uiState.isVisible = true; // Show the instructions dialog
      },
      (err) => {
        console.log(err);
        this.uiState.isLoading = false;
      }
    );
  }

  startExam() {
    this.uiState.isVisible = false; // Close the instructions dialog
    this.uiState.isExamVisible = true; // Open the exam dialog
  }

  startQuiz() {
    const ExamComponent = document.querySelector('app-exam');
    (ExamComponent as any).startQuiz();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
