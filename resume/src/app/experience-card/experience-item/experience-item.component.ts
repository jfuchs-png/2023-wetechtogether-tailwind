import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {
  @Input() imgSource: string;
  @Input() jobTitle: string;
  @Input() employer: string;
  @Input() employerLocation: string;
  @Input() workload: string;
  @Input() timespan: string;
  @Input() jobDescription: string;
  @Input() isLastItem = false;

}
