import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  PoFieldModule,
  PoModalModule,
  PoButtonModule,
  PoLinkModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PoFieldModule,
    PoModalModule,
    PoButtonModule,
    PoLinkModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    confirmTerms: new FormControl(false),
  });

  errorPassword = this.signUpForm.value.password;
}
