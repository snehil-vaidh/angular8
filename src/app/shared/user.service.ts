import { Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'


import { User } from './user.model';


@Injectable()
export class UserService{
 readonly rootUrl="http://localhost:53849/";
 constructor(private http:HttpClient){}
     registerUser(user: User){
        const body: User={
            FirstName:user.FirstName,
            Email:user.Email,
            LastName:user.LastName,
            Message:user.Message,
            password:user.password,
            UserName:user.UserName
     }
     return this.http.post(this.rootUrl + 'api/User/Register', body);
 
    }
}