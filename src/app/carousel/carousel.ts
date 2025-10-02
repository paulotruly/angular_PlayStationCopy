import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gamecard } from '../gamecard/gamecard';
import * as dadosJogos from '../../../public/dados.json'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [Gamecard, CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class Carousel {
  jogoscarrossel: any[] = [];

  noComeco: boolean = true;
  noFinal: boolean = false;

  ngOnInit() {
    this.jogoscarrossel = (dadosJogos as any).default.slice(0, 12);

    setTimeout(() => this.checkScrollPosition(), 0);
  }

  @ViewChild('roll')
  carrosselElemento!: ElementRef;

  scrollRight() {
    this.carrosselElemento.nativeElement.scrollBy({
      left: 1500, behavior: 'smooth'
    });
    setTimeout(() => this.checkScrollPosition(), 500); 
  }

  scrollLeft() {
    this.carrosselElemento.nativeElement.scrollBy({
      left: -1500, behavior: 'smooth'
    });
    setTimeout(() => this.checkScrollPosition(), 500); 
  }

  checkScrollPosition() {
    const element = this.carrosselElemento.nativeElement;

    const noComeco = element.scrollLeft === 0;
    const noFinal = element.scrollLeft + element.clientWidth >= element.scrollWidth - 15;

    this.noComeco = noComeco;
    this.noFinal = noFinal;
  }
}
