import {Component } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent{
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 59.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location:{
      address:'1057 DT',
      city: 'London',
      country: 'England'
    }
  }
}
