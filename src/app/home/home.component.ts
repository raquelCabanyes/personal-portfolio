import { Component } from '@angular/core';
import { ContactComponent } from '../component/contact/contact.component';
import { AboutComponent } from '../component/about/about.component';
import { ExperienceComponent } from '../component/experience/experience.component';
import { CoursesComponent } from '../component/courses/courses.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactComponent,
    AboutComponent,
    ExperienceComponent,
    CoursesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
