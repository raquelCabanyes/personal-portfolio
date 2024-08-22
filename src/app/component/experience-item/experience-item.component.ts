import { Component, ElementRef, Input, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent implements OnDestroy, AfterViewInit {
  @ViewChild('descriptionDiv', { static: false }) descriptionElem!: ElementRef;

  @Input() title!: string;
  @Input() dates!: string[];
  @Input() description!: string;

  private observerDescription!: IntersectionObserver;

  ngAfterViewInit() {
    this.createDescriptionDivObservable();
  }

  private createDescriptionDivObservable(): void {
    //Create the instance to check if the element is visible
    this.observerDescription = new IntersectionObserver(([entry]) => {
      //Check that the element exists and is visible on the screen
        if (entry && entry.isIntersecting) {
          //Add the fade-in class to the element
          this.descriptionElem.nativeElement.classList.add('fade-in');
          //Remove the observable
          this.observerDescription.unobserve(this.descriptionElem.nativeElement);
        }
      }
    );

    //Create the descriptionElem observable
    this.observerDescription.observe(this.descriptionElem.nativeElement);
  }

  ngOnDestroy() {
    if (this.observerDescription) {
      this.observerDescription.disconnect();
    }
  }
}
