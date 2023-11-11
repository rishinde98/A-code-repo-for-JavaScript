const form  = document.querySelector('#bmiform');


form.addEventListener('submit', function(e){

    e.preventDefault();
    const height = parseInt(form.querySelector('#height').value);
    console.log(height);
    const weight = parseInt(form.querySelector('#weight').value);
    console.log(weight);

    const result = document.querySelector('#results');
    
    console.log(result);


    if(height==='' || height<=0 || isNaN(height))
    {
        result.textContent = `Please provide valid height : ${height}`
    }
   

    else  if(weight==='' || weight<=0 || isNaN(weight))
    {
        result.textContent = `Please provide valid weight : ${weight}`
    }
    else{

        const bmi =(weight/((height*height)/10000)).toFixed(2);
        console.log(bmi);
        result.innerHTML = `<span>${bmi}</span>`; 
    }
})