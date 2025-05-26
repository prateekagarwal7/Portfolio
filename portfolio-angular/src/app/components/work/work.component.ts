import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-work',
  imports: [CardModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
constructor(){
  console.log("redirected to workx");
}
works=[
  {
    img:'Elemica.png',
    name:'Elemica',
    duration:'June(2024)- Present',
    content:'At Elemica, I developed and enhanced supply chain management software for parcel and LTL shipments using C#, ASP.NET, AngularJS, and MS SQL Server. I was responsible for diagnosing and resolving high-priority production bugs to ensure system stability and optimal performance. Additionally, I designed and implemented new features to improve software functionality, consistently meeting customer expectations within tight deadlines. I actively used JIRA for effective task tracking and project management, and collaborated with cross-functional teams to gather requirements and deliver well-structured, scalable solutions.'
  },
  {
    img:'luxorides logo.webp',
    name:'Luxorides',
    duration:'November(2022)- February(2023)',
    content:'At Luxorides, I led the development of an admin portal, integrating interactive UI/UX and automation features to streamline daily booking operations. I collaborated closely with employees and stakeholders to gather requirements and design an efficient database schema for optimized data storage. My daily responsibilities included performing CRUD operations on a NoSQL database deployed over MongoDB Atlas. To enhance user experience, I leveraged jQuery for creating dynamic and interactive frontend components.'
  }
]
}
