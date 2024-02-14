import { Component } from '@angular/core';
import { HomeService } from '../../services/home.services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  Menuoption = 'center';
  Settingicon = true;

  public newsData: any = [];

  constructor(
    private homeService: HomeService
  ) { }
  ngOnInit(): void {
    this.getNewsDetails();
  }
  getNewsDetails() {
    this.homeService.getNewsOnlyForCESURL(localStorage.getItem('InstituteId')).subscribe((res: any = []) => {
      this.newsData = res.slice(0);
    })
  }
}
