import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
interface form {
  title: string,
  content: string,
  post: string,
  topic: number,
  comments: number,
};

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

/**
 * Index Component
 */
export class IndexComponent implements OnInit {

  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true;

  /**
   * Partners slider
   */
  customOptions: OwlOptions = {
    // loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    // autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };
  num: number = 0;

  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };
  blogData = [
    {
      image: "assets/images/blog/01.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/blog/03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }
  ];
  formData: form[] = [
    {
      title: "Introductions: Landrick",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Calvin",
      topic: 3,
      comments: 5
    },
    {
      title: "Web Designing and Developing",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "George",
      topic: 3,
      comments: 5
    },
    {
      title: "Hosting and providers",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Parthiv",
      topic: 3,
      comments: 5
    },
    {
      title: "SEO starter guide",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "David",
      topic: 3,
      comments: 5
    },
    {
      title: "Troubleshooting and managing issues",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Tiger",
      topic: 3,
      comments: 5
    },
    {
      title: "Backup and restore",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Cristina",
      topic: 3,
      comments: 5
    },
    {
      title: "Errors and how to fix them",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Miriam",
      topic: 3,
      comments: 5
    },
    {
      title: "Template features & Services",
      content: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.",
      post: "Janalia",
      topic: 3,
      comments: 5
    }
  ];
  constructor() { }

  ngOnInit(): void {
 
  }


}
