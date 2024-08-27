import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CourseItemComponent } from './course-item/course-item.component';
import { CommonModule } from '@angular/common';
import { COURSES_LIST } from '../../../../assets/data/courses';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseItemComponent, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { static: false }) containerElem!: ElementRef;

  private observerDiv!: IntersectionObserver;

  public coursesList = COURSES_LIST;

  private addAnimationToCoursesElements(): void {
    //If the animation delay is done in the child, all the animations are shown at the same time
    const courseElements = Array.from<HTMLElement>(
      this.containerElem.nativeElement.getElementsByClassName(
        'animated-element'
      )
    );
    const totalCourses = courseElements.length;
    courseElements.forEach((elem: HTMLElement, index: number) => {
      elem.classList.add('showAnimation');
      //Show animation first in older courses
      elem.style.animationDelay = `${(totalCourses - (index + 1)) * 0.3}s`;
    });
  }

  ngAfterViewInit() {
    this.observerDiv = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        //Check that the element exists and is visible on the screen
        if (entry && entry.isIntersecting) {
          //Added animation and delay time to display in cascade
          this.addAnimationToCoursesElements();
          this.observerDiv.unobserve(entry.target);
        }
      });
    });

    this.observerDiv.observe(this.containerElem.nativeElement);
  }

  ngOnDestroy() {
    if (this.observerDiv) {
      this.observerDiv.disconnect();
    }
  }
}
