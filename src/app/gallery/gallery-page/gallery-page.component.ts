import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {
  gallery: {id: number,
    name: string,
    tagline: string,
    title: string,
    description: string
  }[];

  images: {
    id: number,
    name: string}[];

    constructor(private config: ConfigService) { }

    ngOnInit() {
      this.getPageData('pages', 6);
      this.getBlockData('gallery');

    }

    getPageData(database: string, id?: number) {
      this.config.getSettings(database, id).subscribe(
        data => {
          this.gallery = data;
          console.log(this.gallery);
        }
      );
    }

    getBlockData(database: string ) {
      this.config.getSettings(database ).subscribe(
        data => {
          this.images = data;
          console.log(this.images);
        }
      );
    }

}
