import { Injectable } from '@angular/core';
import { OffersAll } from '../interfaces/offers-all';
import { OffersCountries } from '../interfaces/offers-countries';
import { OffersDeadline } from '../interfaces/offers-deadline';

@Injectable({
  providedIn: 'root',
})
export class OffersAllService {
  constructor() {}

  offersDataAll: OffersAll[] = [
    {
      typeOfJourney: 'Zwykła',
      price: 15031,
      lengthOfStay: 9,
      country: 'Włochy',
      deadline: 'Lipiec',
      town: 'Wenecja',
      img: '../../../assets/img/hero/hot-deals/wenecja1.jpg',
      score: 7.5,
      id: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores delectus aperiam molestiae earum molestias sit perferendis rem repellat similique tempore culpa voluptas, exercitationem modi animi, libero iusto error officiis quaerat illo odit. Suscipit fugiat corporis soluta consequatur voluptates fugit tempora expedita voluptatibus porro natus dolorem est illo laudantium rem neque ipsam hic aliquam obcaecati deserunt, nulla dolore ab laborum odio amet. Nesciunt cum quia esse accusamus corrupti optio delectus veniam et explicabo ipsa itaque numquam pariatur ea minima, provident magnam fugit, odio laudantium vitae corporis doloremque voluptate rerum! Ducimus repudiandae odit libero aperiam adipisci molestias reiciendis natus quis vitae nesciunt culpa, eius, odio sequi velit nemo commodi quisquam totam, ipsam dolor. Eius eaque error illum adipisci, obcaecati facilis autem quo similique exercitationem non aut odio quaerat in, eos est. Voluptatem, incidunt maxime hic deserunt officia quas nobis sunt aliquid quasi laudantium, autem, ut unde. Porro ratione earum esse reprehenderit quae sed repudiandae sequi. Quo modi distinctio ea ut quis incidunt aliquam deserunt recusandae nesciunt tempore earum praesentium repellat aperiam architecto harum, consequatur quibusdam? Laboriosam recusandae excepturi neque pariatur soluta eos, enim beatae assumenda iure delectus blanditiis nesciunt. Ipsum minima dolorum repellat dolorem consequuntur, ducimus ullam libero eius repellendus a!',
      places: [
        { place: 'Place 1' },
        { place: 'Place 2' },
        { place: 'Place 3' },
        { place: 'Place 4' },
      ],
      planOfStay:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores quasi omnis iure, explicabo voluptatibus itaque. Ullam cum delectus beatae iusto. Odio unde accusantium officia velit sunt reiciendis recusandae eligendi eaque molestiae quisquam facilis exercitationem aliquam, impedit vitae! Excepturi nesciunt, magni voluptatem praesentium veniam enim, minima quos alias, cumque voluptates fugit. Labore itaque neque, dicta iure doloremque ullam aspernatur laboriosam. Corrupti, illum. Ullam similique, expedita qui, sit esse molestiae repudiandae repellendus cum eius omnis, sequi dolor reprehenderit aliquam ab ad deserunt! Autem quos et architecto. Doloremque rem distinctio iste laboriosam quidem dignissimos unde facilis accusantium totam quaerat quis, eos atque necessitatibus harum porro placeat voluptatibus, facere provident obcaecati. Eveniet voluptatum hic fugiat quisquam consectetur laborum tempore voluptate saepe magni eum iusto perferendis vel non, quos quaerat rem sint eos neque reprehenderit nostrum consequuntur aut eligendi, quam vitae. Obcaecati placeat veniam consequatur aliquam necessitatibus dicta labore, suscipit non minima laborum. Sequi maiores beatae unde illum ullam illo dicta cumque natus ut dolores tempora officiis fuga obcaecati sint accusantium distinctio necessitatibus, molestiae quasi assumenda, rerum sed! Consequuntur harum ab dolorem corrupti, omnis cumque, optio dicta ad eius id recusandae! Consequatur incidunt doloribus tempore quam voluptate fugit dolorum modi distinctio enim, soluta odit!',
    },
    {
      typeOfJourney: 'Zwykła',
      price: 10502,
      lengthOfStay: 14,
      country: 'Meksyk',
      deadline: 'Maj',
      town: 'Meksyk',
      img: '../../../assets/img/hero/hot-deals/meksyk1.jpg',
      score: 8.3,
      id: 2,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores delectus aperiam molestiae earum molestias sit perferendis rem repellat similique tempore culpa voluptas, exercitationem modi animi, libero iusto error officiis quaerat illo odit. Suscipit fugiat corporis soluta consequatur voluptates fugit tempora expedita voluptatibus porro natus dolorem est illo laudantium rem neque ipsam hic aliquam obcaecati deserunt, nulla dolore ab laborum odio amet. Nesciunt cum quia esse accusamus corrupti optio delectus veniam et explicabo ipsa itaque numquam pariatur ea minima, provident magnam fugit, odio laudantium vitae corporis doloremque voluptate rerum! Ducimus repudiandae odit libero aperiam adipisci molestias reiciendis natus quis vitae nesciunt culpa, eius, odio sequi velit nemo commodi quisquam totam, ipsam dolor. Eius eaque error illum adipisci, obcaecati facilis autem quo similique exercitationem non aut odio quaerat in, eos est. Voluptatem, incidunt maxime hic deserunt officia quas nobis sunt aliquid quasi laudantium, autem, ut unde. Porro ratione earum esse reprehenderit quae sed repudiandae sequi. Quo modi distinctio ea ut quis incidunt aliquam deserunt recusandae nesciunt tempore earum praesentium repellat aperiam architecto harum, consequatur quibusdam? Laboriosam recusandae excepturi neque pariatur soluta eos, enim beatae assumenda iure delectus blanditiis nesciunt. Ipsum minima dolorum repellat dolorem consequuntur, ducimus ullam libero eius repellendus a!',
      places: [
        { place: 'Place 1' },
        { place: 'Place 2' },
        { place: 'Place 3' },
        { place: 'Place 4' },
        { place: 'Place 5' },
      ],
      planOfStay:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores quasi omnis iure, explicabo voluptatibus itaque. Ullam cum delectus beatae iusto. Odio unde accusantium officia velit sunt reiciendis recusandae eligendi eaque molestiae quisquam facilis exercitationem aliquam, impedit vitae! Excepturi nesciunt, magni voluptatem praesentium veniam enim, minima quos alias, cumque voluptates fugit. Labore itaque neque, dicta iure doloremque ullam aspernatur laboriosam. Corrupti, illum. Ullam similique, expedita qui, sit esse molestiae repudiandae repellendus cum eius omnis, sequi dolor reprehenderit aliquam ab ad deserunt! Autem quos et architecto. Doloremque rem distinctio iste laboriosam quidem dignissimos unde facilis accusantium totam quaerat quis, eos atque necessitatibus harum porro placeat voluptatibus, facere provident obcaecati. Eveniet voluptatum hic fugiat quisquam consectetur laborum tempore voluptate saepe magni eum iusto perferendis vel non, quos quaerat rem sint eos neque reprehenderit nostrum consequuntur aut eligendi, quam vitae. Obcaecati placeat veniam consequatur aliquam necessitatibus dicta labore, suscipit non minima laborum. Sequi maiores beatae unde illum ullam illo dicta cumque natus ut dolores tempora officiis fuga obcaecati sint accusantium distinctio necessitatibus, molestiae quasi assumenda, rerum sed! Consequuntur harum ab dolorem corrupti, omnis cumque, optio dicta ad eius id recusandae! Consequatur incidunt doloribus tempore quam voluptate fugit dolorum modi distinctio enim, soluta odit!',
    },
    {
      typeOfJourney: 'Zwykła',
      price: 9200,
      lengthOfStay: 16,
      country: 'Algieria',
      deadline: 'Maj',
      town: 'Algier',
      img: '../../../assets/img/offers/thumb/Algier-town.jpg',
      score: 9.1,
      id: 3,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores delectus aperiam molestiae earum molestias sit perferendis rem repellat similique tempore culpa voluptas, exercitationem modi animi, libero iusto error officiis quaerat illo odit. Suscipit fugiat corporis soluta consequatur voluptates fugit tempora expedita voluptatibus porro natus dolorem est illo laudantium rem neque ipsam hic aliquam obcaecati deserunt, nulla dolore ab laborum odio amet. Nesciunt cum quia esse accusamus corrupti optio delectus veniam et explicabo ipsa itaque numquam pariatur ea minima, provident magnam fugit, odio laudantium vitae corporis doloremque voluptate rerum! Ducimus repudiandae odit libero aperiam adipisci molestias reiciendis natus quis vitae nesciunt culpa, eius, odio sequi velit nemo commodi quisquam totam, ipsam dolor. Eius eaque error illum adipisci, obcaecati facilis autem quo similique exercitationem non aut odio quaerat in, eos est. Voluptatem, incidunt maxime hic deserunt officia quas nobis sunt aliquid quasi laudantium, autem, ut unde. Porro ratione earum esse reprehenderit quae sed repudiandae sequi. Quo modi distinctio ea ut quis incidunt aliquam deserunt recusandae nesciunt tempore earum praesentium repellat aperiam architecto harum, consequatur quibusdam? Laboriosam recusandae excepturi neque pariatur soluta eos, enim beatae assumenda iure delectus blanditiis nesciunt. Ipsum minima dolorum repellat dolorem consequuntur, ducimus ullam libero eius repellendus a!',
      places: [
        { place: 'Place 1' },
        { place: 'Place 2' },
        { place: 'Place 3' },
        { place: 'Place 4' },
        { place: 'Place 5' },
        { place: 'Place 6' },
      ],
      planOfStay:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores quasi omnis iure, explicabo voluptatibus itaque. Ullam cum delectus beatae iusto. Odio unde accusantium officia velit sunt reiciendis recusandae eligendi eaque molestiae quisquam facilis exercitationem aliquam, impedit vitae! Excepturi nesciunt, magni voluptatem praesentium veniam enim, minima quos alias, cumque voluptates fugit. Labore itaque neque, dicta iure doloremque ullam aspernatur laboriosam. Corrupti, illum. Ullam similique, expedita qui, sit esse molestiae repudiandae repellendus cum eius omnis, sequi dolor reprehenderit aliquam ab ad deserunt! Autem quos et architecto. Doloremque rem distinctio iste laboriosam quidem dignissimos unde facilis accusantium totam quaerat quis, eos atque necessitatibus harum porro placeat voluptatibus, facere provident obcaecati. Eveniet voluptatum hic fugiat quisquam consectetur laborum tempore voluptate saepe magni eum iusto perferendis vel non, quos quaerat rem sint eos neque reprehenderit nostrum consequuntur aut eligendi, quam vitae. Obcaecati placeat veniam consequatur aliquam necessitatibus dicta labore, suscipit non minima laborum. Sequi maiores beatae unde illum ullam illo dicta cumque natus ut dolores tempora officiis fuga obcaecati sint accusantium distinctio necessitatibus, molestiae quasi assumenda, rerum sed! Consequuntur harum ab dolorem corrupti, omnis cumque, optio dicta ad eius id recusandae! Consequatur incidunt doloribus tempore quam voluptate fugit dolorum modi distinctio enim, soluta odit!',
    },
    {
      typeOfJourney: 'Zwykła',
      price: 6500,
      lengthOfStay: 4,
      country: 'Indie',
      deadline: 'Styczeń',
      town: 'Nowe Delhi',
      img: '../../../assets/img/where/indie2.jpg',
      score: 9.4,
      id: 4,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores delectus aperiam molestiae earum molestias sit perferendis rem repellat similique tempore culpa voluptas, exercitationem modi animi, libero iusto error officiis quaerat illo odit. Suscipit fugiat corporis soluta consequatur voluptates fugit tempora expedita voluptatibus porro natus dolorem est illo laudantium rem neque ipsam hic aliquam obcaecati deserunt, nulla dolore ab laborum odio amet. Nesciunt cum quia esse accusamus corrupti optio delectus veniam et explicabo ipsa itaque numquam pariatur ea minima, provident magnam fugit, odio laudantium vitae corporis doloremque voluptate rerum! Ducimus repudiandae odit libero aperiam adipisci molestias reiciendis natus quis vitae nesciunt culpa, eius, odio sequi velit nemo commodi quisquam totam, ipsam dolor. Eius eaque error illum adipisci, obcaecati facilis autem quo similique exercitationem non aut odio quaerat in, eos est. Voluptatem, incidunt maxime hic deserunt officia quas nobis sunt aliquid quasi laudantium, autem, ut unde. Porro ratione earum esse reprehenderit quae sed repudiandae sequi. Quo modi distinctio ea ut quis incidunt aliquam deserunt recusandae nesciunt tempore earum praesentium repellat aperiam architecto harum, consequatur quibusdam? Laboriosam recusandae excepturi neque pariatur soluta eos, enim beatae assumenda iure delectus blanditiis nesciunt. Ipsum minima dolorum repellat dolorem consequuntur, ducimus ullam libero eius repellendus a!',
      places: [
        { place: 'Place 1' },
        { place: 'Place 2' },
        { place: 'Place 3' },
        { place: 'Place 4' },
      ],
      planOfStay:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores quasi omnis iure, explicabo voluptatibus itaque. Ullam cum delectus beatae iusto. Odio unde accusantium officia velit sunt reiciendis recusandae eligendi eaque molestiae quisquam facilis exercitationem aliquam, impedit vitae! Excepturi nesciunt, magni voluptatem praesentium veniam enim, minima quos alias, cumque voluptates fugit. Labore itaque neque, dicta iure doloremque ullam aspernatur laboriosam. Corrupti, illum. Ullam similique, expedita qui, sit esse molestiae repudiandae repellendus cum eius omnis, sequi dolor reprehenderit aliquam ab ad deserunt! Autem quos et architecto. Doloremque rem distinctio iste laboriosam quidem dignissimos unde facilis accusantium totam quaerat quis, eos atque necessitatibus harum porro placeat voluptatibus, facere provident obcaecati. Eveniet voluptatum hic fugiat quisquam consectetur laborum tempore voluptate saepe magni eum iusto perferendis vel non, quos quaerat rem sint eos neque reprehenderit nostrum consequuntur aut eligendi, quam vitae. Obcaecati placeat veniam consequatur aliquam necessitatibus dicta labore, suscipit non minima laborum. Sequi maiores beatae unde illum ullam illo dicta cumque natus ut dolores tempora officiis fuga obcaecati sint accusantium distinctio necessitatibus, molestiae quasi assumenda, rerum sed! Consequuntur harum ab dolorem corrupti, omnis cumque, optio dicta ad eius id recusandae! Consequatur incidunt doloribus tempore quam voluptate fugit dolorum modi distinctio enim, soluta odit!',
    },
    {
      typeOfJourney: 'Zwykła',
      price: 10100,
      lengthOfStay: 11,
      country: 'Japonia',
      deadline: 'Listopad',
      town: 'Tokio',
      img: '../../../assets/img/offers/thumb/tokio-town.jpg',
      score: 8.7,
      id: 5,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores delectus aperiam molestiae earum molestias sit perferendis rem repellat similique tempore culpa voluptas, exercitationem modi animi, libero iusto error officiis quaerat illo odit. Suscipit fugiat corporis soluta consequatur voluptates fugit tempora expedita voluptatibus porro natus dolorem est illo laudantium rem neque ipsam hic aliquam obcaecati deserunt, nulla dolore ab laborum odio amet. Nesciunt cum quia esse accusamus corrupti optio delectus veniam et explicabo ipsa itaque numquam pariatur ea minima, provident magnam fugit, odio laudantium vitae corporis doloremque voluptate rerum! Ducimus repudiandae odit libero aperiam adipisci molestias reiciendis natus quis vitae nesciunt culpa, eius, odio sequi velit nemo commodi quisquam totam, ipsam dolor. Eius eaque error illum adipisci, obcaecati facilis autem quo similique exercitationem non aut odio quaerat in, eos est. Voluptatem, incidunt maxime hic deserunt officia quas nobis sunt aliquid quasi laudantium, autem, ut unde. Porro ratione earum esse reprehenderit quae sed repudiandae sequi. Quo modi distinctio ea ut quis incidunt aliquam deserunt recusandae nesciunt tempore earum praesentium repellat aperiam architecto harum, consequatur quibusdam? Laboriosam recusandae excepturi neque pariatur soluta eos, enim beatae assumenda iure delectus blanditiis nesciunt. Ipsum minima dolorum repellat dolorem consequuntur, ducimus ullam libero eius repellendus a!',
      places: [
        { place: 'Place 1' },
        { place: 'Place 2' },
        { place: 'Place 3' },
      ],
      planOfStay:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores quasi omnis iure, explicabo voluptatibus itaque. Ullam cum delectus beatae iusto. Odio unde accusantium officia velit sunt reiciendis recusandae eligendi eaque molestiae quisquam facilis exercitationem aliquam, impedit vitae! Excepturi nesciunt, magni voluptatem praesentium veniam enim, minima quos alias, cumque voluptates fugit. Labore itaque neque, dicta iure doloremque ullam aspernatur laboriosam. Corrupti, illum. Ullam similique, expedita qui, sit esse molestiae repudiandae repellendus cum eius omnis, sequi dolor reprehenderit aliquam ab ad deserunt! Autem quos et architecto. Doloremque rem distinctio iste laboriosam quidem dignissimos unde facilis accusantium totam quaerat quis, eos atque necessitatibus harum porro placeat voluptatibus, facere provident obcaecati. Eveniet voluptatum hic fugiat quisquam consectetur laborum tempore voluptate saepe magni eum iusto perferendis vel non, quos quaerat rem sint eos neque reprehenderit nostrum consequuntur aut eligendi, quam vitae. Obcaecati placeat veniam consequatur aliquam necessitatibus dicta labore, suscipit non minima laborum. Sequi maiores beatae unde illum ullam illo dicta cumque natus ut dolores tempora officiis fuga obcaecati sint accusantium distinctio necessitatibus, molestiae quasi assumenda, rerum sed! Consequuntur harum ab dolorem corrupti, omnis cumque, optio dicta ad eius id recusandae! Consequatur incidunt doloribus tempore quam voluptate fugit dolorum modi distinctio enim, soluta odit!',
    },
    {
      typeOfJourney: 'Exclusive',
      price: 17021,
      lengthOfStay: 20,
      country: 'Tajlandia',
      deadline: 'Lipiec',
      town: 'Bangkok',
      img: '../../../assets/img/offers/thumb/bangkok-town.jpg',
      score: 9.6,
      id: 6,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores delectus aperiam molestiae earum molestias sit perferendis rem repellat similique tempore culpa voluptas, exercitationem modi animi, libero iusto error officiis quaerat illo odit. Suscipit fugiat corporis soluta consequatur voluptates fugit tempora expedita voluptatibus porro natus dolorem est illo laudantium rem neque ipsam hic aliquam obcaecati deserunt, nulla dolore ab laborum odio amet. Nesciunt cum quia esse accusamus corrupti optio delectus veniam et explicabo ipsa itaque numquam pariatur ea minima, provident magnam fugit, odio laudantium vitae corporis doloremque voluptate rerum! Ducimus repudiandae odit libero aperiam adipisci molestias reiciendis natus quis vitae nesciunt culpa, eius, odio sequi velit nemo commodi quisquam totam, ipsam dolor. Eius eaque error illum adipisci, obcaecati facilis autem quo similique exercitationem non aut odio quaerat in, eos est. Voluptatem, incidunt maxime hic deserunt officia quas nobis sunt aliquid quasi laudantium, autem, ut unde. Porro ratione earum esse reprehenderit quae sed repudiandae sequi. Quo modi distinctio ea ut quis incidunt aliquam deserunt recusandae nesciunt tempore earum praesentium repellat aperiam architecto harum, consequatur quibusdam? Laboriosam recusandae excepturi neque pariatur soluta eos, enim beatae assumenda iure delectus blanditiis nesciunt. Ipsum minima dolorum repellat dolorem consequuntur, ducimus ullam libero eius repellendus a!',
      places: [
        { place: 'Place 1' },
        { place: 'Place 2' },
        { place: 'Place 3' },
        { place: 'Place 4' },
        { place: 'Place 5' },
        { place: 'Place 6' },
      ],
      planOfStay:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores quasi omnis iure, explicabo voluptatibus itaque. Ullam cum delectus beatae iusto. Odio unde accusantium officia velit sunt reiciendis recusandae eligendi eaque molestiae quisquam facilis exercitationem aliquam, impedit vitae! Excepturi nesciunt, magni voluptatem praesentium veniam enim, minima quos alias, cumque voluptates fugit. Labore itaque neque, dicta iure doloremque ullam aspernatur laboriosam. Corrupti, illum. Ullam similique, expedita qui, sit esse molestiae repudiandae repellendus cum eius omnis, sequi dolor reprehenderit aliquam ab ad deserunt! Autem quos et architecto. Doloremque rem distinctio iste laboriosam quidem dignissimos unde facilis accusantium totam quaerat quis, eos atque necessitatibus harum porro placeat voluptatibus, facere provident obcaecati. Eveniet voluptatum hic fugiat quisquam consectetur laborum tempore voluptate saepe magni eum iusto perferendis vel non, quos quaerat rem sint eos neque reprehenderit nostrum consequuntur aut eligendi, quam vitae. Obcaecati placeat veniam consequatur aliquam necessitatibus dicta labore, suscipit non minima laborum. Sequi maiores beatae unde illum ullam illo dicta cumque natus ut dolores tempora officiis fuga obcaecati sint accusantium distinctio necessitatibus, molestiae quasi assumenda, rerum sed! Consequuntur harum ab dolorem corrupti, omnis cumque, optio dicta ad eius id recusandae! Consequatur incidunt doloribus tempore quam voluptate fugit dolorum modi distinctio enim, soluta odit!',
    },
    {
      typeOfJourney: 'Exclusive',
      price: 11127,
      lengthOfStay: 13,
      country: 'Hiszpania',
      deadline: 'Czerwiec',
      town: 'Madryt',
      img: '../../../assets/img/offers/thumb/madryt-town.jpg',
      score: 8.9,
      id: 7,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores delectus aperiam molestiae earum molestias sit perferendis rem repellat similique tempore culpa voluptas, exercitationem modi animi, libero iusto error officiis quaerat illo odit. Suscipit fugiat corporis soluta consequatur voluptates fugit tempora expedita voluptatibus porro natus dolorem est illo laudantium rem neque ipsam hic aliquam obcaecati deserunt, nulla dolore ab laborum odio amet. Nesciunt cum quia esse accusamus corrupti optio delectus veniam et explicabo ipsa itaque numquam pariatur ea minima, provident magnam fugit, odio laudantium vitae corporis doloremque voluptate rerum! Ducimus repudiandae odit libero aperiam adipisci molestias reiciendis natus quis vitae nesciunt culpa, eius, odio sequi velit nemo commodi quisquam totam, ipsam dolor. Eius eaque error illum adipisci, obcaecati facilis autem quo similique exercitationem non aut odio quaerat in, eos est. Voluptatem, incidunt maxime hic deserunt officia quas nobis sunt aliquid quasi laudantium, autem, ut unde. Porro ratione earum esse reprehenderit quae sed repudiandae sequi. Quo modi distinctio ea ut quis incidunt aliquam deserunt recusandae nesciunt tempore earum praesentium repellat aperiam architecto harum, consequatur quibusdam? Laboriosam recusandae excepturi neque pariatur soluta eos, enim beatae assumenda iure delectus blanditiis nesciunt. Ipsum minima dolorum repellat dolorem consequuntur, ducimus ullam libero eius repellendus a!',
      places: [
        { place: 'Place 1' },
        { place: 'Place 2' },
        { place: 'Place 3' },
        { place: 'Place 4' },
        { place: 'Place 5' },
      ],
      planOfStay:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores quasi omnis iure, explicabo voluptatibus itaque. Ullam cum delectus beatae iusto. Odio unde accusantium officia velit sunt reiciendis recusandae eligendi eaque molestiae quisquam facilis exercitationem aliquam, impedit vitae! Excepturi nesciunt, magni voluptatem praesentium veniam enim, minima quos alias, cumque voluptates fugit. Labore itaque neque, dicta iure doloremque ullam aspernatur laboriosam. Corrupti, illum. Ullam similique, expedita qui, sit esse molestiae repudiandae repellendus cum eius omnis, sequi dolor reprehenderit aliquam ab ad deserunt! Autem quos et architecto. Doloremque rem distinctio iste laboriosam quidem dignissimos unde facilis accusantium totam quaerat quis, eos atque necessitatibus harum porro placeat voluptatibus, facere provident obcaecati. Eveniet voluptatum hic fugiat quisquam consectetur laborum tempore voluptate saepe magni eum iusto perferendis vel non, quos quaerat rem sint eos neque reprehenderit nostrum consequuntur aut eligendi, quam vitae. Obcaecati placeat veniam consequatur aliquam necessitatibus dicta labore, suscipit non minima laborum. Sequi maiores beatae unde illum ullam illo dicta cumque natus ut dolores tempora officiis fuga obcaecati sint accusantium distinctio necessitatibus, molestiae quasi assumenda, rerum sed! Consequuntur harum ab dolorem corrupti, omnis cumque, optio dicta ad eius id recusandae! Consequatur incidunt doloribus tempore quam voluptate fugit dolorum modi distinctio enim, soluta odit!',
    },
    {
      typeOfJourney: 'Exclusive',
      price: 9802,
      lengthOfStay: 5,
      country: 'Szwajcaria',
      deadline: 'Grudzień',
      town: 'Berno',
      img: '../../../assets/img/offers/thumb/bern-town.jpg',
      score: 9.2,
      id: 8,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat maiores delectus aperiam molestiae earum molestias sit perferendis rem repellat similique tempore culpa voluptas, exercitationem modi animi, libero iusto error officiis quaerat illo odit. Suscipit fugiat corporis soluta consequatur voluptates fugit tempora expedita voluptatibus porro natus dolorem est illo laudantium rem neque ipsam hic aliquam obcaecati deserunt, nulla dolore ab laborum odio amet. Nesciunt cum quia esse accusamus corrupti optio delectus veniam et explicabo ipsa itaque numquam pariatur ea minima, provident magnam fugit, odio laudantium vitae corporis doloremque voluptate rerum! Ducimus repudiandae odit libero aperiam adipisci molestias reiciendis natus quis vitae nesciunt culpa, eius, odio sequi velit nemo commodi quisquam totam, ipsam dolor. Eius eaque error illum adipisci, obcaecati facilis autem quo similique exercitationem non aut odio quaerat in, eos est. Voluptatem, incidunt maxime hic deserunt officia quas nobis sunt aliquid quasi laudantium, autem, ut unde. Porro ratione earum esse reprehenderit quae sed repudiandae sequi. Quo modi distinctio ea ut quis incidunt aliquam deserunt recusandae nesciunt tempore earum praesentium repellat aperiam architecto harum, consequatur quibusdam? Laboriosam recusandae excepturi neque pariatur soluta eos, enim beatae assumenda iure delectus blanditiis nesciunt. Ipsum minima dolorum repellat dolorem consequuntur, ducimus ullam libero eius repellendus a!',
      places: [
        { place: 'Place 1' },
        { place: 'Place 2' },
        { place: 'Place 3' },
      ],
      planOfStay:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae asperiores quasi omnis iure, explicabo voluptatibus itaque. Ullam cum delectus beatae iusto. Odio unde accusantium officia velit sunt reiciendis recusandae eligendi eaque molestiae quisquam facilis exercitationem aliquam, impedit vitae! Excepturi nesciunt, magni voluptatem praesentium veniam enim, minima quos alias, cumque voluptates fugit. Labore itaque neque, dicta iure doloremque ullam aspernatur laboriosam. Corrupti, illum. Ullam similique, expedita qui, sit esse molestiae repudiandae repellendus cum eius omnis, sequi dolor reprehenderit aliquam ab ad deserunt! Autem quos et architecto. Doloremque rem distinctio iste laboriosam quidem dignissimos unde facilis accusantium totam quaerat quis, eos atque necessitatibus harum porro placeat voluptatibus, facere provident obcaecati. Eveniet voluptatum hic fugiat quisquam consectetur laborum tempore voluptate saepe magni eum iusto perferendis vel non, quos quaerat rem sint eos neque reprehenderit nostrum consequuntur aut eligendi, quam vitae. Obcaecati placeat veniam consequatur aliquam necessitatibus dicta labore, suscipit non minima laborum. Sequi maiores beatae unde illum ullam illo dicta cumque natus ut dolores tempora officiis fuga obcaecati sint accusantium distinctio necessitatibus, molestiae quasi assumenda, rerum sed! Consequuntur harum ab dolorem corrupti, omnis cumque, optio dicta ad eius id recusandae! Consequatur incidunt doloribus tempore quam voluptate fugit dolorum modi distinctio enim, soluta odit!',
    },
  ];

  offersDataCountries: OffersCountries[] = [
    { country: 'Włochy' },
    { country: 'Meksyk' },
    { country: 'Algieria' },
    { country: 'Indie' },
    { country: 'Japonia' },
    { country: 'Tajlandia' },
    { country: 'Hiszpania' },
    { country: 'Szwajcaria' },
  ];

  offersDeadline: OffersDeadline[] = [
    { month: 'Styczeń' },
    { month: 'Luty' },
    { month: 'Marzec' },
    { month: 'Kwiecień' },
    { month: 'Maj' },
    { month: 'Czerwiec' },
    { month: 'Lipiec' },
    { month: 'Sierpień' },
    { month: 'Wrzesień' },
    { month: 'Październik' },
    { month: 'Listopad' },
    { month: 'Grudzień' },
  ];
}
