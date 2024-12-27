import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-btn.component.html',
  styleUrl: './main-btn.component.css',
})
export class MainBtnComponent {
  @Input() text = 'Next';
  @Input() classes = '';
  @Input() type = 'button';
  @Input() isLoading = false;
  @Input() condition = false;

  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  do(event: any) {
    this.clickEmitter.emit(event);
  }
}
