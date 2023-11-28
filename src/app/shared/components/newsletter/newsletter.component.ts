import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  constructor(private httpClient: HttpClient) {}

  formNews = new FormGroup<NewsletterForm>({
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
  });

  onSubmit() {
    // this.httpClient.post<NewsletterForm>('url', this.formNews.value.email)
    this.formNews.reset();
  }
}

export interface NewsletterForm {
  email: FormControl<string | null>;
}
