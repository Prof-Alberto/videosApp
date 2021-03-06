import { IListaGenero, IGenero } from './../models/IGenero.model';
import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from './../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  titulo = 'Filmes';
  listaVideos: IFilme[] = [
    {
      nome: 'Setembro em Shiraz (2015)',
      lancamento: '24/06/2016',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l7BZsQDslgmltoM7Mxv8ZOBuCUY.jpg',
      generos: ['Drama', 'Thriller'],
      pagina: '/setembro-shiraz'
    },

    {
      nome: 'Livrai-nos do Mal (2014)',
      lancamento: '10/09/2014',
      duracao: '1h 58m',
      classificacao: 62,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t1PBqWmRrfLszd7gsO4AQjZwrvQ.jpg',
      generos: ['Thriller', 'Crime', 'Terror'],
      pagina: '/livrai-nos-mal'
    },

    {
      nome: 'Sete Homens e Um Destino (2016)',
      lancamento: '22/09/2016',
      duracao: '2h 13m',
      classificacao: 63,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fV45HAC5kxY2fbUKKT2vNyYDZNr.jpg',
      generos: ['Aventura', 'Ação', 'Faroeste']
    },

    {
      nome: 'O Capitão (2017)',
      lancamento: '27/07/2018',
      duracao: '1h 58m',
      classificacao: 71,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iwUWFzhwUdEF6nI3DYa4Q4qFgzg.jpg',
      generos: ['Guerra', 'Drama', 'História']
    },

    {
      nome: 'Eu Me Importo (2021)',
      lancamento: '19/02/2021',
      duracao: '1h 58m',
      classificacao: 67,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ejMx7Hzh6FkG6BVWRpGYUMONlO2.jpg',
      generos: ['Comédia', 'Crime', 'Thriller']
    },

    {
      nome: 'Convenção das Bruxas (2020)',
      lancamento: '19/11/2020',
      duracao: '1h 46m',
      classificacao: 66,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/orrJiQs30G6zSkT8is4QOAtRpFM.jpg',
      generos: ['Família', 'Fantasia', 'Aventura', 'Comédia', 'Terror']
    },
  ];
  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router) { }

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeApi) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

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

  ngOnInit(){
    this.generoService.bucarGenero().subscribe(dados =>{
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero =>
        this.generos[genero.id] = genero.name);
    });

    this.dadosService.guardarDados('generos', this.generos);
  }
}
