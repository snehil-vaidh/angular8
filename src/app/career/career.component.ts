import { Component, OnInit } from '@angular/core';
declare function require(path: string):any;
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  imagesrc1=require('./shapes.png');
  imagesrc2=require('./web.png');
  imagesrc3=require('./web1.png');
  imagesrc4=require('./web2.png');
  imagesrc5=require('./web3.png');
}
