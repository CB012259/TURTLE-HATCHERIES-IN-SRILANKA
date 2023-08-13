
 var x=0;

var element1 = document.getElementById("value1");

element1.innerHTML = x;

function button1(){
element1.innerHTML = ++x;
document.getElementById("option1").innerHTML = "SL Adult : " + "("+x+")" ;
document.getElementById("alertqua").innerHTML="";

}
function button2(){
if (x > 0) { // x is positive
element1.innerHTML = --x;
document.getElementById("option1").innerHTML = "SL Adult : " + "("+x+")";

if(x == 0){
  document.getElementById("option1").innerHTML = "";
 
  
} 


}
else {
element1.innerHTML = x; // do nothing if x is zero or negative
}

}



var y=0;
var element2 = document.getElementById("value2");
element2.innerHTML = y;

function button3(){
element2.innerHTML = ++y;
document.getElementById("option2").innerHTML = "SL Child : " + "("+y+")" ;
document.getElementById("alertqua").innerHTML="";
}
function button4(){
  if (y > 0) { 
    element2.innerHTML = --y;
    document.getElementById("option2").innerHTML = "SL Child : " + "("+y+")";
    
    if(y == 0){
      document.getElementById("option2").innerHTML = ""; 
     
    } 
    
    
    }
    else {
    element2.innerHTML = y; 
    }
    

}

var z=0;
var element3 = document.getElementById("value3");
element3.innerHTML = z;

function button5(){
element3.innerHTML = ++z;
document.getElementById("option3").innerHTML = "Foreigner Adult: " + "("+z+")" ;
document.getElementById("alertqua").innerHTML="";
}
function button6(){
  if (z > 0) { 
    element3.innerHTML = --z;
    document.getElementById("option3").innerHTML = "Foreigner Adult : " + "("+z+")";
   
    if(z == 0){
      document.getElementById("option3").innerHTML = "";  
  
    } 
    
    
    }
    else {
    element3.innerHTML = z; 
    }
    

}

var a=0;
var element4 = document.getElementById("value4");
element4.innerHTML = a;

function button7(){
element4.innerHTML = ++a;
document.getElementById("option4").innerHTML = "Foreigner Child: " + "("+a+")" ;
document.getElementById("alertqua").innerHTML="";
}
function button8(){
  if (a > 0) { 
    element4.innerHTML = --a;
    document.getElementById("option4").innerHTML = "Foreigner Child : " + "("+a+")";
    
    if(a == 0){
      document.getElementById("option4").innerHTML = "";  
  
    } 
    
    
    }
    else {
    element4.innerHTML = a; 
    }
    
}


var b=0;
var element5 = document.getElementById("value5");
element5.innerHTML = b;

function button9(){
element5.innerHTML = ++b;
document.getElementById("option5").innerHTML = "Infant : " + "("+b+")" ;
document.getElementById("alertqua").innerHTML="";
}
function button10(){
  if (b > 0) { 
    element5.innerHTML = --b;
    document.getElementById("option5").innerHTML = "Infant : " + "("+b+")";
    if(b == 0){
      document.getElementById("option5").innerHTML = ""; 
     

    } 
    
    
    }
    else {
    element5.innerHTML = b;
   
    }
    
} 


function handle() {
  let aa = x * 10;
  let bb= y * 5;
  let cc= z * 4;
  let dd= a * 2;
  let ee= b*0;
  document.getElementById("alertche").innerHTML="";
 return {aa, bb, cc, dd, ee}; // Return the values

 
}

function handles() {
  let ff = x * 13;
  let gg = y * 8;
  let hh= z * 6;
  let ii = a* 3;
  let jj = b * 0;
  document.getElementById("alertche").innerHTML="";
  return {ff, gg, hh, ii , jj}; 
}

function calculateTotal(checkboxes) {
  let total = 0;
  let aa_ff = 0; 
  let bb_gg = 0; 
  let cc_hh = 0; 
  let dd_ii = 0; 
  let ee_jj = 0;
  for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          total += Object.values(checkboxes[i].func()).reduce((a, b) => a + b); 
          aa_ff += checkboxes[i].func().aa || checkboxes[i].func().ff || 0; 
          bb_gg += checkboxes[i].func().bb || checkboxes[i].func().gg || 0;
          cc_hh += checkboxes[i].func().cc || checkboxes[i].func().hh || 0; 
          dd_ii += checkboxes[i].func().dd || checkboxes[i].func().ii || 0; 
          document.getElementById("alertche").innerHTML="";
        
      }
      
    
  }
  return {total, aa_ff, bb_gg, cc_hh, dd_ii ,ee_jj}; // Return the totals
  
}

$( function() {
  $( "#booking-date" ).datepicker({
      minDate: 0
  });
} );
$("#reset").click(function() {
  $("#booking-date").datepicker("setDate", null);
});



