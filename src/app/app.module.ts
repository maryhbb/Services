import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    UserFormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
