import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

const declarations = [AppComponent];

const imports = [BrowserModule, NgbButtonsModule];

const providers = [];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  providers: [...providers],
  bootstrap: [AppComponent]
})
export class AppModule {}
