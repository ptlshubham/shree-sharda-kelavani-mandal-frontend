import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-left-sidebar-post',
  templateUrl: './blog-left-sidebar-post.component.html',
  styleUrls: ['./blog-left-sidebar-post.component.css']
})
export class BlogLeftSidebarPostComponent {
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
