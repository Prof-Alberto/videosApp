import { ISeries } from './../models/ISeries.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = 'Séries TV';
  listaSeries: ISeries[] = [
    {
      nome:'Evil: Contatos Sobrenaturais',
      lancamento:'2019',
      duracao: 'Episódios de 45mim',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qlHzOQOkBTfdMdMd5rQNNli2YLN.jpg',
      censura: '16 anos',
      classificacao: 79,
      generos: ['Drama', 'Mistério']
    },
    {
      nome:'Lei & Ordem: Crimes Premeditados',
      lancamento:'2001',
      duracao: 'Episódios de 60mim',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xMxeq0IMQsuyJ4itzUS0WAh9Ukh.jpg',
      censura: '14 anos',
      classificacao: 76,
      generos: ['Drama','Crime']
    },
    {
      nome:'Lei & Ordem: Unidade de Vítimas Especiais',
      lancamento:'1999',
      duracao: 'Episódios de 43mim',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/asVCgrKySiGL7TozzcU4L1l1qQM.jpg',
      censura: '16 anos',
      classificacao: 78,
      generos: ['Drama','Crime']
    },
    {
      nome:'The Good Doctor: O Bom Doutor',
      lancamento:'2017',
      duracao: 'Episódios de 43mim',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ucMdbTpOhV75R0NtxqHEg4hirNl.jpg',
      censura: '12 anos',
      classificacao: 86,
      generos: ['Drama']
    },
    {
      nome:'Private Eyes',
      lancamento:'2016',
      duracao: 'Episódios de 43mim',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/HsNFA4ZbjZkAnPtBYJAIORFhPP.jpg',
      censura: '12 anos',
      classificacao: 73,
      generos: ['Drama','Crime']
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exiberAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
      message: 'Acidionar as séries favritas?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',

          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM',
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
      message: 'Série adiconada as favoritas!',
      duration: 3000,
      color: 'medium'
    });
    toast.present();
  }
}
