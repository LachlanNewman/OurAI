import {Routes} from "@angular/router";
import {MemberComponent} from "./member/member.component";
import {CertificateComponent} from "./certificate/certificate.component";

export const routes: Routes = [
  {
    path: '',
    component: MemberComponent
  },
  {
    path: ':memberNo',
    component:CertificateComponent
  }];
