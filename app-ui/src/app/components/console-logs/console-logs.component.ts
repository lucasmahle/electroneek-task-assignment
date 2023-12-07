import { Component, OnInit } from '@angular/core';
import { ConsoleService } from 'src/app/core/services/console.service';
@Component({
  selector: 'app-console-logs',
  templateUrl: './console-logs.component.html',
  styleUrls: ['./console-logs.component.scss']
})
export class ConsoleLogsComponent implements OnInit {
  messages: string[] = [];

  constructor(
    private readonly consoleService: ConsoleService,
  ) {}

  ngOnInit(): void {
    this.consoleService.console$.subscribe(logs => this.messages = logs)
  }

}
