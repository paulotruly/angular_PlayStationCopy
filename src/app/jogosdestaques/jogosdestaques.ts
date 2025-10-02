import { Component, Input } from '@angular/core';

interface Jogo {
  imagem: string;
  nome: string;
  preco: number;
  desconto50: boolean;
  desconto10: boolean;
}

@Component({
  selector: 'app-jogosdestaques',
  imports: [],
  templateUrl: './jogosdestaques.html',
  styleUrl: './jogosdestaques.css'
})

export class Jogosdestaques {
  // recebendo o objeto JOGO como entrada e o valor será passado "!"
  @Input() jogo!: Jogo;
}
