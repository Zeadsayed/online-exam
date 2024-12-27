import { Component, inject, OnInit } from '@angular/core';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { SubjectsService } from '../../../shared/services/subjects.service';
import { QuizesComponent } from '../quizes/quizes.component';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
