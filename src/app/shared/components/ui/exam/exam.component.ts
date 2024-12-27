import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { interval, Subscription, take } from 'rxjs';
import { MainBtnComponent } from '../main-btn/main-btn.component';
@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    NgFor,
    MainBtnComponent,
  ],
  template: `
    <p-dialog
      [(visible)]="visible"
      [modal]="true"
      [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }"
      [style]="{ width: '50vw' }"
      [draggable]="false"
      [resizable]="false"
      [closable]="false"
    >
      <ng-template pTemplate="header">
        <div class="d-flex align-items-center justify-content-between w-100">
          <span class="title"
            >Question {{ currentQuestionIndex + 1 }} of
            {{ questions.length }}</span
          >
          <div class="d-flex align-items-center">
            <img
              src="../../../../../assets/images/alarm.png"
              class="mx-1"
              alt="Alarm"
            />
            <span class="fw-medium" [style.color]="timerColor">{{
              timeRemaining
            }}</span>
          </div>
        </div>
      </ng-template>

      <p class="fw-bold">{{ questions[currentQuestionIndex]?.question }}</p>
      <div *ngFor="let answer of questions[currentQuestionIndex]?.answers">
        <p-radioButton
          name="answer"
          [(ngModel)]="questions[currentQuestionIndex].selectedAnswer"
          [value]="answer.key"
          inputId="{{ answer.key }}"
          (change)="checkAnswerSelection()"
        ></p-radioButton>
        <label class="mx-2" for="{{ answer.key }}">{{ answer.answer }}</label>
      </div>
      <ng-template pTemplate="#footer">
        <div class="d-flex justify-content-between w-100 my-3">
          <button
            pButton
            type="button"
            label="Back"
            [disabled]="currentQuestionIndex === 0"
            (click)="prevQuestion()"
          ></button>
          <!-- <app-main-btn
            [text]="'Back'"
            [classes]="'rounded-4 w-100 p-0'"
            [type]="'button'"
            [condition]="currentQuestionIndex === 0"
            (clickEmitter)="prevQuestion()"
          ></app-main-btn>
          <app-main-btn
            [text]="'Next'"
            [classes]="'rounded-4 w-100 p-0'"
            [type]="'button'"
            [condition]="
              !isAnswerSelected || currentQuestionIndex === questions.length - 1
            "
            (clickEmitter)="nextQuestion()"
          ></app-main-btn> -->
          <button
            pButton
            type="button"
            label="Next"
            (click)="nextQuestion()"
            [disabled]="
              !isAnswerSelected || currentQuestionIndex === questions.length - 1
            "
          ></button>
        </div>
      </ng-template>
    </p-dialog>
  `,
  styles: `
    .title {
      color: var(--main-color)
    }
    :host::ng-deep .p-dialog-content{
        padding: 0 45px;
      }
      :host::ng-deep .p-button{
        width:50%;
        border-radius: 100px;
      }
  `,
})
export class ExamComponent {
  @Input() questions: any[] = [];
  @Input() visible: boolean = false;
  @Input() duration: number = 0; // Duration in minutes

  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  isAnswerSelected: boolean = false; // Track if the current question has an answer selected

  timeRemaining: string = '';
  timerColor: string = 'green'; // Default timer color

  private timerSubscription!: Subscription;

  ngOnInit() {
    this.startTimer();
    this.checkAnswerSelection();
  }

  checkAnswerSelection() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.isAnswerSelected = !!currentQuestion.selectedAnswer; // Check if an answer is selected
    console.log(this.isAnswerSelected);
  }

  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.checkAnswerSelection(); // Recheck selection status for the previous question
    }
  }
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.checkAnswerSelection(); // Recheck selection status for the new question
    }
  }

  startQuiz() {
    this.visible = true;
    this.currentQuestionIndex = 0;
  }

  startTimer() {
    const totalSeconds = this.duration * 60; // Convert minutes to seconds
    this.timerSubscription = interval(1000) // Emit every second
      .pipe(take(totalSeconds)) // Stop after the total duration
      .subscribe({
        next: (elapsedSeconds) => {
          const remainingSeconds = totalSeconds - elapsedSeconds - 1;
          this.timeRemaining = this.formatTime(remainingSeconds);
          this.updateTimerColor(remainingSeconds);
        },
        complete: () => {
          this.submitExam(); // Automatically submit the exam when time runs out
        },
      });
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
  }

  updateTimerColor(remainingSeconds: number) {
    // Change the timer color based on remaining time
    if (remainingSeconds <= 120) {
      this.timerColor = 'red'; // Less than or equal to 2 minutes
    } else {
      this.timerColor = 'green'; // More than 2 minutes
    }
  }

  submitExam() {
    console.log('Exam submitted', this.questions);
    this.visible = false;
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
}
