import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
	//Standard header
	header_data : any;
	private pNew

  	constructor(public navCtrl: NavController,
   			  public navParams: NavParams,
   			  private sanitizer: DomSanitizer,) {
  	   	this.pNew = navParams.get("new");
  	   	this.header_data = { title:"Noticia" };
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad NewPage');
  	}

}
