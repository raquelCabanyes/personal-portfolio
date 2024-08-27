import { Component, Input } from '@angular/core';
import { ICourse } from '@shared/interfaces/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.scss',
})
export class CourseItemComponent {
  @Input() courseInfo!: ICourse;
}
