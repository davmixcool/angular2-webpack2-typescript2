import { NgModule }                             from '@angular/core';
import { BrowserModule  }                       from '@angular/platform-browser';

// Application modules
import { SharedModule }                         from './shared/shared.module';
import { StoreModule }                          from './store/store.module';

// App level component
import { AppComponent }                         from './app.component';
import { StartComponent }                       from './start.component';
import { ReduxComponent }                       from './reduxtest/redux.component';

// Top level routing
import { routing, routingProviders }            from './app.routes';


@NgModule({

     imports: [
        BrowserModule,
        SharedModule.forRoot(),
        StoreModule.forRoot(),
        routing
    ],

    declarations: [
        AppComponent,
        StartComponent,
        ReduxComponent
    ],

     providers: [
         routingProviders
     ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}