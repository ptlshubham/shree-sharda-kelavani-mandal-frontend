import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-vimeo-post',
  templateUrl: './blog-vimeo-post.component.html',
  styleUrls: ['./blog-vimeo-post.component.css']
})
export class BlogVimeoPostComponent {
    // Set Topbar Option
  Menuoption = 'blog';
  footerVariant = 'footer-nine';
  /***
   * Nav bg light calss Add
   */
  navClass = 'navbar-white-bg';
  Settingicon = true

      /***
   * Follow Slider
   */
      public config = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      };
}
