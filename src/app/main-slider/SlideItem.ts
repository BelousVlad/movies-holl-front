export class SlideItem {
    constructor(
        public image: string,
        public title: string|null = null,
        public note: string|null = null,
        public link: string|null = null,
        public link_text: string = 'Попробовать')
    {}
}