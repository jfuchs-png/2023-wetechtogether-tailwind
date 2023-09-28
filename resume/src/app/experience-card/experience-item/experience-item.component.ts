import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {
  @Input() imgSource = '';
  @Input() jobTitle = '';
  @Input() employer = '';
  @Input() employerLocation = '';
  @Input() workload = '';
  @Input() timespan = '';
  @Input() jobDescription = '';
  @Input() isLastItem = false;

}
