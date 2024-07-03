// ?了解文件之前，最先了解的就应该是ArrayBuffer
// ?ArrayBuffer就是一个二进制数组 类似node中的Buffer
// ?在浏览器中，我们如果要对文件进行处理，可以得到文件的二进制Buffer形式来做处理
// *在js中有很多种二进制格式:ArrayBuffer,Unit8Array,Unit16Array,Unit32Array,Unit64Array
// *Int8Array,Int16Array，DataView,Blob,File等

// 1MB = 1024KB 1KB = 1024Byte 1byte = 8bit

// todo 1.基本的二进制对象ArrayBuffer --对固定长度的连续内存空间的引用
// todo 创建方式:
const buffer = new ArrayBuffer(16); //创建一个长度为16的buffer 并用0填充
console.log(buffer);
buffer.byteLength; //16
buffer.maxByteLength; //16
// !注意的是：ArrayBuffer不是某种数组，和Array没有任何共同之处，长度是固定的，无法增加或减少它的长度
// !它占用了内存中的空间，要访问单个字节并不是通过index索引，而是通过视图对象(View)

// ?那么，如何通过视图对象操作ArrayBuffer呢?
// !视图对象就是一副眼镜，本身不存储任何东西,透过它来看存储在ArrayBuffer中的字节
// ?包括:Unit8Array,Unit16Array,Unit32Array,Unit64Array,Int8Array,Int16Array，DataView等
// *8指的是一个字节8位，每个自己表示为0-255之间的单个数字
// *16指的是两个字节视为一个从0到65536之间的整数，即16为整数
// *32 4个字节
// ...以此类推
// *Unit表示的是无符号  Int表示的有符号 Float表示的是浮点数

// todo 2.通过视图操作ArrayBuffer
// 演示
const view = new Uint8Array(buffer);
console.log(view.BYTES_PER_ELEMENT);
// *buffer长度
console.log(view.length); //16
// *视图字节数
console.log(view.byteLength); //16
// *写入一个值
view[0] = 255;
// *遍历
for (const num of view) {
  console.log(num); //255 0 0 0 0 0 0 0 0 0 0 0 0 0 0
}

// todo 3.TypedArray 所有的这些视图给他们一个统称为TypedArray
// !注意，统称为TypedArray，并不是一个构造器
// *a.创建一个视图的方式1：直接传入一个buffer,byteOffset(默认为0，开始的偏移量) length(默认到最后)
new TypedArray(buffer, byteOffset, length);

// *b.传入一个object
new typedArray(object);

// *c.给定一个长度 创建一个视图，为长度为length的数创建视图
new TypedArray(length);

// *d.第四种：直接传入一个typedArray
new TypedArray(typedArray);
// 比如 new Unit16Array(unit8Array) 会把unit8array转化为unit16array

// *e.不传参数 创建一个长度为0的类型化数组
new TypedArray();

// !typedArray中包括两个属性 arr.buffer引用ArrayBuffer arr.byteLength 引用ArrayBUffer的长度
// !越界行为：比如unit8Array()最多255表示 如果为256则会去掉最高位，保留最低位 256===>0 257===>1

// ?typedArray的方法具有Array的常规方法：可以遍历:map,filter,reducer,find,forEach,等
// !但是没有concat,splice方法 这两个就是例外
// !还有两种其它的：比如：arr.set() arr.subarray(start,end) 创建

// todo 4.DataView是一个灵活的未类型化视图
// todo 前面的都是通过Unit,Int,Float已经类型化了，不灵活

// ?可以使用.getUnit8(i) .getUnit16(i)之类的访问方法访问数据 调用的时候选择而不是构造的时候
new DataView(buffer, [byteOffset], [byteLength]); //起始位置 视图节长度
