

function EmiCalculaor(){   
    
    let noOfMonths = $("#emiMonths").val();
    let interestRate =document.getElementById("InterestRate").value;
    let principalAmnt = $("#prncipleAmount").val();

    let emi = calculateEmi(principalAmnt,interestRate,noOfMonths);

     $("#result").html("EMI is:"+emi);

}

function calculateEmi(principalAmnt,interestRate,noOfMonths)
{
    
    let monthlyInterestRate = interestRate/(100 * 12);
    let monthlyInterest = (monthlyInterestRate*principalAmnt);  
    if(principalAmnt == "" && interestRate == "" && noOfMonths == "") {
        alert("Please enter a value.It shouldn't be blank!")
        throw Error ("/Please enter a value.It shouldn't be blank!/");  
    }
    if(isNaN(principalAmnt) || isNaN(interestRate) || isNaN(noOfMonths)) {
     alert("Value should be a number. Please enter a number")
    throw Error ("/Value should be a number!/");
}
    if(principalAmnt<=0 || interestRate<=0 || noOfMonths<=0) {
    alert("Please enter a positive value")
    throw Error("/Value shouldn't be 0 or negative value!/");
    }
// emi= (principalAmnt*interestRate/(12*100)*Math.pow(1+interestRate/(12*100),noOfMonths))/(Math.pow(1+interestRate/(12*100),noOfMonths)-1);  
        let emi = (principalAmnt * monthlyInterestRate * Math.pow(1+monthlyInterestRate,noOfMonths)) / (Math.pow(1+monthlyInterestRate,noOfMonths)-1);

       emi = emi.toFixed(2);
       return emi;
}