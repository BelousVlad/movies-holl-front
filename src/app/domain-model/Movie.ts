export class Movie {
    id: number = 1;
    constructor(
        public title: string,
        public image: string,
        public release_date: Date
        ) {}
}