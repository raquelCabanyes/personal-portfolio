import { Component } from '@angular/core';
import { ContactComponent } from '../../@shared/components/contact/contact.component';
import { AboutComponent } from '../../@shared/components/about/about.component';
import { ExperienceComponent } from '../../@shared/components/experience/experience.component';
import { CoursesComponent } from '../../@shared/components/courses/courses.component';

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
