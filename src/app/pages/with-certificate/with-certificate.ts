import { Component } from '@angular/core';
import { ItemCertificado } from "../../_components/item-certificado/item-certificado";

@Component({
  selector: 'app-with-certificate',
  imports: [ItemCertificado],
  templateUrl: './with-certificate.html',
  styleUrl: './with-certificate.css'
})
export class WithCertificate {

}
