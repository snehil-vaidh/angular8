import { Component, OnInit } from '@angular/core';
declare function require(path: string):any;
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

   
  imagesrc1=require('./shapes.png');
  imagesrc2=require('./boy.png');
  imagesrc3=require('./desktop.png');
  imagesrc4=require('./lappy.png');
  imagesrc5=require('./room.png');
}
