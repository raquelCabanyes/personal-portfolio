import { Component, OnInit } from '@angular/core';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { ExperiencesService } from '@core/services/experiences.service';
import { IExperience } from '@shared/interfaces/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  providers: [ExperiencesService],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  public experienceList: IExperience[] = [];

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.experienceList = this.experiencesService.getExperience();
  }
}
