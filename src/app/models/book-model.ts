import {MultimediaModel} from './multimedia-model';

export interface BookModel {
  id: number;
  title: string;
  printOrder: string;
  printDate: string;
  description: string;
  price: number;
  pageCount: number;
  sellLink: string;
  thumbnail: MultimediaModel;
}
