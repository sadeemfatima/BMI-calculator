 const form=document.querySelector("#form")
 

        
 form.addEventListener("submit",function(e){
    e.preventDefault()
    let height=document.querySelector("#h").value
    let weight=document.querySelector("#w").value
       let result= document.querySelector("#result")

       let newHeight= parseFloat(height)
       let newWeight= parseFloat(weight)

       if (height === "" || newHeight < 0 || isNaN(newHeight)){

        result.innerHTML= `please give a valid height ${newHeight}`;   
       }
       
       
       else if (weight ==='' || newWeight < 0 || isNaN(newWeight)){
        
        result.innerHTML= `please give a valid weight ${newWeight}`;   
       }
        
        else {
            const bmi= (newWeight/ ((newHeight*newHeight)/10000)).toFixed(2)
            result.innerHTML= `<span> BMI = ${bmi}</span>`
        }


       }

    
 )

