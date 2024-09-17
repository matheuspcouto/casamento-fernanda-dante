import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SiteAtivoGuard } from './guards/site-ativo.guard';

import { AguardeComponent } from './modules/aguarde/aguarde.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AguardeComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      maxOpened: 3
    }),
  ],
  providers: [SiteAtivoGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
