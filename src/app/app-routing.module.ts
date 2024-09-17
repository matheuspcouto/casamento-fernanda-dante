import { SiteAtivoGuard } from './guards/site-ativo.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AguardeComponent } from './modules/aguarde/aguarde.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate: [SiteAtivoGuard] },
  { path: 'aguarde', component: AguardeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
