import { Component } from '@angular/core';
import {SharedService} from "./service/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pac5-pwa-madebo';
  loading: boolean;

  constructor(private sharedService: SharedService) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.sharedService
      .getLoading()
      .subscribe((loading) => (this.loading = loading));
  }
}
