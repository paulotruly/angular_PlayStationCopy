import { Component, Input } from '@angular/core';

interface Jogo {
  imagem: string;
  nome: string;
  preco: number;
  desconto50: boolean;
  desconto10: boolean;
}

@Component({
  selector: 'app-gamecard',
  imports: [],
  templateUrl: './gamecard.html',
  styleUrl: './gamecard.css'
})

export class Gamecard {
  @Input() jogo!: Jogo;
}