import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})

export class MasterPageComponent implements OnInit {

  addclass: string;
  buttonShow: boolean;
  TopbarShow: boolean;
  footerClass: string;
  developerPage: boolean;
  hideFooter: boolean;
  shopPages: boolean;
  Settingicon: boolean;
  appicons: boolean;
  Nfticons: boolean;
  Menuoption: string;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  /**
   * Router activation
   */
  onActivate(componentReference: any) {
    this.addclass = componentReference.navClass;
    this.buttonShow = componentReference.buttonList;
    this.TopbarShow = componentReference.sliderTopbar;
    this.footerClass = componentReference.footerVariant;
    this.developerPage = componentReference.isdeveloper;
    this.hideFooter = componentReference.hideFooter;
    this.shopPages = componentReference.shopPages;
    this.Settingicon = componentReference.Settingicon;
    this.appicons = componentReference.appicons;
    this.Nfticons = componentReference.Nfticons;
    this.Menuoption = componentReference.Menuoption;
 
    this.cdr.detectChanges();
  }
}
