import {Component, HostListener, OnInit} from '@angular/core';
import {CakeService} from "../../service/cake.service";
import {CakeList} from "../../models/cakeList.interface";
import {Cake} from "../../models/cake.interface";

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent  implements OnInit{

  cakeList: CakeList = {};
  cakeListArray: Cake[] = [];
  page: number = 1;
  displayedColumns: string[] = ['image', 'description'];

  currentView: string = 'cards';

  constructor(private cakeService: CakeService) {  }


  ngOnInit(): void {
    this.cakeService.getCakeList(this.page)
      .subscribe(((cakes) => {
        this.cakeList = cakes;
         if(cakes.photos) this.cakeListArray = cakes.photos;
      } ));
    //.subscribe( (cakes) => console.log(cakes));
  }



  toggleView(view: string) {
    this.currentView = view;
  }
}
