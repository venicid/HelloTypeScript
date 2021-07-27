/***
 * 命名空间 namespace 
 * 解决重名问题，班里有个姑娘叫2个小芳
 */

// 定义命名空间
namespace SomeNameSpaceName{
    export interface ISomeInterfaceName{}   // 外部调用，需要添加export
    export class SomeClassName{}
}


export namespace A{
    export class People{}
    export interface Human{}
    export const height: number = 180
    export function main(): void {
    }
}


//  嵌套命名空间
namespace namespace_out{
    export namespace namespace_inner{
        export interface host{}
        export class Host{
            public getHostPrice(price: number): number{
                return price + 10
            }
        }
    }
}

//  用点（.）运算符访问嵌套命名空间的成员
let add = new namespace_out.namespace_inner.Host()

let res = add.getHostPrice(30)
console.log(res);


/***
 * 
 * 命名空间 vs 模块
 * 
 * 模块：1个完整功能的封装，对外提供。比如time模块
 *      1个模块可能包含多个命名空间
 * 
 * 命名空间：为了区分两个小明同学
 *        具有相似功能的代码，放到同一个空间进行管理，方便其他代码引用
 *         侧重于代码的复用
 *        
 */
