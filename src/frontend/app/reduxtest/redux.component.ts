import { Component, OnInit }    from '@angular/core';
import { NgRedux, select }      from 'ng2-redux';
import { Observable }           from 'rxjs/Observable'

import { CounterActions }       from '../store/actions/counter.actions';


@Component({
    selector: 'redux',
    template: require('./redux.html')
})
export class ReduxComponent implements OnInit {
    
    
    @select('counter') counter$: Observable<number>;
    

    constructor(
        public counterActions: CounterActions
    ) { }

    ngOnInit() {}
    
    public increment() {
        this.counterActions.increment();    
    }
    
     public decrement() {
        this.counterActions.decrement();
    }
    
    public randomize() {
        this.counterActions.randomize();  
    }
}