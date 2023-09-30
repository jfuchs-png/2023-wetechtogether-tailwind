import {Component, Input} from '@angular/core';
import {Experience} from "./experience";

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent {
  @Input() experiences: Experience[];
}
