import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeScreenComponent } from './resume-screen/resume-screen.component';
import { HomepageScreenComponent } from './homepage-screen/homepage-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageScreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'cv',
    component: ResumeScreenComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: HomepageScreenComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
