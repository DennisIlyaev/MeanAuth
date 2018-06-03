import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="row">
  <div class="col-md-6 mb-4">

      <!--Card Primary-->
      <div class="card indigo text-center z-depth-2">
          <div class="card-body">
              <p class="white-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.</p>
          </div>
      </div>
      <!--/.Card Primary-->
      <br>
      <!--Card Danger-->
      <div class="card pink lighten-2 text-center z-depth-2">
          <div class="card-body">
              <p class="white-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.</p>
          </div>
      </div>
      <!--/.Card Danger-->
      <br>
      <!--Card Success-->
      <div class="card info-color text-center z-depth-2">
          <div class="card-body">
              <p class="white-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.</p>
          </div>
      </div>
      <!--/.Card Success-->

  </div>

  <div class="col-md-6">

      <!--Card Warning-->
      <div class="card red lighten-1 text-center z-depth-2">
          <div class="card-body">
              <p class="white-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.</p>
          </div>
      </div>
      <!--/.Card Warning-->
      <br>
      <!--Card Info-->
      <div class="card success-color text-center z-depth-2">
          <div class="card-body">
              <p class="white-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.</p>
          </div>
      </div>
      <!--/.Card Info-->
      <br>
      <!--Card Default-->
      <div class="card mdb-color lighten-2 text-center z-depth-2">
          <div class="card-body">
              <p class="white-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                  erat a ante.</p>
          </div>
      </div>
      <!--/.Card Default-->

  </div>
</div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
