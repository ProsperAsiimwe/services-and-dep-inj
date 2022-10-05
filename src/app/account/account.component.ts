import { Component, Input } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { LoggingService } from '../shared/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService],
})
export class AccountComponent {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  @Input() account: { name: string; status: string };
  @Input() id: number;

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
