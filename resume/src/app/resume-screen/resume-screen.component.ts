import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume-screen.component.html',
  styleUrls: ['./resume-screen.component.css']
})
export class ResumeScreenComponent {
  title = 'resume';
  progList = ['Java', 'Kotlin', 'Dart', 'Python']
}
