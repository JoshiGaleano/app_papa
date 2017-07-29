import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicAudioModule, defaultAudioProviderFactory  } from 'ionic-audio';
import { Pagination, PaginationComponent } from 'ionic2-pagination';

/****** Plugins ******/
import { SocialSharing } from '@ionic-native/social-sharing';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

/****** Pages ******/
import { Customnavbar } from '../pages/navbar/navbar';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';
import { NewPage } from '../pages/new/new';
import { AudioPage } from '../pages/audio-player/audio-player';
import { VideoPage } from '../pages/video-player/video-player';

/****** Services ******/
import { NewsService } from '../services/news-service';


@NgModule({
  declarations: [
    MyApp,
    Customnavbar,
    HomePage,
    ListPage,
    NewsPage,
    AudioPage,
    VideoPage,
    NewPage,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Customnavbar,
    HomePage,
    ListPage,
    NewsPage,
    AudioPage,
    VideoPage,
    NewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    NewsService,
    Pagination,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
