import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})

/**
 * Documentation Component
 */
export class DocumentationComponent implements OnInit {

  /**
 * Header button list show
 */
  Settingicon = true;
  Menuoption = 'center'
  constructor() { }

  ngOnInit(): void {
  }

}
