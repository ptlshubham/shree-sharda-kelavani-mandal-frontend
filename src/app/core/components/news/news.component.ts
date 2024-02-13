import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  Menuoption = 'center';
  Settingicon = true;
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
