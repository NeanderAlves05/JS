var button = document.getElementById('button');
button.addEventListener("click", convert);

function convert(){
    //prendo le lunghezze inserite
    var menu1 = document.getElementById('menu1');
    var selected1 = menu1.options[menu1.selectedIndex].value;
    var menu2 = document.getElementById('menu2');
    var selected2 = menu2.options[menu2.selectedIndex].value;
    var inValue = document.getElementById('value1').value;
    let result=document.getElementById('value2');
    let options= ['centimetri','pollici','piedi','kilometri','metri'];
    let centimetri = [1,0.393701,0.0328084,0.00001,0.001];
    let metri=[100,0.393701,0.0328084,0.001,1];
    let kilometri=[0.00001,0.393701,0.0328084,1,0.001,1];

    switch(selected1){
        case '0':
            result=inValue*centimetri[selected2];
            console.log(result);
            document.getElementById('value2').innerText=result;
            break;
        case 'pollici':
            break;
        case 'kilometri':
            result=inValue*kilometri[selected2];
            console.log(result);
            document.getElementById('value2').innerText=result;
            break;
        case 'metri':
            result=inValue*metri[selected2];
            console.log(result);
            document.getElementById('value2').innerText=result;
            break;  
        case 'piedi':
            break;     
    }


}