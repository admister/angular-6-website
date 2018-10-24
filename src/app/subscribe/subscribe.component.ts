import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribeForm: FormGroup;
  sending: boolean;

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.subscribeForm = this.fb.group({
      'email' : [null, [Validators.required, Validators.email]]
    });
    this.sending = false;

  }

  subscribe(formData: NgForm) {
    this.sending = true;
    console.log(formData);
    setTimeout(() => {
      this.sending = false;
      this.cancelForm();
    }, 1000);
  }

  cancel() {
    this.cancelForm();
  }

  cancelForm() {
    this.router.navigate([{outlets: { popup: null }}] );
  }

}
