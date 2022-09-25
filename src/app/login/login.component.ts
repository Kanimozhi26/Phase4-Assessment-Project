import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showme: boolean = false;

  hideComponent() {
    this.showme = !this.showme;
  }
  loginForm!: FormGroup;
  submitted = false;
  constructor(private frombulider: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.frombulider.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('admin@gmail.com'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('admin@26'),
        ],
      ],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.router.navigate([`dashboard`]);
  }
}