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
  }
products=[{
    'name':'c.svg',
    'title':'C++',
    'description':''

  },
  {
    'name':'angular.svg',
    'title':'Angular',
    'description':''

  },
  {
    'name':'Net.svg',
    'title':'.NET',
    'description':''

  },
  {
    'name':'microsoft-sql-server.svg',
    'title':'MS SQL Server',
    'description':''

  },
  {
    'name':'python.svg',
    'title':'Python',
    'description':''
  },
  {
    'name':'bootstrap.svg',
    'title':'Bootstrap',
    'description':''

  },
  {
    'name':'c-sharp-logo.svg',
    'title':'C#',
    'description':''

  },
  {
    'name':'css.svg',
    'title':'CSS',
    'description':''

  },
  {
    'name':'github.svg',
    'title':'GitHub',
    'description':''

  },
  {
    'name':'html5.svg',
    'title':'HTML5',
    'description':''

  },
  {
    'name':'javascript.svg',
    'title':'Javascript',
    'description':''

  },
  {
    'name':'jira.svg',
    'title':'JIRA',
    'description':''

  },
  {
    'name':'jquery.svg',
    'title':'JQuery',
    'description':''

  },
  {
    'name':'mongodb.svg',
    'title':'MongoDB',
    'description':''

  },
  {
    'name':'postman-api.svg',
    'title':'Postman',
    'description':''

  },
  {
    'name':'python.svg',
    'title':'Python',
    'description':''

  },
  {
    'name':'typescript.svg',
    'description':'',
    'title':'TypeScript'

  }
];
}
