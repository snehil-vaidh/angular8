import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<body>
  <div class="container">
    <form class="form-inline">
        <input class="insetreg" name="username" size="15" placeholder="Username" type="text" name="username">&nbsp;
        <input name="password" type="password" size="15" placeholder="Password" class="insetreg">&nbsp;
        <button class="loginbtn">Login</button>
    </form>
    </div>
    <div class="container">
    <nav class="navbar navbar-inverse">
        <ul class="nav navbar-nav">
        <li><a [routerLink]="['/register']">SIGN UP</a></li>
        <li><a [routerLink]="['/aboutus']">ABOUT US</a></li>
        <li><a [routerLink]="['/how']">HOW IT WORKS</a></li>
        <li><a [routerLink]="['/blogs']">BLOGS</a></li>
        <li><a [routerLink]="['/career']">CAREER</a></li>
        <li><a [routerLink]="['/contact']">CONTACT US</a></li>
        </ul>
         
      </nav>
     
  </div>
  <div class="container">
          <router-outlet></router-outlet>
      </div>
      </body>
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {
 
}
