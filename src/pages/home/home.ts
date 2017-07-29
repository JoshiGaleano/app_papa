import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  header_data : any;

	slides = [
    {
      title: "El Papa espontáneo en Cracovia",
      description: "El Papa se despidió de los voluntarios muy espontáneamente. ",
      image: "http://archive.krakow2016.com/media/cache/resolve/filemanager_original/images/LP/pope_in_krakow/BOX_PRZYLOT_ES.png",
    },
    {
      title: "Europa no tiene futuro sin sus valores fundamentales",
      description: "Ante la imagen de Nuestra Señora de Częstochowa, delante de su mirada maternal, es posible entender el sentido espiritual del camino de este pueblo, tan ligado al sufrimiento y a la cruz.",
      image: "http://archive.krakow2016.com/media/cache/resolve/filemanager_original/images/lp_baners/KRAKOW/3miliony/BOX-3mlnES.jpg",
    },
    {
      title: "Murió el Cardenal Franciszek Macharski",
      description: "El Cardenal Macharski fue el vicepresidente del Episcopado de Polonia durante muchos años; desde 1979 hasta 1994.",
      image: "http://archive.krakow2016.com/media/cache/resolve/filemanager_original/images/box_vigil/BOX_przemowienie3%5b1%5d.png",
    }
  	];



	constructor(public navCtrl: NavController) {
      this.header_data = { title:"Inicio" };

  }

}
