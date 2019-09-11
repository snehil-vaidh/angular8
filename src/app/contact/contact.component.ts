import { Component, OnInit } from '@angular/core';
declare function require(path: string):any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  imagesrc1=require('./shapes.png');
 
}
