import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<body>
  <div class="container">
  
      <div class="row">
          <div >
          
              <form class="form-inline">
             
                  <div class="form-row">
                      <div class="form-group">
                      <input class="insetreg" name="username" size="15" placeholder="  Username" type="text" name="username">
                      <input name="password" type="password" size="15" placeholder="  Password" class="insetreg">
                      <button class="loginbtn">Login</button>
                      </div>
                      
                  </div>  
                  
              </form>
          </div>
      </div>
  
  
</div><div>
      <nav class="navbar navbar-inverse">
          <div class="container-fluid">
              
              <ul class="nav navbar-nav">
              <li><a [routerLink]="['/register']">SIGN UP</a></li>
              <li><a [routerLink]="['/aboutus']">ABOUT US</a></li>
              <li><a [routerLink]="['/how']">HOW IT WORKS</a></li>
              <li><a [routerLink]="['/blogs']">BLOGS</a></li>
              <li><a [routerLink]="['/career']">CAREER</a></li>
              <li><a [routerLink]="['/contact']">CONTACT US</a></li>
              </ul>
          </div>
      </nav>
      <div class="container">
          <router-outlet></router-outlet>
      </div>
  </div></body>
  `,
  styleUrls:['./app.component.css']
})
export class AppComponent {
 
}
