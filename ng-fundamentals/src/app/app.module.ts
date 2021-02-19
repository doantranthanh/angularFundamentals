import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbail.component";
import { NavBarComponent } from "./nav/navbar.component";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
