import { Component, ElementRef, Renderer2, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChild('containerJobs', { static: false }) containerJobsElem!: ElementRef;

  private observerResponsibilities!: IntersectionObserver;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const responsibilitiesElem = this.containerJobsElem.nativeElement.querySelectorAll('.responsibilities');

    this.observerResponsibilities = new IntersectionObserver(async ([entry]) => {
      if (entry && entry.isIntersecting) {
        this.renderer.addClass(entry.target, 'fade-in');
        this.observerResponsibilities.unobserve(entry.target);
      }
    });

    responsibilitiesElem.forEach((element: Element) => {
      this.observerResponsibilities.observe(element);
    });
  }
}
