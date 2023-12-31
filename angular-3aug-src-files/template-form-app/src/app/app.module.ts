import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
import { TestFormComponent } from './test-form/test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // TestComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
