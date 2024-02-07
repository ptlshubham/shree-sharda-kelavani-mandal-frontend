import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-detail-four',
  templateUrl: './portfolio-detail-four.component.html',
  styleUrls: ['./portfolio-detail-four.component.css']
})

/**
 * Portfoli Detail-Four Component
 */
export class PortfolioDetailFourComponent implements OnInit {

    // Set Topbar
    Settingicon = true
  Menuoption = 'portfolio'
  footerVariant = 'footer-four';
  
  constructor() { }

  ngOnInit(): void {
  }

}
