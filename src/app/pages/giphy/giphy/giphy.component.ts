import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }`]
})
export class GiphyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
