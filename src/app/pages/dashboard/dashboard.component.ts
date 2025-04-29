import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LeftBarComponent } from '../../components/left-bar/left-bar.component';
import { TableComponent } from '../../components/table/table.component';
import { ServeService } from '../../service/serve.service';

@Component({
  selector: 'app-dashboard',
  imports: [ CardComponent , HeaderComponent , LeftBarComponent , TableComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  vehicle!: string

  vehicleData: { nome: string, senha: number }[] = [];
  constructor(private serve: ServeService) { }
 
}