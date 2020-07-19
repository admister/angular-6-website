import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  services: {id: number,
    name: string,
    tagline: string,
    title: string,
    description: string
  }[];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.getPageData('pages', 3);
  }

  getPageData(database: string, id?: number) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.services = data;
        console.log(this.services);
      }
    );
  }

}
