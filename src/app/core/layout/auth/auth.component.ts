import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, DropdownModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  cities: any;

  selectedCity = 'English';

  ngOnInit() {
    this.cities = [{ name: 'English' }, { name: 'Arabic' }];
  }
}
