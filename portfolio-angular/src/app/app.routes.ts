import { Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'skills', component:SkillsComponent},
    {path:'work',component:WorkComponent},
    {path:'contact',component:FormComponent},
    {path:'',component:HomeComponent}
];
