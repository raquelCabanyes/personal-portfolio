import { Component } from '@angular/core';
import { ContactComponent } from '../component/contact/contact.component';
import { AboutComponent } from '../component/about/about.component';
import { ExperienceComponent } from '../component/experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent, AboutComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
