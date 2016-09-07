import { Injectable }       from '@angular/core';
import { NgRedux }          from 'ng2-redux';
import { IAppState }        from '../index';

import { RandomNumberService } from '../services/random-number.service';


@Injectable()
export class CounterActions {
    
  constructor (
    private ngRedux: NgRedux<IAppState>,
    private randomNumberService: RandomNumberService) {}

  static INCREMENT_COUNTER: string = 'INCREMENT_COUNTER';
  static DECREMENT_COUNTER: string = 'DECREMENT_COUNTER';
  static RANDOMIZE_COUNTER: string = 'RANDOMIZE_COUNTER';

  increment(): void {
    this.ngRedux.dispatch({ type: CounterActions.INCREMENT_COUNTER });
  }

  decrement(): void {
    this.ngRedux.dispatch({ type: CounterActions.DECREMENT_COUNTER });
  }
  
  randomize(): void {
    this.ngRedux.dispatch({
      type: CounterActions.RANDOMIZE_COUNTER,
      payload: this.randomNumberService.pick()
    });
  }
}