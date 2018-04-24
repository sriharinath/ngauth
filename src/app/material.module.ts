import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule
    , MatCheckboxModule
    , MatGridListModule
    , MatInputModule
    , MatIconModule
    , MatToolbarModule
    , MatProgressSpinnerModule
    , MatCardModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule
        , MatCheckboxModule
        , MatGridListModule
        , MatInputModule
        , MatIconModule
        , MatToolbarModule
        , MatProgressSpinnerModule
        , MatCardModule
    ],
    exports: [MatButtonModule
        , MatCheckboxModule
        , MatGridListModule
        , MatInputModule
        , MatIconModule
        , MatToolbarModule
        , MatProgressSpinnerModule
        , MatCardModule
    ],
})
export class MaterialModule { }