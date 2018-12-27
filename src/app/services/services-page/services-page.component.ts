import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  services: {id: string,
  tagline: string,
  title: string,
  description: string
}[];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.getPageData('pages', 'services');
  }

  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.services = data;
        console.log(this.services);
      }
    );
  }

}
