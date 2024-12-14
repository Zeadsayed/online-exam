import { Component } from '@angular/core';
import { MainBtnComponent } from '../../../shared/components/ui/main-btn/main-btn.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MainBtnComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {}
