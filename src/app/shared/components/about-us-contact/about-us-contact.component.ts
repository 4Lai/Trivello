import { Component, OnInit } from '@angular/core';
import { AboutUsContact } from '../../interfaces/about-us-contact';
import { AboutUsContactService } from '../../services/about-us-contact.service';

@Component({
  selector: 'app-about-us-contact',
  templateUrl: './about-us-contact.component.html',
  styleUrls: ['./about-us-contact.component.scss']
})
export class AboutUsContactComponent implements OnInit {
aboutUsContact: AboutUsContact[] = []

constructor(private aboutUsContactService: AboutUsContactService) {}

ngOnInit(): void {
  this.aboutUsContact = this.aboutUsContactService.contactData
}
}
