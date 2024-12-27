import { Component, inject, OnDestroy } from '@angular/core';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { SubjectsService } from '../../../shared/services/subjects.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgIf } from '@angular/common';
import { ToastService } from '../../../shared/services/toast.service';
import {
  Subject,
  Subjects,
} from '../../../shared/models/App/subjects/subjectsRes';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-quizes',
  standalone: true,
  imports: [QuizDetailsComponent, ProgressSpinnerModule, NgIf],
  templateUrl: './quizes.component.html',
  styleUrl: './quizes.component.css',
})
export class QuizesComponent implements OnDestroy {
  uiState = {
    isLoading: false as boolean,
  };
  private _subjectsService = inject(SubjectsService);
  private _toastService = inject(ToastService);

  subscription!: Subscription;
  subjects: Subject[] = [];
  ngOnInit() {
    this.getSubject();
  }

  getSubject() {
    this.uiState.isLoading = true;
    this._subjectsService.getAllSubjects().subscribe(
      (res: Subjects) => {
        this.subjects = res.subjects;
        this.uiState.isLoading = false;
      },
      (err) => {
        this.uiState.isLoading = false;
        console.error(err);
        this._toastService.showToast(err.error.message, 'error');
      }
    );
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe;
  }
}
