import { Injectable } from '@angular/core';
import { ICourse } from '@shared/interfaces/course';
import { COURSES_LIST } from 'src/assets/data/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  getCourses(): ICourse[] {
    return COURSES_LIST;
  }
}
