import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    SplitButtonModule,
    FormsModule,
    ButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'English',
      },
      {
        label: 'Arabic',
      },
    ];
  }
}
