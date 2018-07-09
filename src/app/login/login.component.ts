import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });

    this.returnUrl = this.route.queryParams['returnUrl'] || '/';
  }

  login(formData: NgForm) {
    return this.auth.login(formData)
    .subscribe(usr => {
      this.router.navigate([this.returnUrl]);
      console.log(usr);
    });
  }
}
