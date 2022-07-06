import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() conversation;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  submitMessage(event) {
    let value = event.target.value.trim();
    event.target.value = '';

    if(value == '') {
      let sdfsafrgtdgds = 1;
    } else {
      this.conversation.latestMessage = value;
        this.conversation.messages.unshift({
        id:1,
        body: value,
        time: '37:79',
        me: true
      });
    }
  }
}
