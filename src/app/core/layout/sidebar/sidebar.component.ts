import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { ConfirmationService } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToastService } from '../../../shared/services/toast.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule, NgClass, RouterLinkActive, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers: [ConfirmationService],
})
export class SidebarComponent {
  isSidebarExpanded = true;
  private _AuthApiService = inject(AuthApiService);
  private _confirmationService = inject(ConfirmationService);
  private _toastService = inject(ToastService);
  menuItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: 'home',
      routerLinkActive: 'active',
    },
    {
      label: 'Quiz History',
      icon: 'pi pi-clock',
      routerLink: '/quiz-history',
      routerLinkActive: 'active',
    },
    {
      label: 'Log Out',
      icon: 'pi pi-sign-out',
      command: () => this.logOut(),
    },
  ];

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  logOut() {
    this._confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this._AuthApiService.logOut().subscribe((res) => {
          this._toastService.showToast('Logout Success', 'info');
        });
      },
    });
  }

  // confirm1(event: Event) {
  //   this._confirmationService.confirm({
  //     target: event.target as EventTarget,
  //     message: 'Are you sure that you want to Logout?',
  //     header: 'Confirmation',
  //     closable: true,
  //     closeOnEscape: true,
  //     icon: 'pi pi-exclamation-triangle',
  //     rejectButtonProps: {
  //       label: 'Cancel',
  //       severity: 'secondary',
  //       outlined: true,
  //     },
  //     acceptButtonProps: {
  //       label: 'Logout',
  //       severity: 'danger',
  //     },
  //     accept: () => {
  //       this._toastService.showToast('Logout Success', 'info');
  //     },
  //     reject: () => {
  //       return;
  //     },
  //   });
  // }
}
