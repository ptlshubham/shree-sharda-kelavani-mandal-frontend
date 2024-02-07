import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-index-crypto-two',
  templateUrl: './index-crypto-two.component.html',
  styleUrls: ['./index-crypto-two.component.css']
})

/***
 * Crypto Two Component
 */
export class IndexCryptoTwoComponent implements OnInit {

  sliderTopbar = true;
  /***
   * nav class set
   */
  navClass = 'nav-light';
  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  footerVariant = 'footer-three';

   /***
    * Testimonial Slider
    */
   customOptions: OwlOptions = {
    // loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    // autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 4
      }
    },
    nav: false,
  };


  constructor() { }

  ngOnInit(): void {
  }

  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 0,
  };

}
