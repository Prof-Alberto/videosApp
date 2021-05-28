import { IFilme } from './../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';
  listaVideos: IFilme[] =[
    {
      nome: 'Setembro em Shiraz (2015)',
      lancamento: '24/06/2016',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l7BZsQDslgmltoM7Mxv8ZOBuCUY.jpg',
      generos: ['Drama', 'Thriller']
    },

    {
      nome: 'Livrai-nos do Mal (2014)',
      lancamento: '10/09/2014',
      duracao: '1h 58m',
      classificacao: 62,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t1PBqWmRrfLszd7gsO4AQjZwrvQ.jpg',
      generos: ['Thriller', 'Crime', 'Terror']
    },

  ];


  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja adicionar este filme aos favoritos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Adicionar aos favoritos',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
