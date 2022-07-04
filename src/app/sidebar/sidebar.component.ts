import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    conversations = [
        {name: 'James', time: '14:35 PM', latestMessage: 'Good morging!'},
        {name: 'Maria', time: '11:33 AM', latestMessage: 'How are you?'},
        {name: 'Andrew', time: '09:25 AM', latestMessage: 'Pretty good'},
        {name: 'Sonia', time: '09:15 AM', latestMessage: 'We can`t do it'},
        {name: 'Hermes', time: '08:57 AM', latestMessage: 'Nice to meet you'},
        {name: 'Pedro', time: '08:30 AM', latestMessage: 'Yes, we have to go early'},
        {name: 'Ana', time: '08:25 AM', latestMessage: 'I have been doing this'},
        {name: 'Ramires', time: '07:35 AM', latestMessage: 'Definitively never'},
        {name: 'Thiago', time: '07:29 AM', latestMessage: 'Ok, have fun'},
        {name: 'Bruna', time: '07:10 AM', latestMessage: 'Good night, lovely'},
        {name: 'Gabriela', time: '06:35 AM', latestMessage: 'Ok, bye'},
        {name: 'Gabriela', time: '06:35 AM', latestMessage: 'Ok, bye'},
    ]
  
    constructor() { }

    ngOnInit(): void {
    }

}
