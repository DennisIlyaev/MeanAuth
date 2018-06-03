import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  template: `
  <h2 class="h2-responsive">User List</h2>
  <hr>
<div class="container-fluid">
  <div class="row">
    <div class="col-7">
    <div class="list-group">
    <ul>
      <li class="list-group-item waves-effect" (click)='this.selectedData = user' *ngFor='let user of data'>
      Email: <span style='font-weight: bold'>{{user.email}}</span>
      <br> Password: <span style='font-weight: bold'>{{user.password}}</span></li>
    </ul>
  </div>
    </div>

    <div class="col">
    <div class="list-group">
    <ul>


<form *ngIf='selectedData' class='position-fixed'>
    <p class="h4 text-center mb-4">Actions</p>

    <label for="defaultFormLoginEmailEx" class="grey-text">Email</label>
    <input type="email" name='email' id="defaultFormLoginEmailEx" class="form-control" required [(ngModel)]='selectedData.email'>

    <br>

    <label for="defaultFormLoginPasswordEx" class="grey-text">Password</label>
    <input type="text" name='password' id="defaultFormLoginPasswordEx" class="form-control" required [(ngModel)]='selectedData.password'>

    <div class="text-center mt-4">
        <button class="btn btn-warning" (click)='updateUser(this.selectedData)'>Update</button>
        <button class="btn btn-danger" (click)='deleteUser(this.selectedData)'>Delete</button>
        <button class="btn btn-outline-elegant" (click)='this.selectedData = null'>Cancel</button>
    </div>
</form>
<!-- Default form login -->

    </ul>
  </div>
    </div>
  </div>
  `,
  styles: [`
    form {
      max-width: 25%;
    }

    .container-fluid {
      min-height: 600px;
    }
  `]
})
export class PrivateComponent implements OnInit {
  data;
  selectedData;
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.http.getData().subscribe(result => this.data = result,
    err => {
      // tslint:disable-next-line:curly
      if (err instanceof HttpErrorResponse) this.router.navigate(['/login']);
    });
  }

  updateUser(user) {
    this.http.updateData(user).subscribe(() => this.selectedData = null);
  }

  deleteUser(user) {
    this.http.deleteData(user).subscribe(() => {
       for (let i = 0; i < this.data.length; i++) {
        // tslint:disable-next-line:no-unused-expression
        this.data[i]._id === user._id ? this.data.splice(i, 1) : null;
       }
      this.selectedData = null;
    });
  }

}
