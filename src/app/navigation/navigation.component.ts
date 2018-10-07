import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import * as $ from 'jquery';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  menu: any;
  isloggedIn: boolean;
  menuOpen: boolean;
  database = 'menu';
  isLoggedIn: boolean;


  constructor(private location: Location,
    private auth: AuthenticationService,
    private config: ConfigService
  ) { }

  ngOnInit() {

    this.menuOpen = false;
    this.getMenu();

    }




  logout() {
    this.auth.logout();
  }

  toggleMenu(status: boolean) {
    this.menuOpen = status;
  }

  getMenu() {
    this.config.getsettings(this.database).subscribe(

      setting => {
        this.menu = setting;
        console.log(setting);
      }

    );
  }



}
