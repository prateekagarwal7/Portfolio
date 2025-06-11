import { Component } from '@angular/core';
import { links } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   git=links.url;
   lkdn=links.lkdlnurl;
}
