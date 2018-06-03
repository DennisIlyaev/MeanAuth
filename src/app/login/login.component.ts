import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  template: `
  <div class="container">
  <!-- Material form register -->
  <form ngNativeValidate #form='ngForm' (ngSubmit)='loginUser(form.value)'>
      <p class="h4 text-center mb-4">Login</p>
      <div class="md-form">
          <i class="fa fa-envelope prefix grey-text"></i>
          <input type="email" name='email' id="materialFormRegisterEmailEx" class="form-control" ngModel required>
          <label for="materialFormRegisterEmailEx">Email</label>
      </div>
      <br>
      <div class="md-form">
      <i class="fa fa-lock prefix grey-text"></i>
      <input type="password" name='password' id="materialFormLoginPasswordE" class="form-control" ngModel required>
      <label for="materialFormLoginPasswordE">Password</label>
  </div>
  <br *ngIf='errorMessage'>
      <div *ngIf='errorMessage' class="alert alert-danger" role="alert">
          {{errorMessage}}
        </div>
     <br>
      <div class="text-center mt-4">
          <button class="btn btn-success" type="submit">Login</button>
      </div>
  </form>
  </div>
  `,
  styles: [`
  .container {
    max-width: 35%;
   }
`]
})
export class LoginComponent implements OnInit {
    errorMessage;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(data) {
    this.auth.loginUser(data).subscribe(
        res => {
        localStorage.setItem('token', res['token']);
        this.router.navigate(['/users']);
        },
        err => {
            if (err instanceof HttpErrorResponse) {
                this.errorMessage = err.error;
            }
        }
    );
  }

}
