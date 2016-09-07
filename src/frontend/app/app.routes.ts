import { Routes, RouterModule }   from '@angular/router';

import { StartComponent } from './start.component';
import { ReduxComponent } from './reduxtest/redux.component';

const routes: Routes = [
     { path: '', component: StartComponent },
     { path: 'redux', component: ReduxComponent }
];

export const routing = RouterModule.forRoot(routes);
export const routingProviders: any[] = [];
