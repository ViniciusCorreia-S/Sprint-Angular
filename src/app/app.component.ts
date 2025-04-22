import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/pages/form/form.component';
import { CardComponent } from './components/pages/card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormComponent , CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-angular';
}