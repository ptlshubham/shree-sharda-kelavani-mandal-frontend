import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-aboutus-two',
  templateUrl: './page-aboutus-two.component.html',
  styleUrls: ['./page-aboutus-two.component.css']
})

/**
 * Aboutus Two Component
 */
export class PageAboutusTwoComponent implements OnInit {
  navClass = 'nav-light';
  
      // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 1,
    decimalPlaces: 0,
  };

  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

}
