// import Rx from 'rxjs'
import "babel-polyfill";
import {Observable} from 'rxjs/Observable'
import {map} from 'rxjs/add/operator/map'
import {of} from  'rxjs/Observable/of'

// const onsubscribe = observer => {
//     observer.next(1)
//     observer.next(2)
//     observer.next(3)
// }
// const source$ = new Observable(onsubscribe)
const source$ = of(3,4,6)

source$.map(x => x**2).subscribe(
    value => console.log(value),
    null,
    () => console.log('complete')
)