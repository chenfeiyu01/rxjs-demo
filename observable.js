const Rx = require('rxjs');

const Observable = require('rxjs/Observable').Observable;

// observable对象，代表一段时间内发生的一系列事件
const source$ = new Observable( observer => {
    let num = 0
    const timer = setInterval( () => {
        num++
        console.log(num)
        observer.next(num)
    }, 1000)
    return {
        unsubscribe: () => {
        }
    }
})

// source$通过subscribe订阅的内容就是观察者，它作为一个对象，必须拥有值为函数的next属性用来接收被推过来的数据
const subscription = source$.subscribe(
    item => console.log(item),
    null,
    () => console.log('数据流完结')
)
//
// setTimeout(() => {
//     subscription.unsubscribe()
// }, 3500)

// let liveStreaming$ = Rx.Observable.interval(1000).take(5);
//
// liveStreaming$.subscribe(
//     data => console.log('subscriber from first minute'),
//     err => console.log(err),
//     () => console.log('completed')
// )
//
// setTimeout(() => {
//     liveStreaming$.subscribe(
//         data => console.log('subscriber from 2nd minute'),
//         err => console.log(err),
//         () => console.log('completed')
// )
// },2000)

//