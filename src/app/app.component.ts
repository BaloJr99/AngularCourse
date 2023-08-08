import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
    <div class="container-fluid">
      <nav class="navbar navbar-expand navbar-light bg-light">
        <a class="navbar-brand">{{ pageTitle }}</a>
        <ul class="nav nav-pills">
          <li><a class="nav-link" routerLink="/welcome">Home</a></li>
          <li><a class="nav-link" routerLink="/products">Product List</a></li>
        </ul>
      </nav>
      <div class="container pt-2">
        <router-outlet></router-outlet>
      </div>  
    </div>
    `
})

export class AppComponent {
  pageTitle: string = "Acme Management";
}