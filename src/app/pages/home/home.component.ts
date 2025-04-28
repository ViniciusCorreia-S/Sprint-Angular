import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { LeftBarComponent } from '../../components/left-bar/left-bar.component';
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-home',
  imports: [ CardComponent , LeftBarComponent , UserComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
