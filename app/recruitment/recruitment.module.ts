'use strict';

import { NgModule }                     from '@angular/core';

import { appRoutingProviders, routing } from './recruitment.routing';

import {
    DropdownModule,
    SelectButtonModule,
    ToggleButtonModule }                from 'primeng/primeng';

import { BrowserModule }                from '@angular/platform-browser'
import { FormsModule }                  from '@angular/forms';

import { PositionsComponent }            from './positions/positions.component';
import { SkillsComponent }              from './skills/skills.component';

@NgModule({
    declarations: [
        PositionsComponent,
        SkillsComponent
    ],
    imports: [
        BrowserModule,
        DropdownModule,
        FormsModule,
        routing,
        SelectButtonModule,
        ToggleButtonModule
    ],
    providers: [
        appRoutingProviders
    ]
})
export class RecruitmentModule { }