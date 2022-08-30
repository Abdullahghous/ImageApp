import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageApp';

  index: any;

  images = [
    'https://placeimg.com/300/300/nature/6',
    'https://placeimg.com/300/300/nature/7',
    'https://placeimg.com/300/300/nature/8',
    'https://placeimg.com/300/300/nature/9',
    'https://placeimg.com/300/300/nature/2',
    'https://placeimg.com/300/300/nature/3',
    'https://placeimg.com/300/300/nature/1',
  ];

  slideItems = [
    { src: 'https://placeimg.com/300/300/nature/6', title: 'Title 1' },
    { src: 'https://placeimg.com/300/300/nature/7', title: 'Title 2' },
    { src: 'https://placeimg.com/300/300/nature/8', title: 'Title 3' },
    { src: 'https://placeimg.com/300/300/nature/1', title: 'Title 4' },
  ];

  onChange(idx: any) {
    console.log(idx);
    this.index = idx;
  }
}
