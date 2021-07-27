
// 模块使用1
import { Animal } from "./moduleA";

let dog = new Animal("jack");
dog.name = "jack"
let res = dog.show()

console.log(res);


// 使用模块2
import { PERSON as person } from "./moduleA";

let man = new person("tom")
man.name = "alex"
let info = man.showInfo()
console.log(info);

// * 不知道模块的名称, 用 * 号代替
import * as allMoudle from "./moduleA"



// 导入多个模块和对象
import * as host_module from "./moduleA"

let master = new host_module.Host()
master.ip = "192.168.23.22"
master.cmdb = allMoudle.CMDBURL.PRO
master.show()

console.log(master.ip +  master.cmdb);


// 使用默认导入
import Duck from "./moduleA";

console.log(Duck.name);



