import { Component } from '@angular/core';
import { ContactComponent } from '../component/contact/contact.component';
import { AboutComponent } from '../component/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
