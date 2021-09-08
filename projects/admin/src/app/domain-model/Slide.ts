export interface ISlide {
    slide_id: number;
    title?: string;
    note?: string;
    link?: string;
    link_text?: string;
    image?: string|Blob|File|null;
}