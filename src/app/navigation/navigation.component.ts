import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  // activetab: string;
  isloggedIn: boolean;

  constructor(private location: Location, private auth: AuthenticationService) { }

  ngOnInit() {
    // this.activetab = this.location.path();
    // console.log(`from ${this.activetab}`);

    (<any>$)(document).ready(function () {

            /*Responsive Navigation*/
        (<any>$)('#nav-mobile').html((<any>$)('#nav-main').html());
        (<any>$)('#nav-trigger span').on('click', function() {
          if ((<any>$)('nav#nav-mobile ul').hasClass('expanded')) {
            (<any>$)('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
            (<any>$)(this).removeClass('open');
          } else {
            (<any>$)('nav#nav-mobile ul').addClass('expanded').slideDown(250);
            (<any>$)(this).addClass('open');
          }
        });

        (<any>$)('#nav-mobile').html((<any>$)('#nav-main').html());
        (<any>$)('#nav-mobile ul a').on('click', function() {
          if ((<any>$)('nav#nav-mobile ul').hasClass('expanded')) {
            (<any>$)('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
            (<any>$)('#nav-trigger span').removeClass('open');
          }

        });

      /* Sticky Navigation */
        // if (!!(<any>$).prototype.stickyNavbar) {
        //   (<any>$)('#header').stickyNavbar();
        // }

        // (<any>$)('#content').waypoint(function (direction) {
        //   if (direction === 'down') {
        //     (<any>$)('#header').addClass('nav-solid fadeInDown');
        //   } else {
        //     (<any>$)('#header').removeClass('nav-solid fadeInDown');
        //   }
        // });

    });

    }
  // getActiveTab(tabname: string) {
  //   this.activetab = tabname;
  //   console.log(tabname);
  // }

  logout() {
    this.auth.logout();
  }

}
