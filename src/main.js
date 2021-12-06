let string = `/*你好，我是一名前端新人
*今天我要做一个旋转的太极图案
*准备一个div
**/
#div1{
    width:200px;
    height:200px;
    border:1px solid red;
}
/*接下来，我要把它变成一个八卦图
*注意看好了
*首先，把div变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none
}
/*八卦图是阴阳形成的
*添加一黑一白效果
**/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*添加阴阳小球*/
#div1::before{
    width:100px;
    height: 100px;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
/*最后
*给八卦图一个动画效果
*让它旋转起来
**/
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

#div1{
    animation: spin 8s linear infinite;
}
`;
let demo =document.querySelector('#demo');
let style = document.querySelector('#style')
let string2= ``;
let n = 0;
let step = () => {
    setTimeout(() => {
        if (string[n] === `\n`){
            string2 +='<br>';
        }else if(string[n]=== ' '){
            string2 += '&nbsp';
        }else{
            string2 += string[n]
        }
        demo.innerHTML = string2;
        style.innerHTML= string.substring(0,n);
        if (n < string.length-1){
            n +=1;
            step();
        }
       window.scrollTo(0,99999);
        demo.scrollTo(0,99999);
    },50)
}
step();


