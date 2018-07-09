import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';

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
      'email': [null, Validators.required],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'password': [null, Validators.required],
    });
  }

  sendMessage (formData: NgForm) {
    console.log(formData);
  }

}
