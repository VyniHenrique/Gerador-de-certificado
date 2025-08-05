import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { Title } from "./_components/title/title";
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from "./_components/secondary-button/secondary-button";
import { RemoveButton } from "./_components/remove-button/remove-button";
import { ItemCertificado } from "./_components/item-certificado/item-certificado";

@Component({
  selector: 'app-root',
  imports: [Navbar, Title, PrimaryButton, RouterOutlet, SecondaryButton, RemoveButton, ItemCertificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Projeto-Angular');

}
