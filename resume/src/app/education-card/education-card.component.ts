import {Component, Input} from '@angular/core';
import {Experience} from "../experience-card/experience";
import {Education} from "./education";

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent {
  @Input() educationList: Education[];
}
