import { Component } from '@angular/core';
import { DoorComponent } from '../../entities';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DoorComponent],
  template: `<div class="main_page">
    @for (el of doors; track $index) {
      <app-door [img]="el.img" [title]="el.title" [text]="el.text" />
    }
  </div>`,
  styleUrl: './main.component.scss',
})
export class MainComponent {
  doors = [
    {
      img: 'https://picsum.photos/200/250',
      title: 'Door 12',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: 'https://picsum.photos/200/250',
      title: 'Door 1',
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      img: 'https://picsum.photos/200/250',
      title: 'Door 1',
      text: 'Lorem ipsum dolor sit amet.',
    },
  ];
}
