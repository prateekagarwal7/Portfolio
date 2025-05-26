import { Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';

export const routes: Routes = [
    {path:'skills', component:SkillsComponent},
    {path:'work',component:WorkComponent}
];
