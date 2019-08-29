import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogsComponent } from './blogs/blogs.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './shared/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoMaterialModule } from './material-module';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    BlogsComponent,
    CareerComponent,
    ContactComponent,
    HowitworkComponent,
    AboutusComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,MatStepperModule,FormlyBootstrapModule,
    AppRoutingModule,DemoMaterialModule,MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule ,ReactiveFormsModule ,HttpClientModule,
     RouterModule.forRoot([
      {path:'register',component:RegisterComponent},
      {path:'aboutus',component:AboutusComponent},
       {path:'how',component:HowitworkComponent},
       {path:'blogs',component:BlogsComponent},
       {path:'career',component:CareerComponent},
       {path:'contact',component:ContactComponent},
       
       {path:'',redirectTo:'register',pathMatch:'full'},
       
     ]),
     FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
