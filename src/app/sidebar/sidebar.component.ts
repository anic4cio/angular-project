import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    @Output() conversationClicked: EventEmitter<any> = new EventEmitter();  
    
    searchText;

    conversations = [
        {
            name: 'James', time: '14:35 PM', latestMessage: 'Good morging!', 
            messages: [
                {id: 1, body: 'How are you?', time: '06:36', me: false},
                {id: 2, body: 'Hello mite!', time: '08:13', me: true},
                {id: 3, body: 'I am fine, thanks!', time: '03:45', me: false},
                {id: 4, body: 'Glad to hear that', time: '07:40', me: true},
            ]},
        {
            name: 'Maria', time: '11:33 AM', latestMessage: 'How are you?',
            messages: [
                {id: 1, body: 'How are you?', time: '06:36', me: false},
                {id: 2, body: 'Hello everyone!', time: '08:13', me: true},
                {id: 3, body: 'Pretty good, thank you very much', time: '03:45', me: false},
                {id: 4, body: 'Glad to hear that', time: '07:40', me: true},
            ]},
        {
            name: 'Sonia', time: '09:15 AM', latestMessage: 'We can`t do it',
            messages: [
                {id: 1, body: 'Are you fine?', time: '06:36', me: false},
                {id: 2, body: 'Hello dear', time: '08:13', me: true},
                {id: 3, body: 'I am ok', time: '03:45', me: false},
                {id: 4, body: 'Glad to hear that', time: '07:40', me: true},
            ]},
        {
            name: 'Pedro', time: '08:30 AM', latestMessage: 'Yes, we have to go early',
            messages: [
                {id: 1, body: 'Whats up', time: '06:36', me: false},
                {id: 2, body: 'Hello my love', time: '08:13', me: true},
                {id: 3, body: 'Alls up', time: '03:45', me: false},
                {id: 4, body: 'Awesome', time: '07:40', me: true},
            ]},
        {
            name: 'Gabriela', time: '06:35 AM', latestMessage: 'Ok, bye',
            messages: [
                {id: 1, body: 'How good you are?', time: '06:36', me: false},
                {id: 2, body: 'Hi friend', time: '08:13', me: true},
                {id: 3, body: 'Very good', time: '03:45', me: false},
                {id: 4, body: 'Glad to hear that', time: '07:40', me: true},
            ]},
    ]

    get filteredConversations() {
        return this.conversations.filter((conversation) => {
            return conversation.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                conversation.latestMessage.toLowerCase().includes(this.searchText.toLowerCase())
        });
    }

    constructor() { } 

    ngOnInit(): void {
    }

}
