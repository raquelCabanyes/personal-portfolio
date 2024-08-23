import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ICourse } from '../../interfaces/course';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CommonModule } from '@angular/common';

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

  public coursesList: ICourse[] = [
    {
      title: 'Vue 3',
      year: '2023',
      img: {
        src: '../../../assets/icons/vue.svg',
        alt: 'Icono de Vue',
      },
    },
    {
      title: 'Angular Universal',
      year: '2022',
      img: null,
    },
    {
      title: 'Patrones de diseño en Javascript y Node.JS',
      year: '2022',
      img: null,
    },
    {
      title: 'Curso CSS Profesional',
      year: '2022',
      img: {
        src: '../../../assets/icons/css.svg',
        alt: 'Icono de CSS',
      },
    },
    {
      title: 'Curso NgRx',
      year: '2021',
      img: {
        src: '../../../assets/icons/ngrx.svg',
        alt: 'Icono de NgRx',
      },
    },
    {
      title: 'Curso LitElement',
      year: '2020',
      img: {
        src: '../../../assets/icons/lit.svg',
        alt: 'Icono de LitElement',
      },
    },
    {
      title: 'Curso Angular 10',
      year: '2019',
      img: {
        src: '../../../assets/icons/angular.svg',
        alt: 'Icono de Angular',
      },
    },
    {
      title: 'Curso de Scrum Master',
      year: '2018',
      img: null,
    },
    {
      title: 'Curso de Testing Jest',
      year: '2018',
      img: {
        src: '../../../assets/icons/jest.svg',
        alt: 'Icono de Jest',
      },
    },
    {
      title: 'Curso introducción a Cells',
      year: '2018',
      img: null,
    },
    {
      title: 'Curso de ReactJS',
      year: '2018',
      img: {
        src: '../../../assets/icons/react.svg',
        alt: 'Icono de React',
      },
    },
    {
      title: 'Curso de Polymer',
      year: '2017',
      img: {
        src: '../../../assets/icons/polymer.svg',
        alt: 'Icono de Polymer',
      },
    },
  ];

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
