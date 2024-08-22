import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
})
export class ExperienceItemComponent implements OnDestroy, AfterViewInit {
  @ViewChild('descriptionExperienceDiv', { static: false })
  descriptionExpElem!: ElementRef;

  @Input() title!: string;
  @Input() dates!: string[];
  @Input() descriptionExperience!: string;

  private observerdescriptionExperience!: IntersectionObserver;

  ngAfterViewInit() {
    this.createdescriptionExperienceObservable();
  }

  private createdescriptionExperienceObservable(): void {
    this.observerdescriptionExperience = new IntersectionObserver(([entry]) => {
      //Check that the element exists and is visible on the screen
      if (entry && entry.isIntersecting) {
        this.descriptionExpElem.nativeElement.classList.add('fade-in');
        this.observerdescriptionExperience.unobserve(
          this.descriptionExpElem.nativeElement
        );
      }
    });

    this.observerdescriptionExperience.observe(
      this.descriptionExpElem.nativeElement
    );
  }

  ngOnDestroy() {
    if (this.observerdescriptionExperience) {
      this.observerdescriptionExperience.disconnect();
    }
  }
}
