import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent implements OnInit {

  pricing: { id: string,
    tagline: string,
    title: string,
    description: string,
  }[];

  plans: {id: 1, title: string, subtitle: string,
    description: string, price: string, currency: string,
    downloads: string, extensions: string,
    tutorials: string, support: string, updates: string,
    buttontext: string, buttonlink: string, featured: false
    }[];

    constructor(private config: ConfigService) { }

    ngOnInit() {
      this.getPageData('pages', 'pricing');
      this.getBlockData('plans');

    }

    getPageData(database: string, id?: string) {
      this.config.getSettings(database, id).subscribe(
        data => {
          this.pricing = data;
          console.log(this.pricing);
        }
      );
    }

    getBlockData(database: string ) {
      this.config.getSettings(database ).subscribe(
        data => {
          this.plans = data;
          console.log(this.plans);
        }
      );
    }

}
