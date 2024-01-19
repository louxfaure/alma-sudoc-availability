import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, getTranslateModule, AlertModule } from '@exlibris/exl-cloudapp-angular-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { SudocSearchService } from './sudoc.service';
import { MultiwhereService } from './multiwhere.service';
import { ErrorComponent } from './static/error.component';
import { HelpComponent } from './help/help.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NblocsudocComponent } from './nblocsudoc/nblocsudoc.component';
import { SynchrosudocComponent } from './synchrosudoc/synchrosudoc.component';


export function getToastrModule() {
  return ToastrModule.forRoot({
    positionClass: 'toast-top-right',
    timeOut: 2000
  });
}

@NgModule({
  declarations: [	
    AppComponent,
    MainComponent,
    HelpComponent,
    ConfigurationComponent,
    ErrorComponent,
    NblocsudocComponent,
    SynchrosudocComponent
   ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    getTranslateModule(),
    AlertModule,
    FormsModule,
    ReactiveFormsModule,
    getToastrModule()
  ],
  providers: [
    SudocSearchService,
    MultiwhereService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
