import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'carousel',
  animations: [
    trigger("fade", [
      state("void", style({ opacity: 0 })),
      transition("void <=> *", [animate("0.5s ease-in-out")])
    ])
  ],
  styles:[`
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

    }
    li img{
      width: 100%;
      height:690px
    }
    .div {
        display: flex;
        justify-content: space-between;
    }
    .div > span {
        margin-top: -370px;
        margin-left: 15px;
        background: white;
        height: 30px;
        text-align: center;
        align-items: center;
        padding-left: 12px;
        padding-right: 12px;
        font-size: 18px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer
    }
    .a {
        margin-right: 15px;
    }
  `],
  template: `
      <ul>
        <li *ngFor="let item of slideItems;let i = index">
          <img  *ngIf="i == counter" @fade [src]="slideItems[i].src" alt="item.title">
        </li>
      </ul>
      <div class="div a">
      <span (click)="showPreviousImage()">PREVIOUS</span>
      <span (click)="showNextImage()">NEXT</span>
      </div>
  `
})
export class CarouselComponent {
    @Input() slideItems!: Array<any>;
    counter = 0;
    showNextImage() {
      if (this.counter < this.slideItems.length -1) {
        this.counter += 1;
      }
    }
  
    showPreviousImage() {
      if (this.counter >= 1) {
        this.counter = this.counter - 1;
      }
    }
}