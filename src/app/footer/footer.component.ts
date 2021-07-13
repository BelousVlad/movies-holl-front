import { Component, OnInit } from '@angular/core';
import { MenuItem, MenusService } from '../services/menus-service/menus.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tech_sup_list!: Array<{text:string, tel:string}>
  subscriber_list!: Array<{text:string, tel:string}>

  list1!: Array<MenuItem>;
  list2!: Array<MenuItem>;
  list3!: Array<{text: string, link: string}>;

  constructor(private menus: MenusService) { }

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

    // this.social_list = [
    //   { icon: faFacebookF, link: 'google.com'},
    //   { icon: faInstagram, link: 'google.com'},
    //   { icon: faYoutube,   link: 'google.com'},
    //   { icon: faFacebookF, link: 'google.com'},
    //   { icon: faFacebookF, link: 'google.com'},
    //   { icon: faFacebookF, link: 'google.com'},
    // ]


    this.list1 = [];
    this.menus.getFirstMenu().subscribe(item => this.list1.push(item))

    this.list2 = [];
    this.menus.getSecondMenu().subscribe(item => this.list2.push(item))

    this.list3 = [];
    this.menus.getThridMenu().subscribe(item => this.list3.push(item))
    
  }
}
