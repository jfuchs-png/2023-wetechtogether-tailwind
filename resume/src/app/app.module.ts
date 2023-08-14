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
import { EducationCardComponent } from './education-card/education-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    BadgeComponent,
    LanguageCardComponent,
    SkillsCardComponent,
    SummaryCardComponent,
    ExperienceCardComponent,
    EducationCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
