import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 receipes: Receipe[]=[

  new Receipe("Koshary","Roz , makrona,3ads","https://i.ytimg.com/vi/tpWq1-R-cqo/maxresdefault.jpg")
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
