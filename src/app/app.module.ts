import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MaterialIncludesModule } from './material-includes';

import { DataService} from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialIncludesModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
