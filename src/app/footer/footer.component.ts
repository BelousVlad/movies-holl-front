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
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
    ]
    this.list2 = [
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
    ]
    this.list3 = [
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
      {text: 'Интернет', link: ''},
    ]
  }

}
