import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  template: `
    <p-dialog
      header="Instructions"
      [(visible)]="isVisible"
      [modal]="true"
      [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }"
      [style]="{ width: '50vw' }"
      [draggable]="false"
      [resizable]="false"
      [closable]="false"
    >
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
      </ul>
      <div class="my-3">
        <button
          pButton
          type="button"
          label="Start"
          (click)="startQuiz()"
        ></button>
      </div>
    </p-dialog>
  `,
  styles: `
      :host::ng-deep .p-dialog-content{
        padding: 0 45px;
      }
      :host::ng-deep .p-button{
        width:100%;
        border-radius: 100px;
      }
    `,
})
export class InstructionsComponent {
  @Input() isVisible: boolean = true;

  @Output() start = new EventEmitter<void>();

  startQuiz() {
    this.start.emit();
  }
}
