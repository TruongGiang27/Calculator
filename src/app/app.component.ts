import { Component } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterAction from './actions/counter.actions';
import { Calcu } from './models/calcu.model';
// import { decrement, increment, reset } from '../app/actions/counter.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';



  count$: Observable<Calcu>;

  constructor(private store: Store<{ count: Calcu }>) {
    this.count$ = store.pipe(select(state => state.count));
  }
  seven(number:any) {
    this.store.dispatch(CounterAction.seven({number:number}));
  }


  // increment(){
  //   this.store.dispatch(increment());
  // }

  // decrement() {
  //   this.store.dispatch(decrement());
  // }

  // reset() {
  //   this.store.dispatch(reset());
  // }



}
