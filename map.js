const Rx = require('rxjs')

const Observable = require('rxjs/Observable')

function map(project) {
  return Rx.Observable.create(observer => {
    const sub = this.subscribe(
      value => observer.next(project(value))
    )
    return {
      unsubscribe: () => {
        sub.unsubscribe()
      }
    }
  })
}

const source$ = Rx.Observable.of(1,2,3)

const operator = map.bind(source$)

const result$ = operator(x => x*2)

result$.subscribe(console.log)



// const randomStr = "hdjrwqpi";
// const isVowel = char => ["a", "e", "o", "i", "u"].includes(char);
// const containsVowel = str => [...str].some(isVowel);
//
// console.log(containsVowel(randomStr));