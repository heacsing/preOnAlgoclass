function add(a,b){
    let res = Array();
    let a_ary=a.split('').reverse();
    let b_ary=b.split('').reverse();
    let flag=0,i;
    for(i=0;i<a_ary.length && i<b_ary.length;i++){
        let e=parseInt(a_ary[i])+parseInt(b_ary[i]);
        if(e+flag>=10){
            e=e+flag-10;
            res.push(e.toString());
            flag=1;
        }else{
            e=e+flag;
            res.push(e.toString())
            flag=0;
        }
    }
    if(i===a_ary.length&&i<b_ary.length){
        if(flag===1){
            b_ary[i]=(parseInt(b_ary[i])+1).toString()
        }
        while(i<=b_ary.length){
            res.push(b_ary[i++]);
        }
    }else if(i===b_ary.length&&i<a_ary.length){
        if(flag===1){
            a_ary[i]=(parseInt(b_ary[i])+1).toString();
        }
        while(i<=a_ary.length){
            res.push(a_ary[i++])
        }
    }else if(i===a_ary.length&&i===b_ary.length){
        if(flag===1){
            res.push("1");
        }
    }
    return res.reverse().join().replace(/,/g,'');
}
function recursion(c,x,y){
    if (c === 0) {
        return x
    }
    return recursion(--c, y, add(x, y));
}
function trampoline(f){
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}
function calcu(){
    const count=parseInt(document.getElementById("number").value);
    const num=document.getElementById("display");
    num.innerText=trampoline(recursion(count,"0","1"))
    document.getElementById("display_wrapper").style.setProperty("overflow-y","scroll")
}