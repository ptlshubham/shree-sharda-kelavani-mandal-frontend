import { Component, OnInit } from '@angular/core';

interface blog {
  image: string;
  title: string;
  content: string,
  like: string;
  message: string;
  name: string;
  date: string;
};

@Component({
  selector: 'app-page-blog-list-sidebar',
  templateUrl: './page-blog-list-sidebar.component.html',
  styleUrls: ['./page-blog-list-sidebar.component.css']
})

/**
 * Page Blog-ListSidebar Component
 */
export class PageBlogListSidebarComponent implements OnInit {

      // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  /**
   * Blog Data
   */
  blogListData: blog[] = [
    {
      image: "assets/images/work/14.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/15.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/16.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/17.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/18.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/19.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    },
    {
      image: "assets/images/work/13.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
