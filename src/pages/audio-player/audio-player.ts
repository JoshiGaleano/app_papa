import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { AudioProvider } from 'ionic-audio';

import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-audio-player',
  templateUrl: 'audio-player.html'
})
export class AudioPage {
	//Standard header
	header_data:any;

	myTracks: any[];
	selectedTrack: number;

	constructor(public navCtrl: NavController, 
				public navParams: NavParams, 
				private audioProvider: AudioProvider, 
				public platform: Platform,
				private sharingVar: SocialSharing) {
  		this.header_data = { title:"Audio" };
		
	    this.myTracks = [{
	      src: 'http://downloads.bbc.co.uk/learningenglish/features/6min/170713_6min_english_pets_navigate_download.mp3',
	      artist: 'Katatonia',
	      title: "Soil's Song",
	      art: 'https://images-na.ssl-images-amazon.com/images/I/51%2BVlDDzumL.jpg',
	      preload: 'metadata'
	    },
	    {
	      src: 'http://www.noiseaddicts.com/samples_1w72b820/4207.mp3',
	      artist: 'Israel',
	      title: 'Israel National Anthem',
	      art: 'http://www.crwflags.com/fotw/images/i/il.gif',
	      preload: 'metadata'
	    }];
	}
  
	// http://stackoverflow.com/questions/35352284/replacing-characters-within-a-string-in-angularjs
	tools_replaceAll(str, find, replace) {
		return str.replace(new RegExp(find, 'g'), replace);
	}
	  
	playSelectedTrack() {
	    this.audioProvider.play(this.selectedTrack);
	}
	  
	pauseSelectedTrack() {
	     this.audioProvider.pause(this.selectedTrack);
	}
	  
	onTrackFinished(track: any) {
	    console.log('Track finished', track)
	}

	twitterShare(){
		this.sharingVar.shareViaTwitter("Message via Twitter", null /* Image */, "http://hipertexto.com.co")
		.then(()=>{
			alert("Success");
		},
		()=>{
			alert("Failed")
		})
	}

	facebookShare(){
		this.sharingVar.shareViaTwitter("Message via Facebook", null /* Image */, "http://hipertexto.com.co")
		.then(()=>{
			alert("Success");
		},
		()=>{
			alert("Failed")
		})
	}
}
