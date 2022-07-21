import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { WorkCreateDialogComponent } from './components/work-create-dialog/work-create-dialog.component';
import {FormsModule} from '@angular/forms';
import { WorkComponent } from './components/work/work.component';

@NgModule({
    declarations: [
        AppComponent,
        WorkCreateDialogComponent,
        WorkComponent
    ],
    entryComponents: [
        WorkCreateDialogComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
