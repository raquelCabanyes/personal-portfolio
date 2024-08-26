import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { IExperience } from '../../interfaces/experience';

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

  @Input() experienceInfo!: IExperience;

  private observerdescriptionExperience!: IntersectionObserver;

  ngAfterViewInit() {
    const isMDScreen = window.matchMedia('(min-width: 768px)').matches;
    if (isMDScreen) {
      this.createdescriptionExperienceObservable();
    }
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
