import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { RemoveButton } from "../../_components/remove-button/remove-button";

@Component({
  selector: 'app-form-certificate',
  imports: [SecondaryButton, PrimaryButton, RemoveButton],
  templateUrl: './form-certificate.html',
  styleUrl: './form-certificate.css'
})
export class FormCertificate {

}
