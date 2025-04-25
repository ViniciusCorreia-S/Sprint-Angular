import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-home',
  imports: [ CardComponent , LeftBarComponent , UserComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
