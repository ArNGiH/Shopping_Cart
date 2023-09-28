const list=document.querySelector('ul')
const input=document.querySelector('input')
const button=document.querySelector('button')


button.addEventListener('click',function(){
    const myitem=input.value;
    input.value='';

    const listitem=document.createElement('li')
    const listtext=document.createElement('span')
    const listbutton=document.createElement('button')

    listitem.appendChild(listtext)
    listitem.appendChild(listbutton)
    listtext.textContent=myitem
    listbutton.textContent='Delete'

    list.appendChild(listitem)

    listbutton.addEventListener('click',()=>{
        list.removeChild(listitem);
        
    });

    input.focus();


    
});