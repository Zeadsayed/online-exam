import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-btn',
  standalone: true,
  imports: [],
  templateUrl: './main-btn.component.html',
  styleUrl: './main-btn.component.css',
})
export class MainBtnComponent {
  @Input() text = 'Next';
  @Input() classes = 'w-auto';
  @Input() type = 'button';

  @Output() clickEmitter: EventEmitter<any> = new EventEmitter<any>();

  do(event: any) {
    this.clickEmitter.emit(event);
  }
}
