const Rx = require('rxjs');
require()

const source$ = Rx.Observable.create( observer => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.next(5)
    observer.next(6)
})

const result$ = source$.filter( x => x%2 == 0).map(x => x * 10)
result$.subscribe(console.log)