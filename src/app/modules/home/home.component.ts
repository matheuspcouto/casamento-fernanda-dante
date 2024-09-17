import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  disabled: boolean = false;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  days: number = 0;
  animate: boolean = false;
  timer: any;
  dataCasamento = new Date('2025-02-17T19:30:00.817Z');
  listaPresentes = false;

  ngOnInit() {
    const timer = setInterval(() => {
      const pararContagem = this.contagem();
      if (pararContagem){ clearInterval(timer); }
    }, 1000);

  }

  contagem() {
    let dataAtual = new Date();
    const diffInMs = Math.abs(this.dataCasamento.getTime() - dataAtual.getTime());
    this.days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

    return this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds === 0;
  }
}
