import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JournalEntriesComponent } from './journal-entries/journal-entries.component';

// Add Angular Router to application
import { RouterModule, Routes } from '@angular/router';

// Add Angular Router to application
const routes: Routes = [
  { path: '', component: JournalEntriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JournalEntriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    // Add Angular Router to application
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
