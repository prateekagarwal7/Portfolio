import { Component } from '@angular/core';
//import { links } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  links={
    url:'https://github.com/prateekagarwal7',
    lkdlnurl:'https://www.linkedin.com/in/prateek-agarwal-6296bb201/'
  }
   git=this.links.url;
   lkdn=this.links.lkdlnurl;
}
