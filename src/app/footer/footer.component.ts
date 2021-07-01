import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram, faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tech_sup_list!: Array<{text:string, tel:string}>
  subscriber_list!: Array<{text:string, tel:string}>

  social_list!: Array<{icon: IconDefinition, link: string}>

  list1!: Array<{text: string, link: string}>;
  list2!: Array<{text: string, link: string}>;
  list3!: Array<{text: string, link: string}>;

  constructor() { }

  ngOnInit(): void {
    this.tech_sup_list = [
      {text: '(0629) 416-433', tel: '+380629416433'},
      {text: '(0629) 416-433', tel: '+380629416433'},
      {text: '(0629) 416-433', tel: '+380629416433'},
      {text: '(0629) 416-433', tel: '+380629416433'},
    ]

    this.subscriber_list = [
      {text: '(0629) 416-433', tel: '+380629416433'},
      {text: '(0629) 416-433', tel: '+380629416433'},
      {text: '(0629) 416-433', tel: '+380629416433'},
      {text: '(0629) 416-433', tel: '+380629416433'},
    ]

    this.social_list = [
      { icon: faFacebookF, link: 'google.com'},
      { icon: faInstagram, link: 'google.com'},
      { icon: faYoutube, link: 'google.com'},
      { icon: faFacebookF, link: 'google.com'},
      { icon: faFacebookF, link: 'google.com'},
      { icon: faFacebookF, link: 'google.com'},
    ]

    this.list1 = [
      {text: 'Интернет', link: 'https://format-tv.net/tariffs/'},
      {text: 'Телевиденье', link: 'https://format-tv.net/tariffs/'},
      {text: 'Умный дом', link: 'https://format-tv.net/video/'},
      {text: 'Кинозал', link: 'https://format-tv.net/'},
      {text: 'Format Family', link: 'https://format-tv.net/format-family'},
      {text: 'Web Плеер', link: 'https://tv.format-tv.net/'},
      {text: 'Сервисный центр', link: 'https://format-tv.net/service-center'},
    ]
    this.list2 = [
      {text: 'Для бизнеса', link: 'https://format-tv.net/web-business'},
      {text: 'Новости', link: 'https://format-tv.net/news/'},
      {text: 'Акции', link: 'https://format-tv.net/offers/'},
      {text: 'Мариуполь Online', link: 'https://format-tv.net/mariupol-online'},
      {text: 'Магазин', link: 'https://format-tv.net/shop-2'},
      {text: 'Оплата', link: 'https://format-tv.net/payment/'},
    ]
    this.list3 = [
      {text: 'Карьера', link: 'https://format-tv.net/vacancies'},
      {text: 'Контакты', link: 'https://format-tv.net/contacts'},
      {text: 'Wi-Fi зоны', link: 'https://format-tv.net/wi-fi'},
      {text: 'Наши продукты', link: 'https://format-tv.net/faq'},
      {text: 'Отсавить отзыв', link: 'https://format-tv.net/reviews'},
    ]
  }

}
