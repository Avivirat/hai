import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { UserService } from 'src/app/_services/User.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-colleague-messages',
  templateUrl: './colleague-messages.component.html',
  styleUrls: ['./colleague-messages.component.css']
})
export class ColleagueMessagesComponent implements OnInit {
  @Input() recipientId: number;
  messages: Message[];
  newMessage: any = {};
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    const currentUserId = +this.authService.decodedToken.nameid;
    this.userService
      .getMessageThread(this.authService.decodedToken.nameid, this.recipientId)
      .pipe(
        tap(messages => {
          for (let i = 0; i < messages.length; i++) {
            if (
              messages[i].isRead === false &&
              messages[i].recipientId === currentUserId
            )
              this.userService.markAsRead(currentUserId, messages[i].id);
          }
        })
      )
      .subscribe(
        messages => {
          this.messages = messages;
        },
        error => {
          this.toastr.error(error);
        }
      );
  }
  sendMessage() {
    this.newMessage.recipientId = this.recipientId;
    this.userService
      .sendMessage(this.authService.decodedToken.nameid, this.newMessage)
      .subscribe(
        (message: Message) => {
          this.messages.unshift(message);
          this.newMessage = '';
        },
        error => {
          this.toastr.error(error);
        }
      );
  }
}
