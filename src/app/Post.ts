import { User } from './user';

export class Post {

// id: number;
// title: string;
// author: User['id'];
// image: string;
// publishdate: Date;
// excert: string;

constructor(
    public id: number,
    public title: string,
    public author: string,
    public publishdate: string,
    public excert: string,
    public image?: string
  ) {  }
}

