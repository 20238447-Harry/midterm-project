import { Routes } from '@angular/router';

import { HomeComponent } from './comps/home/home.component';
import { InterpolationComponent } from './comps/interpolation/interpolation.component';
import { PropertyBindingComponent } from './comps/property-binding/property-binding.component';
import { EventBindingComponent } from './comps/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './comps/two-way-binding/two-way-binding.component';

export const routes: Routes = [

{ path: '', component: HomeComponent },
{ path: 'interpolation', component: InterpolationComponent },
{ path: 'property-binding', component: PropertyBindingComponent },
{ path: 'event-binding', component: EventBindingComponent },
{ path: 'two-way-binding', component: TwoWayBindingComponent }

];