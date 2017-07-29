import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.html'
})
export class Customnavbar {
    header_data: any;
    constructor(public navCtrl: NavController) {}
    @Input()
    set header(header_data: any) {
        this.header_data=header_data;
    }
    get header() {
        return this.header_data;
    }
}