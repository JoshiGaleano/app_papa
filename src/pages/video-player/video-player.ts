import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
})
export class VideoPage {
	//Standard header
	header_data:any;

	videos: any[];
	videoUrl: SafeResourceUrl;

  	constructor(private domSanitizer: DomSanitizer, 
  				public navCtrl: NavController, 
  				public navParams: NavParams) {
  		this.header_data = { title:"Videos" };
  		this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/aw5pMBeOWM0');

  		this.videos = [{
	      src: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/AsEZa6Sx6qE'),
	      artist: 'Katatonia',
	      title: "Soil's Song"
	    },
	    {
	      src: this.domSanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/79410924'),
	      artist: 'Israel',
	      title: 'Israel National Anthem'
	    },
	    {
	      src: this.domSanitizer.bypassSecurityTrustResourceUrl('https://soundcloud.com/opusdei/angelus-con-el-papa-francisco'),
	      artist: 'Israel',
	      title: 'Israel National Anthem'
	    }
	    ];
  	}

}
