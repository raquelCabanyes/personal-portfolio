import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements AfterViewInit {
  @ViewChild('container', { static: false }) containerElem!: ElementRef;

  private observerDiv!: IntersectionObserver;

  public iconVue = '../../../assets/icons/vue.svg';
  public iconCSS = '../../../assets/icons/css.svg';
  public iconNgRx = '../../../assets/icons/ngrx.svg';
  public iconLit = '../../../assets/icons/lit.svg';
  public iconAngular = '../../../assets/icons/angular.svg';
  public iconJest = '../../../assets/icons/jest.svg';
  public iconReact = '../../../assets/icons/react.svg';
  public iconPolymer = '../../../assets/icons/polymer.svg';

  ngAfterViewInit() {
    this.observerDiv = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry && entry.isIntersecting) {
          const elementsToShow = Array.from(this.containerElem.nativeElement.querySelectorAll('.animated-element')).reverse() as HTMLElement[];
          elementsToShow.forEach((element: HTMLElement, index: number) => {
              element.classList.add('show');
              const delay = (index + 1) * 0.3;
              element.style.animationDelay = `${delay}s`;

          });
          this.observerDiv.unobserve(entry.target);
        }
      });
    });

    this.observerDiv.observe(this.containerElem.nativeElement);
  }
}
