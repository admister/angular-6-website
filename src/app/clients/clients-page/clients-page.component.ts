import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit {

  clients: {id: string,
  tagline: string,
  title: string,
  description: string,
}[];

  companies: {id: number , name: string, weblink: string, logo: string}[];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.getPageData('pages', 'clients');
    this.getBlockData('companies');

  }

  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.clients = data;
        console.log(this.clients);
      }
    );
  }

  getBlockData(database: string ) {
    this.config.getSettings(database ).subscribe(
      data => {
        this.companies = data;
        console.log(this.companies);
      }
    );
  }

}
