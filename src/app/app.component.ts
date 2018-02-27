import { Component } from '@angular/core';
@Component ({
    selector: "app-root",
    styleUrls: ['./app.component.css'],
    template: `
            <h1>{{title}}</h1>
            <nav>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/dashboard" routerLinkActive="active">Dash</a>
            </nav>
   <router-outlet></router-outlet>
            `

})

export class AppComponent {
    title = '英雄之旅';
}