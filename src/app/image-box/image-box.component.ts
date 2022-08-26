import { Component, Input, OnInit } from '@angular/core';
import { NzImageService } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit {

  @Input() title: string= '';
  @Input() img: string= '';
  @Input() date: string = '';

  constructor(
    private nzImageService: NzImageService
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    const images = [
      {
        src: this.img,
        width: '450px',
        height: '450px',
        alt: this.title
      },
    ];
    this.nzImageService.preview(images, { nzZoom: 1.5, nzRotate: 0 });
  }

}
