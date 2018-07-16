import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


  contactusForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactusForm = this.fb.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'message' : [null, Validators.required],
    });

  }

  sendMessage(formData: NgForm) {
    console.log(formData);
  }

}
