import { Injectable } from '@angular/core';
import { Testimonials } from '../interfaces/testimonials';

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor() {}

  customersNumber: number = 205385;

  customersOpinions: Testimonials[] = [
    {
      name: 'Keith',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis, nemo nulla reiciendis fuga enim voluptas nobis sint assumenda accusantium repudiandae nisi. Totam, quis voluptate.',
      portrait: '../../assets/img/testimonials/keith.jpg',
    },
    {
      name: 'Mason',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis, nemo nulla reiciendis fuga enim voluptas nobis sint assumenda accusantium repudiandae nisi. Totam, quis voluptate.',
      portrait: '../../assets/img/testimonials/mason.jpg',
    },
    {
      name: 'Steven',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officiis, nemo nulla reiciendis fuga enim voluptas nobis sint assumenda accusantium repudiandae nisi. Totam, quis voluptate.',
      portrait: '../../assets/img/testimonials/steven.jpg',
    },
  ];
}
