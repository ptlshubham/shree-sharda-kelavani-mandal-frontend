import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  Menuoption = 'center';
  Settingicon = true;
  workList = [
    {
      image: 'assets/images/personal/1.jpg',
      title: 'Iphone mockup',
      category: 'Branding'
    },
    {
      image: 'assets/images/personal/2.jpg',
      title: 'Mockup Collection',
      category: 'Mockup'
    },
    {
      image: 'assets/images/personal/3.jpg',
      title: 'Abstract images',
      category: 'Abstract'
    },
    {
      image: 'assets/images/personal/4.jpg',
      title: 'Yellow bg with Books',
      category: 'Books'
    },
    {
      image: 'assets/images/personal/5.jpg',
      title: 'Company V-card',
      category: 'V-card'
    },
    {
      image: 'assets/images/personal/6.jpg',
      title: 'Mockup box with paints',
      category: 'Photography'
    }
  ];
  private _album = [];

  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 6; i++) {
      const src = '../../../assets/images/personal/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/personal/' + i + '-thumb.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this._album.push(album);
    }
  }

  ngOnInit(): void {

  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
