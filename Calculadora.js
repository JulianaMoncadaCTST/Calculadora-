function setresult(value){
    document.getElementById('result').innerHTML=value;

}
function getresult(){
    return(document.getElementById('result').innerHTML);

}
function add(key){
    var result=getresult();
    if (result!='0'|| isNaN(key)) setresult(result+key);
    else setresult(key);
}
function calc() {
    var result = eval(getResult()); 
    setResult(result);
}
function del() { 
    setResult(0);
}  