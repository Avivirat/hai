import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-Colleaguecard',
  templateUrl: './Colleaguecard.component.html',
  styleUrls: ['./Colleaguecard.component.css']
})
export class ColleaguecardComponent implements OnInit {
  @Input() user1: User;

  constructor() { }

  ngOnInit() {
  }

}
