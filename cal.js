function sum(){
    //alert("Button test");
    let fn=parseFloat(document.getElementById("firstnum").value);
    let sn=parseFloat(document.getElementById("secondnum").value);
    document.getElementById("result").value=fn+sn;
  
}
function sub(){
    //alert("Button test");
    let fn=parseFloat(document.getElementById("firstnum").value);
    let sn=parseFloat(document.getElementById("secondnum").value);
    document.getElementById("result").value=fn-sn;
}
function multy(){
    //alert("Button test");
    let fn=parseFloat(document.getElementById("firstnum").value);
    let sn=parseFloat(document.getElementById("secondnum").value);
    document.getElementById("result").value=fn*sn;
}
function div(){
    //alert("Button test");
    let fn=parseFloat(document.getElementById("firstnum").value);
    let sn=parseFloat(document.getElementById("secondnum").value);
    document.getElementById("result").value=fn/sn;
}
function mod(){
    //alert("Button test");
    let fn=parseFloat(document.getElementById("firstnum").value);
    let sn=parseFloat(document.getElementById("secondnum").value);
    document.getElementById("result").value=fn%sn;
}

