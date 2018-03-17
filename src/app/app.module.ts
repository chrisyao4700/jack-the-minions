import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { WorkComponent } from './home/work/work.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { WebsiteComponent } from './home/work/website/website.component';
import { GraphicComponent } from './home/work/graphic/graphic.component';
import { ArtComponent } from './home/work/art/art.component';
import { NavComponent } from './shared/nav/nav.component';
import { TabComponent } from './home/work/tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    WebsiteComponent,
    GraphicComponent,
    ArtComponent,
    NavComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
