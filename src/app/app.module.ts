import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { PortalHeaderComponent } from './portal-header/portal-header.component';

const routes: Routes = [
  { path: '', redirectTo: 'portal', pathMatch: 'full' },
  { path: 'portal', component: PortalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    PortalHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
