import {Component, Input} from '@angular/core';
import {Information} from "./information";

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.css']
})
export class InformationCardComponent {
  @Input() information: Information;

}
