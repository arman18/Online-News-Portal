import {Comment} from './comment'
export class News {
    id: number;
    title: string;
    content: string;
    type:string;
    //image
    comments: Comment[];
}
