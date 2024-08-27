import { Injectable } from '@angular/core';
import { IExperience } from '@shared/interfaces/experience';
import { EXPERIENCE_LIST } from 'src/assets/data/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  getExperience(): IExperience[] {
    return EXPERIENCE_LIST;
  }
}
