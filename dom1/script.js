function label(tagname,atrname,atrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(atrname,atrvalue);
    ele.innerHTML=content;
    return ele;
}

function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}

function inputs(tagname,atrname,atrvalue,atrname1,atrvalue1,atrname2,atrvalue2){
    var ele1 =document.createElement(tagname);
    ele1.setAttribute(atrname,atrvalue);
    ele1.setAttribute(atrname1,atrvalue1);
    ele1.setAttribute(atrname2,atrvalue2);
    return ele1;
}

var fname=label("label","for","Firstname","Firstname");
var br=linebreak("br");
var input=inputs("input","type","Firstname","name","Firstname","id","Firstname");
var br1=linebreak("br");
var br2=linebreak("br");

var Mname=label("label","for","Middlename","Middlename");
var br3=linebreak("br");
var input1=inputs("input","type","Middlename","name","Middlename","id","Middlename");
var br4=linebreak("br");
var br5=linebreak("br");

var lname=label("label","for","Lastname","Lastname");
var br6=linebreak("br");
var input2=inputs("input","type","Lastname","name","Lastname","id","Lastname");
var br7=linebreak("br");
var br8=linebreak("br");

var email=label("label","for","Email","Email");
var br9=linebreak("br");
var input3=inputs("input","type","Email","name","Email","id","Email");
var br10=linebreak("br");
var br11=linebreak("br");

var pass=label("label","for","Password","Password");
var br12=linebreak("br");
var input4=inputs("input","type","Password","name","Password","id","Password");
var br13=linebreak("br");
var br14=linebreak("br");
document.body.append(fname,br,input,br1,br2,Mname,br3,input1,br4,br5,lname,br6,input2,br7,br8,email,br9,input3,br10,br11,pass,br12,input4,br13,br14);