// Get the date 
var dateInput = document.getElementById('booking-date');
// Set the minimum 
// var today = new Date().toISOString().split('T')[0];
 //dateInput.setAttribute('min', today);

 //var dates = document.getElementById('dates');
 //dateInput.addEventListener('change', function() {
//  selected date
  

 //});

 var callClicked = false;

function call() {
 var date = dateInput.value;
 localStorage.setItem('selectedDate', date);
console.log(date);


document.getElementById("date").innerHTML = date || today ;
  const checkboxes = [
      { checked: document.getElementById("1").checked, func: handle },
      { checked: document.getElementById("2").checked, func: handle },
      { checked: document.getElementById("3").checked, func: handle },
      { checked: document.getElementById("4").checked, func: handles },
      { checked: document.getElementById("5").checked, func: handles },
      { checked: document.getElementById("6").checked, func: handles},
      { checked: document.getElementById("7").checked, func: handle },
      { checked: document.getElementById("8").checked, func: handle },
      { checked: document.getElementById("9").checked, func: handles},
      { checked: document.getElementById("10").checked, func: handles },
      { checked: document.getElementById("11").checked, func: handles },
      
    
  ];

  const totals = calculateTotal(checkboxes); 
 
  
  
document.getElementById("total").innerHTML= totals.total + "$" || "";
document.getElementById("option1t").innerHTML= totals.aa_ff + "$" || "";
document.getElementById("option2t").innerHTML= totals.bb_gg + "$" || "";
document.getElementById("option3t").innerHTML= totals.cc_hh + "$" || "";
document.getElementById("option4t").innerHTML= totals.dd_ii + "$" || "";
//document.getElementById("option5t").innerHTML= totals.ee_jj || "" ;



   


     let summary = "";
     let start = null;
     let end = null;
     const times = [
       "7am - 8am",
       "8am - 9am",
       "9am - 10am",
       "10am - 11am",
       "11am - 12pm",
       "12pm - 1pm",
       "1pm - 2pm",
       "2pm - 3pm",
       "3pm - 4pm",
       "4pm - 5pm",
       "5pm - 6pm"
     ];
     
     for (let i = 1; i <= times.length; i++) {
       if (document.getElementById(i.toString()).checked) {
         if (start === null) {
           start = i;
         }
         end = i;
       } else {
         if (start !== null) {
           if (start === end) {
             summary += times[start-1] + ", ";
           } else {
             summary += times[start-1].split(" - ")[0] + " - " + times[end-1].split(" - ")[1] + ", ";
           }
           start = null;
           end = null;
         }
       }
     }
     
     if (start !== null) {
       if (start === end) {
         summary += times[start-1] + ", ";
       } else {
         summary += times[start-1].split(" - ")[0] + " - " + times[end-1].split(" - ")[1] + ", ";
       }
     }
     
     document.getElementById("summary").innerHTML = summary;
   


     let handleCount = 0;
let handlesCount = 0;


for (let checkbox of checkboxes) {
  if (checkbox.checked) {
    if (checkbox.func === handle) {
      handleCount++;
    } else if (checkbox.func === handles) {
      handlesCount++;
    }
  }
// Display the counts 
console.log("handle() was clicked " + handleCount + " times");
console.log("handles() was clicked " + handlesCount + " times");


var totaldur= handleCount + handlesCount;

document.getElementById("summarydur").innerHTML=totaldur+ "  " +  "( Normal Hours:"+ handleCount + ":" + "Peak hours:"+ handlesCount +")";



}

 // date is selected
 const selectedDate = document.getElementById('booking-date').value;
 if (selectedDate === '') {
  document.getElementById("alertdate").innerHTML="Please select a date.";
  // alert('Please select a date.');
   return;
 }

  // at least one ticket quantity is greater than 0
  const ticketValues = [
    Number(document.getElementById('value1').textContent),
    Number(document.getElementById('value2').textContent),
    Number(document.getElementById('value3').textContent),
    Number(document.getElementById('value4').textContent),
    Number(document.getElementById('value5').textContent)
  ];
  const totalTickets = ticketValues.reduce((acc, value) => acc + value, 0);
  if (totalTickets === 0) {
   document.getElementById("alertqua").innerHTML="Please select at least one ticket quantity.";
    //alert('Please select at least one ticket quantity.');
    return;
  }
 
 
 
 
 // at least one timeslot is selected
 const timeslots = document.querySelectorAll('.checkbox');
 let isTimeslotSelected = false;
 for (const timeslot of timeslots) {
   if (timeslot.checked) {
     isTimeslotSelected = true;
     break;
   }
 }
 if (!isTimeslotSelected) {
  document.getElementById("alertche").innerHTML="Please select at least one timeslot.";
  // alert('Please select at least one timeslot.');
   return;
 }



 





localStorage.setItem("summary", summary);
localStorage.setItem("summarydur", totaldur+ "  " +  "( Normal Hours:"+handleCount + ":" + "Peak hours:"+handlesCount +")");

localStorage.setItem("total",totals.total);
localStorage.setItem("option1t",totals.aa_ff);
localStorage.setItem("option2t",totals.bb_gg);
localStorage.setItem("option3t",totals.cc_hh);
localStorage.setItem("option4t",totals.dd_ii);
localStorage.setItem("option5t",totals.ee_jj);


localStorage.setItem("option1","SL Adult : " + "("+x+")" );
localStorage.setItem("option2","SL Child : " + "("+y+")");
localStorage.setItem("option3","Foreigner Adult: " + "("+z+")");
localStorage.setItem("option4","Foreigner Adult: " + "("+z+")");
localStorage.setItem("option5","Infant : " + "("+b+")");
 
 
 callClicked = true;
    // Enable the second button when the first button is clicked
    document.getElementById("Submit").removeAttribute("disabled");

    document.getElementById("alertupdate").innerHTML=""
  

}

 
    
