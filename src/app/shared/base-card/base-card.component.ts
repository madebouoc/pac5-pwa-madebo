import {Component, Input} from '@angular/core';
import {Cake} from "../../models/cake.interface";

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent {

  @Input() myCakes: Cake[] = [];



}
