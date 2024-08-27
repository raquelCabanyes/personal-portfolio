import { Component } from '@angular/core';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { IExperience } from '@shared/interfaces/experience';
import { EXPERIENCE_LIST } from 'src/assets/data/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  public experienceList: IExperience[] = EXPERIENCE_LIST
}
