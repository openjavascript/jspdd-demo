
import JSPDD from 'jspdd'; //导入 jspdd

    //定义测试的原始数据
let srcData = { a: 1 }      
    //定义测试的变更数据
    , newData = { b: 2 }
    ;

let jspdd = new JSPDD( srcData, newData );

//从原始数据和变更数据，生成数据字典
jspdd.descData = JSPDD.generatorDict( JSON.parse( JSON.stringify( srcData ) ), newData );

jspdd.userName   = 'test username';   //设置用户名(可选)
jspdd.userId     = 'test userid';     //设置用户ID(可选) 
jspdd.alldata    = 1;                 //结果是否包含所有数据( 0:仅出现在字典的数据， 1:所有数据 )，默认1

//执行处理操作，并返回处理结果
let result = jspdd.proc();

//打印相关内容到控制台
console.log( 'jspdd:', jspdd );     
console.log( 'result:', result );
