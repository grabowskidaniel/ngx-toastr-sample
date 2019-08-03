import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

const declarations = [AppComponent];

const imports = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  ToastrModule.forRoot({
    maxOpened: 1,
    preventDuplicates: true
  })
];

const providers: any = [];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  providers: [...providers],
  bootstrap: [AppComponent]
})
export class AppModule {}
