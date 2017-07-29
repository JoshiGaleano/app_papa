import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { Pagination } from 'ionic2-pagination';

/****** Pages ******/
import { NewPage } from '../new/new';

/****** Services ******/
import { NewsService } from '../../services/news-service';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
	//Standard header
	header_data : any;
  loading : any;

	segment : string = "all";
  news : Array<
              { 
                ID: number, 
                featured_image: string,
                guid: string,
                post_content: string,
                post_content_mini: string,
                post_date: string,
                post_name: string,
                post_title: string
              }
              >;

	constructor(public navCtrl: NavController,
              private sanitizer: DomSanitizer, 
              public newsService: NewsService,
              public paginationInfo : Pagination,
              public loadingCtrl : LoadingController) {
		this.header_data = { title:"Noticias" };

    //Initialize to Pagination
    this.paginationInfo.page = 1;
    this.paginationInfo.pageCount = 1;
    this.paginationInfo.pageSize = 8;
    this.paginationInfo.rowCount = 8;
	}

  ngOnInit(){
      this.presentLoadingDefault();
      this.getNews(this.paginationInfo.page);
  }

  /***** Set values pagination *****/
  setPage(pager){
      this.paginationInfo.pageCount = Math.ceil(pager.total / pager.step);
      this.paginationInfo.pageSize = pager.step;
      this.paginationInfo.rowCount = pager.total;

     console.log(this.paginationInfo);
  }

  /***** Change pagination *****/
  changePage(page : number){
      //console.log(page);
      this.paginationInfo.page = page;
      this.getNews(page);
  }

  /***** Get list News *****/
  getNews(page : number){
      this.newsService.allNews(page).subscribe(data => {
          this.news = data.posts;
          console.log(data);

          this.setPage(data.pager);

          this.loading.dismiss();
      }, (error)=> {
          console.log('error',error); 
      });
  }

  /***** Show default loading *****/
  presentLoadingDefault() {
      this.loading = this.loadingCtrl.create();

      this.loading.present();
  }

  /***** Open detail new *****/
  detailNew(pNew){
      console.log(pNew);
      this.navCtrl.push(NewPage, {
         new : pNew
      })
  }


}
