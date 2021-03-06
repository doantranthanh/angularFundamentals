import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/error-404.component';
import { EventRouterActivator } from './events/event-details/event-router-activator.service';
import { EventListResolver } from './events/events-list-resolver.service';

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
    ],
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    providers: [
        EventService,
        ToastrService,
        EventRouterActivator,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        EventListResolver,
    ],
    bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm(
            'You have not saved this event, do you really want to cancle?'
        );
    }
    return true;
}
