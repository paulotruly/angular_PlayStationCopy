import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './cabecalho/cabecalho';
import { Gridjogos } from './gridjogos/gridjogos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cabecalho, Gridjogos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
