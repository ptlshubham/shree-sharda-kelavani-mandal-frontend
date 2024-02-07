import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-integration',
  templateUrl: './index-integration.component.html',
  styleUrls: ['./index-integration.component.css']
})

/***
 * Integration Component
 */
export class IndexIntegrationComponent implements OnInit {

   /***
   * nav class set
   */
  navClass = 'nav-light';
  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  
  constructor() { }

  ngOnInit(): void {
  }

}
