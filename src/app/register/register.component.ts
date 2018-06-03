import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `

 <div class="container">
 <!-- Material form register -->
 <form ngNativeValidate #form='ngForm' (ngSubmit)='registerUser(form.value)'>
     <p class="h4 text-center mb-4">Register</p>

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
    <br>
     <div class="text-center mt-4">
         <button class="btn btn-primary" type="submit">Register</button>
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
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(user) {
    this.auth.registerUser(user).subscribe(
      res => {
        localStorage.setItem('token', res['token']);
        this.router.navigate(['/users']);
      },
      err => console.log(err)
    );
  }

}
