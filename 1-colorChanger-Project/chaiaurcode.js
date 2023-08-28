let button=document.querySelectorAll('.button')
let body=document.querySelector('body');
button.forEach((item)=>
{
    item.addEventListener('click',function (event)
    {
       if(event.target.id=='grey')
       {
            body.style.backgroundColor=event.target.id;
            
       }
       if(event.target.id=='white')
       {
        body.style.background='red'
       }
       if(event.target.id=='blue')
       {
        body.style.background='blue'
       }
       if(event.target.id=='yellow')
       {
        body.style.backgroundColor='yellow'
       }
    })
})