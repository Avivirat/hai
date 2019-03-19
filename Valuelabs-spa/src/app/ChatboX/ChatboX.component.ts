import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../_services/auth.service';
import { Pagination, PaginationResult } from './../_models/Pagination';
import { Component, OnInit } from '@angular/core';
import { Message } from '../_models/message';
import { UserService } from '../_services/User.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ChatboX',
  templateUrl: './ChatboX.component.html',
  styleUrls: ['./ChatboX.component.css']
})
export class ChatboXComponent implements OnInit {

  messages: Message[];
  pagination: Pagination;
  messageContainer = 'Unread';
  constructor(private userService: UserService, private authService: AuthService, private route: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.messages = data['messages'].result;
      this.pagination = data['messages'].pagination;
    });
  }
    loadMessages() {
      this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.CurrentPage, this.pagination.ItemsPerPage, this.messageContainer)
      .subscribe((res: PaginationResult<Message[]>) => {
        this.messages = res.result;
        this.pagination = res.pagination;
      }, error => {
        this.toastr.error(error);
      }
      );
    }
    pageChanged(event: any): void {
      this.pagination.CurrentPage = event.page;
      this.loadMessages();
    }
  }


