import { CommonModule, Location } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public faPhone = faPhone;
  public faBars = faBars;
  public isActive = false;
  public selectedSection = '/home';
  public widthMovil = 768;

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < this.widthMovil) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.checkSection();
  }

  public checkSection(): void {
    this.selectedSection = this.location.path();
  }

  public showMenu() {
    if (window.innerWidth > 768) {
      return true;
    } else if (this.isActive && window.innerWidth < this.widthMovil) {
      return true;
    }
    return false;
  }
}
