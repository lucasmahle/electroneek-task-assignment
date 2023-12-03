import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-console-logs',
  templateUrl: './console-logs.component.html',
  styleUrls: ['./console-logs.component.scss']
})
export class ConsoleLogsComponent implements OnInit {
  messages = [];

  constructor() {}

  ngOnInit(): void {
  }

}
