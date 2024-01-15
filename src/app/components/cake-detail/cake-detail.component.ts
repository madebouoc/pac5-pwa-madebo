import {Component, OnInit} from '@angular/core';
import {Cake} from "../../models/cake.interface";
import {CakeService} from "../../service/cake.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.scss']
})
export class CakeDetailComponent implements OnInit {
  cake: Cake | undefined;
  panelOpenState = false;

  constructor(private imagesService: CakeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier -> ', identifier);
    if(identifier){

      // @ts-ignore
      this.imagesService.getCakeDetail(identifier).subscribe((cake) => {
        if (!cake) {
          return this.router.navigateByUrl('/');
        }
        this.cake = cake;
        console.log('Image --> ', this.cake);
      });
    }
  }
}
