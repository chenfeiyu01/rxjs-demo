import {of} from 'rxjs/observable/of'
import {map,filter} from 'rxjs/operators'

const source$ = of(2,3,4)

const result$ = source$.pipe(
    filter(x => x%2 == 0),
    map(x => x*2)
)
.subscribe(console.log)