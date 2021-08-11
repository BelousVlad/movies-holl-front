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
    {text: $localize`Интернет`, link: 'https://format-tv.net/tariffs/'},
    {text: $localize`Телевиденье`, link: 'https://format-tv.net/tariffs/'},
    {text: $localize`Умный дом`, link: 'https://format-tv.net/video/'},
    {text: $localize`Кинозал`, link: 'https://format-tv.net/'},
    {text: $localize`Format Family`, link: 'https://format-tv.net/format-family'},
    {text: $localize`Web Плеер`, link: 'https://tv.format-tv.net/'},
    {text: $localize`Сервисный центр`, link: 'https://format-tv.net/service-center'},
  ]

  list2 = [
    {text: $localize`Для бизнеса`, link: 'https://format-tv.net/web-business'},
    {text: $localize`Новости`, link: 'https://format-tv.net/news/'},
    {text: $localize`Акции`, link: 'https://format-tv.net/offers/'},
    {text: $localize`Мариуполь Online`, link: 'https://format-tv.net/mariupol-online'},
    {text: $localize`Магазин`, link: 'https://format-tv.net/shop-2'},
    {text: $localize`Оплата`, link: 'https://format-tv.net/payment/'},
  ]

  list3 = [
    {text: $localize`Карьера`, link: 'https://format-tv.net/vacancies'},
    {text: $localize`Контакты`, link: 'https://format-tv.net/contacts'},
    {text: $localize`Wi-Fi зоны`, link: 'https://format-tv.net/wi-fi'},
    {text: $localize`Наши продукты`, link: 'https://format-tv.net/faq'},
    {text: $localize`Отсавить отзыв`, link: 'https://format-tv.net/reviews'},
  ]

  nav_list = [
    { text: $localize`Услуги`, link: '#', 
      menu: [
        { text: $localize`Интернет`, link: '#' },
        { text: $localize`Телевидение`, link: '#' },
        { text: $localize`Умный дом`, link: '#' },
        { text: $localize`Сервисный Центр`, link: '#' },
        { text: $localize`WEB Плеер`, link: '#' },
        { text: $localize`Для Бизнеса`, link: '#' },
        { text: $localize`Антивирус`, link: '#' },
        { text: $localize`Кинозал`, link: '#', 
          menu: [
            { text: $localize`Интернет`, link: '#' },
            { text: $localize`Телевидение`, link: '#' },
            { text: $localize`Умный дом`, link: '#' },
            { text: $localize`Сервисный Центр`, link: '#' },
            { text: $localize`WEB Плеер`, link: '#' },
            { text: $localize`Для Бизнеса`, link: '#' },
            { text: $localize`Антивирус`, link: '#' },
            { text: $localize`Кинозал`, link: '#' },
          ]
      },
      ]
    },
    { text: $localize`Для Бизнеса`, link: '#' },
    { text: $localize`Новости`, link: '#' },
    { text: $localize`Акции`, link: '#' },
    { text: $localize`Магазин`, link: '#' },
    { text: $localize`Мариуполь Online`, link: '#' },
    { text: $localize`Оплата`, link: '#' },
  ]

  addition_nav_list = [
    { text: $localize`Новости`, link: '#' },
    { text: $localize`Фильмы`, link: '#' },
    { text: $localize`Мультфильмы`, link: '#' },
    { text: $localize`Сериалы`, link: '#' },
    { text: $localize`Спорт`, link: '#' },
    { text: $localize`Шоу`, link: '#' },
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

