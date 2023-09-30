import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {
  @Input() imgSource: string;
  @Input() studies: string;
  @Input() school: string;
  @Input() schoolLocation: string;
  @Input() workload: string;
  @Input() timespan: string;
  @Input() educationDescription: string;
  @Input() isLastItem = false;
}
