import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private series: any =[];

  constructor() { }

  guardarSeries(index: string, series: any): boolean {
    if(index){
      this.series[index] = series;
      return true;
    }
    else{
      return false;
    }
  }
  pegarSeries(index: string): any {
    if(index){
      return this.series[index];
    }
    else{
      return null;
    }
  }
  deletarSeries(index: string): boolean {
    return delete this.series[index];
  }

}
