import {Component, HostListener} from '@angular/core';
import {CakeService} from "../../service/cake.service";
import {CakeList} from "../../models/cakeList.interface";

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent {

  cakeList: CakeList = {};
  page: number = 1;

  constructor(private cakeService: CakeService) {  }

  /*
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.addToList();
    }
  }
   */

  ngOnInit(): void {
    this.cakeService.getCakeList(this.page)
      .subscribe(((cakes) => this.cakeList = cakes));
    //.subscribe( (cakes) => console.log(cakes));
  }

/*
  addToList(): void {
    this.page++;
    this.cakeService.nextPage(this.page)
      .subscribe(((cakes) => {
        if (this.cakeList && cakes.photos) {
          // @ts-ignore
          this.cakeList.photos = [...this.cakeList.photos, ...cakes.photos];
        }
      }));
  }
 */
}
