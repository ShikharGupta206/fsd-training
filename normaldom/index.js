const r=document.getElementById("root");
console.log(r)

const b=document.getElementById("btn");
const h2=document.createElement('h2');
const img=document.createElement('img');
const div=document.createElement('div');

function showdata(){
    try{
    h2.innerText="fucntion.com";
    h2.style.color='red';
    h2.style.backgroundColor='cyan';
    img.src='';
    img.setAttribute('height',200);
    img.setAttribute('width',100);
    r.appendChild(img);
    r.appendChild(h2);
    r.appendChild(div);
    }
    catch(e){
        console.log(e);
    }
    finally{
        alert("Works");
        document.body.removeChild(b);
    }
    
}

b.addEventListener('click',showdata)