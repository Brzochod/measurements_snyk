import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: ':id', component: DetailComponent}
] 

@NgModule({
  declarations: [AppComponent, ListComponent, DetailComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
