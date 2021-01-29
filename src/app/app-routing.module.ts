import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUrlComponent } from './components/add-url/add-url.component';
import { GetUrlsComponent } from './components/get-urls/get-urls.component';


const routes: Routes = [
	{ path: 'addurl', component: AddUrlComponent },
	{ path: 'geturl', component: GetUrlsComponent },
	{ path: '**', redirectTo: 'addurl' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
