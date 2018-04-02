import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { CertificateComponent } from './certificate/certificate.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    CertificateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
