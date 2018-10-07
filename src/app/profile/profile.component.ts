import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  isLoggedIn: boolean;

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.getUser();

  }

  getUser() {
    this.isLoggedIn = this.auth.isloggedIn();

    if (this.isLoggedIn) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

  }

  logout() {

    this.auth.logout();
  }


}
