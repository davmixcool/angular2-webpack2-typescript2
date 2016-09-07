import { Component }                    from '@angular/core';
import { Router }                       from '@angular/router';

// Store initialization
import { NgRedux, DevToolsExtension }        from 'ng2-redux';
import { IAppState, rootReducer, enhancers } from './store/index';
const createLogger = require('redux-logger');

@Component({
    selector: 'app',
    template: require('./app.html')
})

export class AppComponent  {

    public menu: Object[] = [
        { name: 'Redux' , icon: 'assignment ind', link: '/redux'}  
    ];

    constructor( 
        private router: Router, 
        private ngRedux: NgRedux<IAppState>,
        private devTool: DevToolsExtension) {
            
        
            // Store configuration
            this.ngRedux.configureStore(
                rootReducer,
                {},
                [ createLogger() ],                                                 // Plugins
                [ ...enhancers, devTool.isEnabled() ? devTool.enhancer() : f => f]  // Enhancers
            );    
        }


    public navigate( link: string) {
        this.router.navigate([link]);
        return false;
    }
}
