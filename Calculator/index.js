

let str="";
let c=0; 
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) =>{
  button.addEventListener('click', function (e){
    if(e.target.innerHTML == '='){
      c=0;
      let l=str.length;
      while(c<l){
        if(str[c] == '%'){
          break;
        }
        c++;  
    }
    if(str[c] == '%'){
      let a=str.slice(0,c);
      console.log(a);
      let b=str.slice(c+1,l);
      let r= (parseInt(a) / parseInt(b))*100;
      str=r.toString();
      document.querySelector('input').value=str;
    }
    else{
      str=eval(str);
      document.querySelector('input').value=str; //.toFixed(5);
    }
    }
    else if(e.target.innerHTML == 'AC'){
      str="";
      document.querySelector('input').value=str;
    }
    else if(e.target.innerHTML == '+/-'){
      let s=parseInt(str);
      s=(-1)*s;
      str=s.toString();
      document.querySelector('input').value=str;
    }
   
    else {
      str=str+e.target.innerHTML;
      document.querySelector('input').value=str;

    }
  })

})


