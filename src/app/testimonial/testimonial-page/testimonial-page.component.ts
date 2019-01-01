import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-testimonial-page',
  templateUrl: './testimonial-page.component.html',
  styleUrls: ['./testimonial-page.component.css']
})
export class TestimonialPageComponent implements OnInit {

testimonials: {id: string,
tagline: string,
title: string,
description: string,
}[];

  feedbacks: {id: number , name: string, userimage: string,
  comments: string,
  company: string}[];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.getPageData('pages', 'testimonials');
    this.getBlockData('feedbacks');

  }

  getPageData(database: string, id?: string) {
    this.config.getSettings(database, id).subscribe(
      data => {
        this.testimonials = data;
        console.log(this.testimonials);
      }
    );
  }

  getBlockData(database: string ) {
    this.config.getSettings(database ).subscribe(
      data => {
        this.feedbacks = data;
        console.log(this.feedbacks);
      }
    );
  }

}
