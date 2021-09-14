import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';


export type MenuItem = {
  text: string,
  link: string,
  menu?: Array<MenuItem>
  icon?: string,
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
        { text: $localize`Интернет`, link: 'https://format-tv.net/tariffs/', icon: 'https://format-tv.net/wp-content/uploads/2019/06/web-icon.png' },
        { text: $localize`Телевидение`, link: 'https://format-tv.net/tariffs/', icon: 'https://format-tv.net/wp-content/uploads/2019/06/tv-icon.png' },
        { text: $localize`Умный дом`, link: 'https://format-tv.net/video/', icon: 'https://format-tv.net/wp-content/uploads/2019/06/cctv-icon.png' },
        { text: $localize`Сервисный Центр`, link: 'https://format-tv.net/service-center/', icon: 'https://format-tv.net/wp-content/uploads/2019/06/service_center-icon.png' },
        { text: $localize`WEB Плеер`, link: 'https://tv.format-tv.net/auth', icon: 'https://format-tv.net/wp-content/uploads/2019/06/interactive-icon.png' },
        { text: $localize`Для Бизнеса`, link: 'https://format-tv.net/web-business/', icon: 'https://format-tv.net/wp-content/uploads/2021/07/for-business.svg' },
        { text: $localize`Антивирус`, link: 'https://format-tv.net/antivirus/', icon: 'https://format-tv.net/wp-content/uploads/2019/06/antivirus-icon.png' },
        { text: $localize`Кинозал`, link: 'https://online.format-tv.net/', icon: 'https://format-tv.net/wp-content/uploads/2019/06/cinema-icon.png' },
      ]
    },
    { text: $localize`Для Бизнеса`, link: 'https://format-tv.net/web-business/' },
    { text: $localize`Новости`, link: 'https://format-tv.net/news/' },
    { text: $localize`Акции`, link: 'https://format-tv.net/offers/' },
    { text: $localize`Магазин`, link: 'https://format-tv.net/shop-2/' },
    { text: $localize`Мариуполь Online`, link: 'https://format-tv.net/mariupol-online/' },
    { text: $localize`Оплата`, link: 'https://format-tv.net/payment/' },
  ]

  addition_nav_list = [
    // { text: $localize`Новости`, link: '' },
    { text: $localize`Фильмы`, link: '114' },
    { text: $localize`Мультфильмы`, link: '121' },
    { text: $localize`Семейные`, link: '116' },
    { text: $localize`Спортивные`, link: '120' },
    { text: $localize`Ужасы`, link: '109' },
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

