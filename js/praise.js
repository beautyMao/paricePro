class PraiseButton {
    constructor(startNum, maxNum,dom){
        this.startNum = startNum;
        this.maxNum = maxNum;
        this.dom=document.getElementById(dom);
    }
    action(){
        this.dom.onclick=()=>{
          if(this.maxNum >this.startNum){
             this.startNum = add(this.startNum);
             alert(`点赞了${this.startNum}次`)
         }else{
            this.startNum = 0;
            alert("超过次数了")
        }
    }
}
}
class Thumb extends PraiseButton{
    constructor(startNum, maxNum,dom){
        super(startNum, maxNum,dom);//es6一定要写 不然报错
    }
}


export default {Thumb};

//其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，
//自然default只能有一个值，所以一个文件内不能有多个export default。
//本质上，a.js文件的export default输出一个叫做default的变量，
//然后系统允许你为它取任意名字。
//所以可以为import的模块起任何变量名，且不需要用大括号包含

