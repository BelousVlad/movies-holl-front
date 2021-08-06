import { Injectable, Type } from '@angular/core';
import { from, Observable } from 'rxjs';


export type MenuItem = {
  text: string,
  link: string,
  menu?: Array<MenuItem>
}

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }

  list1: Array<MenuItem> = [
    {text: 'Интернет', link: 'https://format-tv.net/tariffs/'},
    {text: 'Телевиденье', link: 'https://format-tv.net/tariffs/'},
    {text: 'Умный дом', link: 'https://format-tv.net/video/'},
    {text: 'Кинозал', link: 'https://format-tv.net/'},
    {text: 'Format Family', link: 'https://format-tv.net/format-family'},
    {text: 'Web Плеер', link: 'https://tv.format-tv.net/'},
    {text: 'Сервисный центр', link: 'https://format-tv.net/service-center'},
  ]

  list2 = [
    {text: 'Для бизнеса', link: 'https://format-tv.net/web-business'},
    {text: 'Новости', link: 'https://format-tv.net/news/'},
    {text: 'Акции', link: 'https://format-tv.net/offers/'},
    {text: 'Мариуполь Online', link: 'https://format-tv.net/mariupol-online'},
    {text: 'Магазин', link: 'https://format-tv.net/shop-2'},
    {text: 'Оплата', link: 'https://format-tv.net/payment/'},
  ]

  list3 = [
    {text: 'Карьера', link: 'https://format-tv.net/vacancies'},
    {text: 'Контакты', link: 'https://format-tv.net/contacts'},
    {text: 'Wi-Fi зоны', link: 'https://format-tv.net/wi-fi'},
    {text: 'Наши продукты', link: 'https://format-tv.net/faq'},
    {text: 'Отсавить отзыв', link: 'https://format-tv.net/reviews'},
  ]

  nav_list = [
    { text: 'Услуги', link: '#', 
      menu: [
        { text: 'Интернет', link: '#' },
        { text: 'Телевидение', link: '#' },
        { text: 'Умный дом', link: '#' },
        { text: 'Сервисный Центр', link: '#' },
        { text: 'WEB Плеер', link: '#' },
        { text: 'Для Бизнеса', link: '#' },
        { text: 'Антивирус', link: '#' },
        { text: 'Кинозал', link: '#', 
          menu: [
            { text: 'Интернет', link: '#' },
            { text: 'Телевидение', link: '#' },
            { text: 'Умный дом', link: '#' },
            { text: 'Сервисный Центр', link: '#' },
            { text: 'WEB Плеер', link: '#' },
            { text: 'Для Бизнеса', link: '#' },
            { text: 'Антивирус', link: '#' },
            { text: 'Кинозал', link: '#' },
          ]
      },
      ]
    },
    { text: 'Для Бизнеса', link: '#' },
    { text: 'Новости', link: '#' },
    { text: 'Акции', link: '#' },
    { text: 'Магазин', link: '#' },
    { text: 'Мариуполь Online', link: '#' },
    { text: 'Оплата', link: '#' },
  ]

  addition_nav_list = [
    { text: 'Новости', link: '#' },
    { text: 'Фильмы', link: '#' },
    { text: 'Мультфильмы', link: '#' },
    { text: 'Сериалы', link: '#' },
    { text: 'Спорт', link: '#' },
    { text: 'Шоу', link: '#' },
  ]
  

  getFirstMenu() : Observable<MenuItem> {
    return from(this.list1)
  }

  getAdditionalNavMenu() : Observable<MenuItem> {
    return from(this.addition_nav_list);
  }

  getSecondMenu(): Observable<MenuItem> {
    return from(this.list2);
  }

  getThridMenu(): Observable<MenuItem> {
    return from(this.list3);
  }

  getHeaderNavMenu(): Observable<MenuItem> {
    return from(this.nav_list);
  }
}

