const content= document.querySelector('#input');


function sub()
{
    let value= parseInt(content.innerText)
    value-=1;
    content.innerText=value;
}
function add()
{
    let value= parseInt(content.innerText)
    value+=1;
    content.innerText=value;
}
content.textContent=value;
