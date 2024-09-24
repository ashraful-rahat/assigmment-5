





// 






function toggleButtonStyles() {
    const historyButton = document.getElementById('history-button');
    const donateButton = document.getElementById('donate-id');
    historyButton.classList.add("bg-green-500", "hover:bg-green-500","hidden");
    donateButton.classList.remove("bg-green-500", "hover:bg-green-500");

}



function toggleDonateButtonStyles() {
    const donateButton = document.getElementById('donate-id');
    const historyButton = document.getElementById('history-button');
    document.getElementById('donation-id-from').classList.remove('hidden')
    donateButton.classList.add("bg-green-500", "hover:bg-green-500");
    historyButton.classList.remove("bg-green-500", "hover:bg-green-500");
}




const donateButton1= document.getElementById('donation-id').addEventListener('click',function(){
    const donateAmount1 = parseFloat(document.getElementById('donation-id-1').value);
    if(donateAmount1 < 0){
        alert("Error: The value cannot be a negative number.");}

         const donationAmount = document.getElementById('donate-amount').innerHTML=donateAmount1;

         const mainBalance = parseFloat( document.getElementById('donate-amount-main').textContent);

         const finalValue = mainBalance - donationAmount;
 
        document.getElementById('donate-amount-main').innerHTML = finalValue; 



        const donateButton2= document.getElementById('donation-id-button-2').addEventListener('click',function(){
            const donateAmount2 = parseFloat(document.getElementById('donation-id-2').value);
            if(donateAmount1 < 0){
                alert("Error: The value cannot be a negative number.");}
        
                 const donationAmount2 = document.getElementById('donate-amount-1').innerHTML=donateAmount2;
        
                 const mainBalance = parseFloat( document.getElementById('donate-amount-main').textContent);
        
                 const finalValue2 = mainBalance - donationAmount2;
         
                document.getElementById('donate-amount-main').innerHTML = finalValue2; 
        

       

     
            })
            const donateButton3= document.getElementById('donation-id-button-3').addEventListener('click',function(){
                const donateAmount3 = parseFloat(document.getElementById('donation-id-3').value);
                if(donateAmount3 < 0){
                    alert("Error: The value cannot be a negative number.");}
            
                     const donationAmount3 = document.getElementById('donate-amount-2').innerHTML=donateAmount3;
            
                     const mainBalance = parseFloat( document.getElementById('donate-amount-main').textContent);
            
                     const finalValue3 = mainBalance - donationAmount3;
             
                    document.getElementById('donate-amount-main').innerHTML = finalValue3; 
            
    
           
    
         
                })

            
})




function toggleButtonStyles() {
    const historyButton = document.getElementById('history-button');
    const donateButton = document.getElementById('donate-id');

    historyButton.classList.add("bg-green-500", "hover:bg-green-500");
    donateButton.classList.remove("bg-green-500", "hover:bg-green-500");
}




const historyButton1= document.getElementById('history-button').addEventListener('click',function(){
    document.getElementById('donation-id-from').classList.add('hidden')
   

    const donateAmount1 = parseFloat(document.getElementById('donation-id-1').value);

    const historyLine = document.getElementById('Donate-loction').innerText;

  

                const createDiv = document.createElement('div');
       createDiv.classList.add('shadow-lg', 'border', 'p-4', 'rounded-xl','space-y-2')
    const now = new Date();
        createDiv.innerHTML =`
        
     <P class="font-bold text-xl">${donateAmount1} Donate for Flood at
                    Noakhali, Bangladesh</>
     <p class="font-bold">${new Date().toLocaleDateString()}</p>
      <p class="font-bold">${new Date().toLocaleTimeString()}</p>
   
`;

const historyContainer = document.getElementById('history-container');
 

historyContainer.appendChild(createDiv);

})

