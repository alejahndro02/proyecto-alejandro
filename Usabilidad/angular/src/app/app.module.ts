import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { ResoursesComponent } from './resourses/resourses.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    FeaturesComponent,
    DocsComponent,
    ResoursesComponent,
    EventsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
