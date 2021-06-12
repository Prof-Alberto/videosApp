import { ISeries } from './../models/ISeries.model';
import { SeriesService } from './../services/series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

  serie: ISeries;

  constructor(public dadosSerie: SeriesService) { }

  ngOnInit() {
    this.serie = this.dadosSerie.pegarSeries('serie');
  }

}
