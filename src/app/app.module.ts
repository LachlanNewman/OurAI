import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { CertificateComponent } from './certificate/certificate.component';

import {routes} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
