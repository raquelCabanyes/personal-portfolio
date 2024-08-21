import { Component } from '@angular/core';
import { ContactComponent } from '../component/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
