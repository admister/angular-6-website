import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.footer = this.getFooter();
  }

  getFooter() {
    return this.config.getConfig().footer;
  }
}
