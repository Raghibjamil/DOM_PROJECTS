let form=document.querySelector('form');

form.addEventListener('submit' , function (event)
{
  event.preventDefault();
      let height=parseInt(document.querySelector('#height').value);
      let weight=parseInt(document.querySelector('#weight').value);
      let results=document.querySelector('#results');
      let conclusion=document.querySelector('#conclusion')

      if(height=== '' || height <0 || isNaN(height))
      {
        results.innerHTML=`Please give a valid height ${height}`
      }
      else if(weight==='' || weight <0 || isNaN(weight))
      {
        results.innerHTML=`Please give a valid weight ${weight}`;
      }
      else
      {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML=`<span> BMI =  ${bmi} kg/m2 </span>`

        if(bmi<18.6)
        {
          conclusion.innerHTML=`Under Weight = ${bmi} kg/m2`
        }
        else if(bmi < 24.9)
        {
          conclusion.innerHTML=`Normal Range = ${bmi} kg/m2`
        }
        else{
          conclusion.innerHTML=`Overweight = ${bmi} kg/m2`
        }
      }

})