import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-case-detail',
  templateUrl: './page-case-detail.component.html',
  styleUrls: ['./page-case-detail.component.css']
})

/**
 * Page Case-Detail Component
 */
export class PageCaseDetailComponent implements OnInit {

      // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  constructor() { }

  ngOnInit(): void {
  }

  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };

}
