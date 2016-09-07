/* Create a module to nicely encapsulate our store */


// Modules
import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }                       from '@angular/common';
import { NgReduxModule }                      from 'ng2-redux';


// Services
import { RandomNumberService }                from './services/random-number.service';

// Actions
import { CounterActions }                     from './actions/counter.actions';



@NgModule({

  imports: [
    CommonModule,
    NgReduxModule
  ]

})

export class StoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StoreModule,
      providers: [
          RandomNumberService,
          CounterActions   
      ]

    };
  }
}
