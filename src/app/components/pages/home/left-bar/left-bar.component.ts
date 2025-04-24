import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  imports: [],
  templateUrl: './left-bar.component.html',
  styleUrl: './left-bar.component.css'
})
export class LeftBarComponent {

  // barButton: boolean = false;
  sideBar() {

    // this.barButton = true;

    const leftBar = document.querySelector('.left-bar') as HTMLElement;
    leftBar.style.width = leftBar.style.width === '0px' ? '250px' : '0px';
  }
}
