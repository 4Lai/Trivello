import { Injectable } from '@angular/core';
import { AboutUsContact } from '../interfaces/about-us-contact';

@Injectable({
  providedIn: 'root',
})
export class AboutUsContactService {
  constructor() {}

  contactData: AboutUsContact[] = [
    {
      mail: 'agency@trivello.com',
      number: '+48 000 000 000',
      street: 'Rynek Staromiejski 6/7',
      postCodeAndTown: '75-007 Koszalin',
    },
  ];
}
