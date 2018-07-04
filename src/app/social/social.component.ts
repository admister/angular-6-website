import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  socialsites = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.socialsites = this.getSocialsites();
  }

  getSocialsites() {
  return this.config.getConfig().socialsites;
  }
}
