import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent {
  @Input() title!: string;
  @Input() dates!: string[];
  @Input() description!: string;

  @ViewChild('description', { static: false }) descriptionElem!: ElementRef;

  private observerResponsibilities!: IntersectionObserver;

  // constructor(private renderer: Renderer2) {}

  // ngAfterViewInit() {
  //   const responsibilitiesElem =
  //     this.containerJobsElem.nativeElement.querySelectorAll(
  //       '.responsibilities'
  //     );

  //   this.observerResponsibilities = new IntersectionObserver(
  //     async ([entry]) => {
  //       if (entry && entry.isIntersecting) {
  //         this.renderer.addClass(entry.target, 'fade-in');
  //         this.observerResponsibilities.unobserve(entry.target);
  //       }
  //     }
  //   );

  //   responsibilitiesElem.forEach((element: Element) => {
  //     this.observerResponsibilities.observe(element);
  //   });
  // }
}
