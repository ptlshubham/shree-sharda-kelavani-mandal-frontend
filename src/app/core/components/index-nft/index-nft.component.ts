import { Component } from '@angular/core';

@Component({
  selector: 'app-index-nft',
  templateUrl: './index-nft.component.html',
  styleUrls: ['./index-nft.component.css']
})
export class IndexNftComponent {
  // Set Topbar Option
  Menuoption = 'nft';
  Nfticons = true
  footerVariant = 'footer-three';

  /***
 * Follow Slider
 */
  public config = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true
  };
}
