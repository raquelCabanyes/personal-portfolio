import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public iconLikedin = '../../../assets/icons/linkedin.svg';
  public urlLikedin = 'https://es.linkedin.com/in/raquelcabanyes';
}
