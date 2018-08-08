const Rx = require('rxjs')
// const Observable = require('rxjs/Observable')
// require('rxjs/add/operator/map');

const source$ = Rx.Observable.create( observer => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
})
source$.map( x => x*x).subscribe(console.log)