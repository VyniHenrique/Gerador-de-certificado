import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { RemoveButton } from "./_components/remove-button/remove-button";
import { ItemCertificado } from "./_components/item-certificado/item-certificado";
import { WhithoutCertificate } from "./pages/whithout-certificate/whithout-certificate";
import { WithCertificate } from "./pages/with-certificate/with-certificate";
import { FormCertificate } from "./pages/form-certificate/form-certificate";
import { Certificate } from "./pages/certificate/certificate";

@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, RouterOutlet, SecondaryButton, RemoveButton, ItemCertificado, WhithoutCertificate, WithCertificate, FormCertificate, Certificate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Projeto-Angular');

}
