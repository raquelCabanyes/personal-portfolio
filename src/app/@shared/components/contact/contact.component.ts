import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public iconLikedin = 'assets/icons/linkedin.svg';
  public iconFile = 'assets/icons/file.svg';
  public iconEnvelope = 'assets/icons/envelope.svg';

  public fotoPath = '/assets/photo/photo1.jpg';

  public urlLikedin = 'https://es.linkedin.com/in/raquelcabanyes';
  public urlFileCV =
    'https://drive.google.com/file/d/1SOoCrJliI0O-mcO2nRFu6kdfMrEpjpL8/view?usp=sharing';
}
