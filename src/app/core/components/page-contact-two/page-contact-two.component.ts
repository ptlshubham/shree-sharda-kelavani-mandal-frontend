import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-contact-two',
  templateUrl: './page-contact-two.component.html',
  styleUrls: ['./page-contact-two.component.css']
})

/**
 * Page Contact-Two Component
 */
export class PageContactTwoComponent implements OnInit {

      // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  mapView(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true })
  }
}
