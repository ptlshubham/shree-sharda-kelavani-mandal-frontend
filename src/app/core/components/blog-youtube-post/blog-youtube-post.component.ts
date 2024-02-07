import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-youtube-post',
  templateUrl: './blog-youtube-post.component.html',
  styleUrls: ['./blog-youtube-post.component.css']
})
export class BlogYoutubePostComponent {
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
