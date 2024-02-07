import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-shop-product-detail',
  templateUrl: './shop-product-detail.component.html',
  styleUrls: ['./shop-product-detail.component.css']
})

/**
 * Shop Product-Detail Component
 */
export class ShopProductDetailComponent implements OnInit {

  /***
   * Header button list show
   */
  shopPages = true;
  Menuoption = 'shop'
  footerVariant = 'footer-two';

  model = 1;

  constructor() { }
  
  /**
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
        items: 3
      },
      900: {
        items: 4
      }
    },
    nav: false
  };

  ngOnInit(): void {
  }

  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }

  /**
   * Increase-Decrement set
   */
  increase() {
    this.model += 1;
  }
  decrement() {
    if (this.model > 0) {
      this.model -= 1;
    }
  }

}
