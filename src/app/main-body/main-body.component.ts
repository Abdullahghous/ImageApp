import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  p: number = 1;
  public data = [
    { title: 'Aldi Süd Catalog 1', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/1.jpg' },
    { title: 'Aldi Süd Catalog 2', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/2.jpg' },
    { title: 'Aldi Süd Catalog 3', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/3.jpg' },
    { title: 'Aldi Süd Catalog 4', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/4.jpg' },
    { title: 'Aldi Süd Catalog 5', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/5.jpg' },
    { title: 'Aldi Süd Catalog 6', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/6.jpg' },
    { title: 'Aldi Süd Catalog 7', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/7.jpg' },
    { title: 'Aldi Süd Catalog 8', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/8.jpg' },
    { title: 'Aldi Süd Catalog 9', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/9.jpg' },
    { title: 'Aldi Süd Catalog 10', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/10.jpg' },
    { title: 'Aldi Süd Catalog 11', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/11.jpg' },
    { title: 'Aldi Süd Catalog 12', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/12.jpg' },
    { title: 'Aldi Süd Catalog 13', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/13.jpg' },
    { title: 'Aldi Süd Catalog 14', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/14.jpg' },
    { title: 'Aldi Süd Catalog 15', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/15.jpg' },
    { title: 'Aldi Süd Catalog 16', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/16.jpg' },
    { title: 'Aldi Süd Catalog 17', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/17.jpg' },
    { title: 'Aldi Süd Catalog 18', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/18.jpg' },
    { title: 'Aldi Süd Catalog 19', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/19.jpg' },
    { title: 'Aldi Süd Catalog 20', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/20.jpg' },
    { title: 'Aldi Süd Catalog 21', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/21.jpg' },
    { title: 'Aldi Süd Catalog 22', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/22.jpg' },
    { title: 'Aldi Süd Catalog 23', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/23.jpg' },
    { title: 'Aldi Süd Catalog 24', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/24.jpg' },
    { title: 'Aldi Süd Catalog 25', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/25.jpg' },
    { title: 'Aldi Süd Catalog 26', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/26.jpg' },
    { title: 'Aldi Süd Catalog 27', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/27.jpg' },
    { title: 'Aldi Süd Catalog 28', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/28.jpg' },
    { title: 'Aldi Süd Catalog 29', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/29.jpg' },
    { title: 'Aldi Süd Catalog 30', date: '5 Sep 2022 -  10 Sep 2022', img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/30.jpg' },

  ]

}
