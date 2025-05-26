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
  },
  {
    'name':'angular.svg'
  },
  {
    'name':'Net.svg'
  },
  {
    'name':'microsoft-sql-server.svg'
  },
  {
    'name':'python.svg'
  },
  {
    'name':'bootstrap.svg'
  },
  {
    'name':'c-sharp-logo.svg'
  },
  {
    'name':'css.svg'
  },
  {
    'name':'github.svg'
  },
  {
    'name':'html5.svg'
  },
  {
    'name':'javascript.svg'
  },
  {
    'name':'jira.svg'
  },
  {
    'name':'jquery.svg'
  },
  {
    'name':'mongodb.svg'
  },
  {
    'name':'postman-api.svg'
  },
  {
    'name':'python.svg'
  },
  {
    'name':'typescript.svg'
  }
];
}
