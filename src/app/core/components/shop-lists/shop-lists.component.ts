import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-lists',
  templateUrl: './shop-lists.component.html',
  styleUrls: ['./shop-lists.component.css']
})

/**
 * Shop Lists Component
 */
export class ShopListsComponent implements OnInit {

    // Set Topbar
  Menuoption = 'shop'
  footerVariant = 'footer-two';
  /***
   * Header button list show
   */
   shopPages = true;

  constructor() { }

  ngOnInit(): void {
  }

}
