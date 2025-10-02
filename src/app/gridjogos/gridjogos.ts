import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jogosdestaques } from '../jogosdestaques/jogosdestaques';
import * as dadosJogos from '../../../public/dados.json'

@Component({
  selector: 'app-gridjogos',
  standalone: true,
  imports: [CommonModule, Jogosdestaques],
  templateUrl: './gridjogos.html',
  styleUrl: './gridjogos.css'
})
export class Gridjogos implements OnInit {
  // lista de jogos que vai ser usada no template
  jogos: any[] = [];

  // carregando os dados do json pra propriedade jogos
  ngOnInit() {
    this.jogos = (dadosJogos as any).default.slice(0, 6);
  }
}
