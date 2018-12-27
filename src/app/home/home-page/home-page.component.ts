import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  header: {id: string,
  heading: string,
  headingtext: string,
  buttontext: string,
  buttonlink: string,
  image: string
}[];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.getPageData('pages', 'header');
  }

  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.header = data;
        console.log(this.header);
      }
    );
  }

}
