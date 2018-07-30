import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConfigService } from '../config.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  header = { };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.header = this.getHeader();
    if (!!(<any>$).prototype.enllax) {
      (<any>$)(window).enllax();
    }
  }

  ngAfterViewInit() {
    /* Parallax Effects */
    (<any>$)(window).on('load', function () {
  if (!!(<any>$).prototype.enllax) {
    (<any>$)(window).enllax();
  }});
  }

  getHeader() {
    return this.config.getConfig().header;
  }

}
