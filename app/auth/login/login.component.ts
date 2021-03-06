'use strict';

import {
    Component,
    OnInit,
    ViewEncapsulation }            from "@angular/core";

@Component({
    selector: 'login',
    templateUrl: 'app/auth/login/login.html',
    styleUrls: [ 'dist/app/auth/login/login.css' ],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    constructor() { }

    public ngOnInit(): void { }
}