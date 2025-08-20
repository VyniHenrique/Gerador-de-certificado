import { Routes } from '@angular/router';
import { WhithoutCertificate } from './pages/whithout-certificate/whithout-certificate';
import { FormCertificate } from './pages/form-certificate/form-certificate';
import { Certificate } from './pages/certificate/certificate';
import { WithCertificate } from './pages/with-certificate/with-certificate';

export const routes: Routes = [
  {
    path: "",
    component: WithCertificate
  },
  {
    path: "certificate/new",
    component: FormCertificate
  },
  {
    path: "certificate/:id",
    component: Certificate
  }
];
