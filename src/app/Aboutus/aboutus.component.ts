declare function require(path: string):any;

import { Component,AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  
  templateUrl: './aboutus.component.html',
  styleUrls:['./aboutus.component.css']
})
export class AboutusComponent implements AfterViewInit  {
  mySwiper: Swiper;
  slides = [
    require('./Slide1.png')
   
  ];
  slide = [
    
    require('./Slider2.png')
  ];
  slides1 = [
    require('./Slider31.png')
   
  ];
  slides2 = [
    
    require('./Slide32.png')
  ];
  slides3 = [
    require('./Slider33.png')
   
  ];
  slides4 = [
    
    require('./Slider34.png')
  ];
  slides5 = [
    require('./Slider35.png')
   
  ];


  imagesrc=require('./images.jpg')
  imagesrc1=require('./shapes.png')

  mySwiper1: Swiper;
  mySwiper2: Swiper;
  mySwiper3: Swiper;
  mySwiper4: Swiper;

  constructor() {}

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper1', {
      pagination: {
        el: '.swiper-pagination1',
       clickable:true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
      },
     
      slidesPerView: 'auto',
        spaceBetween: 30
    });
    this.mySwiper1 = new Swiper('.swiper2', {
      pagination: {
        el: '.swiper-pagination2',
        clickable:true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },

      slidesPerView: 'auto',
        spaceBetween: 30
    });
    this.mySwiper2 = new Swiper('.swiper3', {
      pagination: {
        el: '.swiper-pagination3',
        clickable:true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
      },
    
      slidesPerView: 'auto',
        spaceBetween: 30
    });
    this.mySwiper3 = new Swiper('.swiper4', {
      pagination: {
        el: '.swiper-pagination4',
        clickable:true,
      },
      
      navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
      },
    
      slidesPerView: 'auto',
        spaceBetween: 30
    });

    
  }
  fireevent(){
    
    this.mySwiper = new Swiper('.swiper1', {
      autoplay:{
        delay:3000,
        disableOnInteraction:false,
      }
     
    });
  }
  nonfire(){
    this.mySwiper = new Swiper('.swiper1', {
      autoplay:false
    });
  }
  
  
  
  

}