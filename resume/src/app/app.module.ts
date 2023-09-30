import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { BadgeComponent } from './shared/badge/badge.component';
import { LanguageCardComponent } from './language-card/language-card.component';
import { SkillsCardComponent } from './skills-card/skills-card.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ResumeScreenComponent } from './resume-screen/resume-screen.component';
import { HomepageScreenComponent } from './homepage-screen/homepage-screen.component';
import { NavigationbarComponent } from './navigation-bar/navigation-bar.component';
import { ProjectsScreenComponent } from './projects-screen/projects-screen.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';
import { ExperienceItemComponent } from './experience-card/experience-item/experience-item.component';
import { EducationCardComponent } from './education-card/education-card.component';
import { EducationItemComponent } from './education-card/education-item/education-item.component';
import { InformationCardComponent } from './information-card/information-card.component';
// import { EducationCardComponent } from './education-card/education-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    BadgeComponent,
    LanguageCardComponent,
    SkillsCardComponent,
    SummaryCardComponent,
    ExperienceCardComponent,
    ResumeScreenComponent,
    HomepageScreenComponent,
    NavigationbarComponent,
    ProjectsScreenComponent,
    PreviewCardComponent,
    ExperienceItemComponent,
    EducationCardComponent,
    EducationItemComponent,
    InformationCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
