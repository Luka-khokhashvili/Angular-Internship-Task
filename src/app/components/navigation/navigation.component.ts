import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navigationOpen: boolean = true;
  isMobile: boolean = false;
  initialized: boolean = false;

  toggleNavigation() {
    this.navigationOpen = !this.navigationOpen;
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    if (!this.initialized && this.isMobile) {
      this.navigationOpen = false;
      this.initialized = true;
    }
  }
}
