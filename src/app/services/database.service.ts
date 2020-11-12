import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  updateChange: Subject<any> = new Subject<any>();
  dataBaseChange: Subject<any> = new Subject<any>();

  updatePost: any = {
    id: 0,
    title: '',
    summary: ``,
    // tslint:disable-next-line: max-line-length
    img: `https://source.unsplash.com/random`,
    comments: [],
    category: 'Travel',
  };

  database: any[] = [
    {
      id: 1,
      title: 'The waves are high & beautiful',
      summary: `Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.`,
      // tslint:disable-next-line: max-line-length
      img: `https://images.unsplash.com/photo-1603398741629-22d0b9741543?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`,
      category: 'Travel',
      comments: [
        {
          user: 'Joe Doew',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
          user: 'Joe Doew',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
          user: 'Joe Doew',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        }
      ]
    },
    {
      id: 2,
      title: 'At the beach in winter',
      summary: `Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.`,
      // tslint:disable-next-line: max-line-length
      img: `https://images.unsplash.com/photo-1602911504703-ff49a51d07b0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`,
      category: 'Lifestyle',
      comments: [
        {
          user: 'Joe Doew',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
          user: 'Joe Doew',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
          user: 'Joe Doew',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
          user: 'Joe Doew',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        }
      ]
    },
    {
      id: 3,
      title: 'The Edge of Nothing Lake',
      summary: `Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.`,
      // tslint:disable-next-line: max-line-length
      img: `https://images.unsplash.com/photo-1604882356682-8ec3d3037c82?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`,
      category: 'Business',
      comments: [
        // {
        //   user: 'Joe Doew',
        //   comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        // }
      ]
    },
    {
      id: 4,
      title: 'Five Hundred Twenty',
      summary: `Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella. Lorem ipsum dolor sit amet enatis sociosqu egestas sociis nibh. Ornare hendrerit fringilla interdum ridiculus consequat euismod condimentum magna. Tortor sollicitudin pharetra mattis fames fusce placerat. Aenean dignissim consequat posuere quam laoreet in luctus mus, orci mattis sapien ullamcorper ad dictum massa quisque parturient, lacus inceptos et ut nulla condimentum eget.`,
      // tslint:disable-next-line: max-line-length
      img: `https://images.unsplash.com/photo-1602815403836-3dfe6062212c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`,
      category: 'Travel',
      comments: [
        {
          user: 'Joe Doew',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        },
        {
          user: 'Joe Doew',
          comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        }
      ]
    }
  ];

}
