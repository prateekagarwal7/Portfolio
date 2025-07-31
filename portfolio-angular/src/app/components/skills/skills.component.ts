import { Component, HostListener } from '@angular/core';
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
  numVisible = 3;
  numScroll = 3;
  @HostListener('window:resize',[])
  onResize() {
    this.updateCarousel();
  }
products=[{
    'name':'c.svg',
    'title':'C++',
    'description':'Strong foundation in object-oriented programming, data structures, and algorithms using C++.'

  },
  {
    'name':'angular.svg',
    'title':'Angular',
    'description':'Used AngularJS in enterprise web apps for dynamic front-end development and component-based architecture.'

  },
  {
    'name':'Net.svg',
    'title':'.NET',
    'description':'Worked extensively on .NET and MVC architecture for backend development in supply chain software.'

  },
  {
    'name':'microsoft-sql-server.svg',
    'title':'MS SQL Server',
    'description':'Experienced in writing complex queries, joins, and managing relational databases in .NET applications.'

  },
  {
    'name':'python.svg',
    'title':'Python',
    'description':'Used in data analysis and scripting. Built Olympic analytics project and automations using Python.'
  },
  {
    'name':'bootstrap.svg',
    'title':'Bootstrap',
    'description':'Implemented responsive UI layouts and dashboards with Bootstrap’s grid system and components.'

  },
  {
    'name':'c-sharp-logo.svg',
    'title':'C#',
    'description':'Developed backend logic in C# within MVC framework during internship and full-time projects.'

  },
  {
    'name':'css.svg',
    'title':'CSS',
    'description':'Styled multiple projects including YourTube and admin dashboards with custom CSS and responsiveness.'

  },
  {
    'name':'github.svg',
    'title':'GitHub',
    'description':'Used for version control and collaboration across multiple development projects and internships.'

  },
  {
    'name':'html5.svg',
    'title':'HTML5',
    'description':'Created structured and semantic web pages for various full-stack applications and UI modules.'

  },
  {
    'name':'javascript.svg',
    'title':'Javascript',
    'description':'Built interactive features and handled client-side logic in YourTube and Payroll Management System.'

  },
  {
    'name':'jira.svg',
    'title':'JIRA',
    'description':'Used in team environments for agile development, sprint planning, and tracking production issues.'

  },
  {
    'name':'jquery.svg',
    'title':'JQuery',
    'description':'Utilized for DOM manipulation and event handling in legacy code during web enhancement tasks.'

  },
  {
    'name':'mongodb.svg',
    'title':'MongoDB',
    'description':'Designed and managed NoSQL schemas in MongoDB Atlas for Admin Portal in internship.'

  },
  {
    'name':'postman-api.svg',
    'title':'Postman',
    'description':'Tested RESTful APIs and verified backend integrations during full-stack application development.'

  },
  {
    'name':'typescript.svg',
    'description':'Worked with Angular applications where TypeScript ensured type safety and clean code structure.',
    'title':'TypeScript'

  }
];
updateCarousel() {
    const width = window.innerWidth;
    if (width <= 770) {
      this.numVisible = 1;
      this.numScroll = 1;
    } else if (width <= 1410) {
      this.numVisible = 2;
      this.numScroll = 2;
    } else {
      this.numVisible = 3;
      this.numScroll = 3;
    }
  }
}
