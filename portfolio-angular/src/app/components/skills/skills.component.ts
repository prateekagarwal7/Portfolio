import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-skills',
  imports: [CarouselModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  constructor(){
    console.log("redirected");
  }
products=[{
    'name':'c.svg'
  }
];
}