function Reset(){

  x = 0;
  y = 0;
  z = 0;
  a = 0;
  b = 0;
  element1.innerHTML = x;
  element2.innerHTML = y;
  element3.innerHTML = z;
  element4.innerHTML = a;
  element5.innerHTML = b;

  
    document.getElementById("value1").innerHTML = 0;
    document.getElementById("value2").innerHTML = 0;
    document.getElementById("value3").innerHTML = 0;
    document.getElementById("value4").innerHTML = 0;
    document.getElementById("value5").innerHTML = 0;


    document.getElementById("summary").innerHTML = "";
    document.getElementById("option1").innerHTML = "";
    document.getElementById("option2").innerHTML = "";
    document.getElementById("option3").innerHTML = "";
    document.getElementById("option4").innerHTML = "";
    document.getElementById("option5").innerHTML = "";

    document.getElementById("total").innerHTML= "";
document.getElementById("option1t").innerHTML= "";
document.getElementById("option2t").innerHTML= "";
document.getElementById("option3t").innerHTML= "";
document.getElementById("option4t").innerHTML= "";
document.getElementById("option5t").innerHTML= "";

document.getElementById("alertdate").innerHTML="";
document.getElementById("alertche").innerHTML="";
document.getElementById("alertqua").innerHTML="";

localStorage.setItem('selectedDate', "");
localStorage.setItem("summary", "");
localStorage.setItem("summarydur", "");

localStorage.setItem("total","");
localStorage.setItem("option1t","");
localStorage.setItem("option2t","");
localStorage.setItem("option3t","");
localStorage.setItem("option4t","");
localStorage.setItem("option5t","");


localStorage.setItem("option1","");
localStorage.setItem("option2","");
localStorage.setItem("option3","");
localStorage.setItem("option4","");
localStorage.setItem("option5","");



 $.datepicker._clearDate($("booking-date"));


document.getElementById("summarydur").innerHTML="";

document.getElementById("checkcheck").innerHTML="";
document.getElementById("alertupdate").innerHTML="";



document.getElementById("alertdate").innerHTML="";
document.getElementById("alertche").innerHTML="";
document.getElementById("alertqua").innerHTML="";
         



    document.getElementById("total").innerHTML = "";
    document.querySelectorAll(".checkbox").forEach(checkbox => {

        checkbox.checked = false;
      });
return x=0,y=0,z=0,a=0,b=0;


  }

 
 
  function ticketsub() {
     

     // date is selected
     const selectedDate = document.getElementById('booking-date').value;
     if (selectedDate === '') {
      document.getElementById("alertdate").innerHTML="Please select a date.";
      // alert('Please select a date.');
       return;
     }
   
     
     // at least one ticket quantity is greater than 0
     const ticketValues = [
      Number(document.getElementById('value1').textContent),
      Number(document.getElementById('value2').textContent),
      Number(document.getElementById('value3').textContent),
      Number(document.getElementById('value4').textContent),
      Number(document.getElementById('value5').textContent)
    ];
    const totalTickets = ticketValues.reduce((acc, value) => acc + value, 0);
    if (totalTickets === 0) {
     document.getElementById("alertqua").innerHTML="Please select at least one ticket quantity.";
      //alert('Please select at least one ticket quantity.');
      return;
    }


     
     
     
     
     //  at least one timeslot is selected
     const timeslots = document.querySelectorAll('.checkbox');
     let isTimeslotSelected = false;
     for (const timeslot of timeslots) {
       if (timeslot.checked) {
         isTimeslotSelected = true;
         break;
       }
     }
     if (!isTimeslotSelected) {
      document.getElementById("alertche").innerHTML="Please select at least one timeslot.";
      // alert('Please select at least one timeslot.');
       return;
     }
   
     
    if (callClicked) {
     
    window.location.href="detail.html"; 

    } else {
     document.getElementById("alertupdate").innerHTML="First, Click the Update Button and Check the Details that you input";
    }
    
   
  }
  
 
 