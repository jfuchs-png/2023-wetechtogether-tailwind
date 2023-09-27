import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume-screen.component.html',
  styleUrls: ['./resume-screen.component.css']
})
export class ResumeScreenComponent {
  title = 'resume';
  progList = ['Java', 'Kotlin', 'Dart', 'Python']

  languages: {[key: string]: string} = {'German': 'C2', 'French': 'C1', 'English': 'C2', 'Italian': 'B2'};

  aboutMeText = 'I am a dedicated software engineer at ipt with a strong background, having graduated from the University of Bern. My professional journey is fueled by a profound passion for artificial intelligence and its transformative potential. With a solid foundation in both academics and industry, I am committed to crafting innovative solutions that harness the power of AI to drive technological advancement.\n'
}
