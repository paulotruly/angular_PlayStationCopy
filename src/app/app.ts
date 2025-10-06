import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './cabecalho/cabecalho';
import { Gridjogos } from './gridjogos/gridjogos';
import { Carousel } from './carousel/carousel';
import { Banner } from './banner/banner'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Cabecalho, Gridjogos, Carousel, Banner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
