// 不使用打补丁的方式引入range操作符
import {range} from 'rxjs/observable/range'
import {Observable} from 'rxjs/Observable'

// 第一个参数是数字序列开始的数字  第二个参数是范围（总数）
const source$ = range(2,5)
source$.subscribe(console.log)