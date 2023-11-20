import { Injectable } from '@angular/core';
import { AboutUsHistory } from '../interfaces/about-us-history';

@Injectable({
  providedIn: 'root',
})
export class AboutUsHistoryService {
  constructor() {}

  aboutUsHistory: AboutUsHistory[] = [
    {
      text: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus autem magnam sed nam quasi consequuntur perspiciatis ad officia assumenda culpa ipsum velit quo labore in id aliquam, accusantium omnis eius laborum beatae a suscipit. Asperiores est pariatur corporis explicabo dolore harum illo deserunt, tempora voluptatem sunt ipsa laudantium quisquam iusto nisi accusantium ratione hic debitis mollitia odio? Quibusdam repudiandae placeat, ipsa nisi est animi eligendi, facilis quod explicabo, molestias totam atque nihil laborum. Quia obcaecati officiis dolore voluptate amet aspernatur ratione corporis laboriosam placeat esse nulla, expedita voluptas maiores sed tenetur libero at reiciendis sapiente eligendi quis? Impedit, esse excepturi?',
      img: '../../../assets/img/about-us/hand.jpg'
    },
  ];
}
