import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }

  list1 = [
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
    { text: 'Услуги', link: '#' }, 
    { text: 'Услуги', link: '#' }, 
    { text: 'Услуги', link: '#' }, 
    { text: 'Услуги', link: '#' }, 
    { text: 'Услуги', link: '#' }, 
  ]

  getFirstMenu() : Observable<MenuItem> {
    return from(this.list1)
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

export type MenuItem = {
  text: string,
  link: string
}