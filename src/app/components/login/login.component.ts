import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-login',
  imports: [ FormComponent , CardComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
