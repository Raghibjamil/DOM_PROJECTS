const button=document.getElementById('btn');
const colorText=document.querySelector('.color');

const hex=[
    '0','1','3','4','5','6','7','8','9','A','B','C','D','E','F'
]

// add event listner on button

button.addEventListener('click' , ()=>{
    const hexcolor=generateHexColor();
    document.body.style.backgroundColor=hexcolor;
    colorText.innerText=hexcolor;
})

// function to generate hex color 

function generateHexColor(){
    let hexcolor='#';
    for(let i=0;i<6;i++)
    {
        hexcolor += hex[randomvalue()];
    }
    return hexcolor
}

function randomvalue()
{
    let randomNumber=Math.floor(Math.random()*hex.length)
    return randomNumber;

}