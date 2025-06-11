import { Component } from '@angular/core';
import { github } from '../../../environments/environment.prod';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   git=github.url;
}
