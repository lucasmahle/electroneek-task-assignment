import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConsoleLogsComponent } from './components/console-logs/console-logs.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { RightPanelComponent } from './components/right-panel/right-panel.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { MaterialImporterModule } from './material-importer/material-importer.module';
import { CallOptionListComponent } from './components/call-option-list/call-option-list.component';
import { CallComponent } from './components/call/call.component';
import { CONFIG_TOKEN, Config } from './core/config/config';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsoleLogsComponent,
    LeftPanelComponent,
    RightPanelComponent,
    CanvasComponent,
    CallOptionListComponent,
    CallComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    MaterialImporterModule,
    ScrollingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: CONFIG_TOKEN,
      useValue: Config
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
