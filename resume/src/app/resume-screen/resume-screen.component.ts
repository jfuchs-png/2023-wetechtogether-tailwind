import {Component} from '@angular/core';
import {Experience} from "../experience-card/experience";

@Component({
    selector: 'app-resume',
    templateUrl: './resume-screen.component.html',
    styleUrls: ['./resume-screen.component.css']
})
export class ResumeScreenComponent {
    title = 'resume';
    progList = ['Java', 'Kotlin', 'Dart', 'Python', 'Dart', 'Haskell', 'Prolog', 'JavaScript']
    otherSkills = ['Git', 'Scrum', 'Google Colab']

    languages: { [key: string]: string } = {'German': 'C2', 'French': 'C1', 'English': 'C2', 'Italian': 'B2'};

    aboutMeText = 'I am a dedicated software engineer at ipt with a strong background, having graduated from the University of Bern. My professional journey is fueled by a profound passion for artificial intelligence and its transformative potential. With a solid foundation in both academics and industry, I am committed to crafting innovative solutions that harness the power of AI to drive technological advancement.\n'

    experiences: Experience[] = [
        {
            imgSource: 'https://ipt.ch/static/img/logo_ipt.e41536c42e31.svg',
            jobTitle: 'Consultant',
            employer: 'ipt',
            employerLocation: 'Zürich',
            workload: 'Full Time',
            timespan: 'June 2019 – Present',
            jobDescription: 'Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.',
            isLastItem: false
        },
        {
            imgSource: '/assets/postfinance.webp',
            jobTitle: 'ICT Test Engineer',
            employer: 'PostFinance',
            employerLocation: 'Bern',
            workload: 'Full Time',
            timespan: 'April 2022 – July 2023',
            jobDescription: 'Aut omnis voluptatem sit sequi. Voluptatem temporibus repellat voluptatem voluptatibus enim voluptas necessitatibus. Aut quasi sunt dolor. Commodi dolores saepe asperiores beatae voluptate corporis est ea voluptatem. Enim quo sed et sint aspernatur distinctio qui quam.',
            isLastItem: true
        }
        ]
}
