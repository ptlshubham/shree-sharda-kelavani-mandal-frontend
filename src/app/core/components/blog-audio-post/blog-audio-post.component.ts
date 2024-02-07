import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-audio-post',
  templateUrl: './blog-audio-post.component.html',
  styleUrls: ['./blog-audio-post.component.css']
})
export class BlogAudioPostComponent {
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
