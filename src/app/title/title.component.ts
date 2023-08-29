import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = '';
  constructor() {
    console.log(`constructor ${this.nome}`);
  }
  ngOnChanges(): void {
    console.log(`ngOnChanges ${this.nome}`);
  }

  ngOnInit(): void {
    this.nome += ' x';
    console.log(`ngOnInit ${this.nome}`);
  }
}
