import {Component, Input, OnInit} from '@angular/core';
import {Cake} from "../../models/cake.interface";

@Component({
  selector: 'app-base-grid',
  templateUrl: './base-grid.component.html',
  styleUrls: ['./base-grid.component.scss']
})
export class BaseGridComponent{

  @Input() myCakes : Cake[] = [];
  displayedColumns: string[] = ['image', 'description'];

}
