import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [
    {
      name: 'Oscar',
      description: 'he is a little grouchy'
    },
    {
      name: 'Grover',
      description: 'he is a little cute'
    },
    {
      name: 'Big Bird',
      description: 'he is a little annoying'
    }
  ];

  doRefresh(evt: Event) {
    setTimeout(() => {
      this.items.push({
        name: 'Oscar',
        description: 'he is a little grouchy'
      });
      this.items.push({
        name: 'Grover',
        description: 'he is a little cute'
      });
      this.items.push({
        name: 'Big Bird',
        description: 'he is a little annoying'
      });
      (evt.target as any).complete();
    }, 750);
  }
}
