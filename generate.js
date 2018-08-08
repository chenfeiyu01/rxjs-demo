// 通过这个路径引入的是静态操作符
import {generate} from 'rxjs/observable/generate'
// 通过这个路径引入的是实例操作符
import {filter} from 'rxjs/operators'

const source$ = generate(
    2, // 初始的值
    value => value < 10, // 继续的条件
    value => value + 1, // 每次值的改变
    value => value**2 // 输出的结果值
)
.pipe(
    filter(value => value%2 != 0)
)
.subscribe(console.log)