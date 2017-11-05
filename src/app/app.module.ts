import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { PortalHeaderComponent } from './portal-header/portal-header.component';
import { PortalSliderComponent } from './portal-slider/portal-slider.component';
import { SigninComponent } from './signin/signin.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PortalNewsComponent } from './portal-news/portal-news.component';
import { PortalBlogsComponent } from './portal-blogs/portal-blogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  { path: 'portal', component: PortalComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'subscribe', component: SubscribeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    PortalHeaderComponent,
    PortalSliderComponent,
    SigninComponent,
    SubscribeComponent,
    PortalNewsComponent,
    PortalBlogsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
