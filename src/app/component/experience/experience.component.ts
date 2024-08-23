import { Component } from '@angular/core';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
import { EXPERIENCE_LIST } from '../../../assets/data/data_experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  public experienceList = EXPERIENCE_LIST;
}
