
// 模块定义1
export class Animal{
    name: string;

    constructor(name: string){
        this.name = name
    }

    show(): string{
        return this.name
    }
}

// 模块定义2
class Person{
    name: string

    constructor(name: string){
        this.name = name
    }

    showInfo(): string{
        return this.name
    }
}

export {Person as PERSON}


// 定义多个模块or类型对象

enum CMDBURL{
    FAT = "fat-cmdb2-api",
    PRE = "pre-cmdb2-api",
    PRO = "pro-cmdb2-api",
}

class Host{
    ip: string;
    port: number;
    cmdb: CMDBURL

    constructor(ip: string = '1.1.1.1', port: number=3306){
        this.ip = ip
        this.port = port
        this.cmdb = CMDBURL.PRO
    }

    show(): string{
        return this.ip + this.port + this.cmdb
    }
}

export{CMDBURL,Host}

// 默认导出只有一个
enum Duck{
    name = "duck",
    age = 22
}
export default Duck

