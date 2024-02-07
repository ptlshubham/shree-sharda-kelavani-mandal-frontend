import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-detail-one',
  templateUrl: './portfolio-detail-one.component.html',
  styleUrls: ['./portfolio-detail-one.component.css']
})

/**
 * Portfolio Detail-one Component
 */
export class PortfolioDetailOneComponent implements OnInit {

    // Set Topbar
    Settingicon = true
  Menuoption = 'portfolio'
  footerVariant = 'footer-four';
  
  constructor() { }

  ngOnInit(): void {
  }

}
