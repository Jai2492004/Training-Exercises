function Calculate(){
    var pa=Number(document.getElementById("principal-amount").value)
   var time=Number(document.getElementById("time").value)
   let ri;
   if(pa>=500 && pa<1000)
   {
    ri=5;
   }
   else if(pa>=1000 && pa<=5000)
   {
    ri=7;
   }
   else if(pa>5000 && pa<=10000)
   {
    ri=10;
   }
   else{
    document.getElementById("error").textContent=`Principal amount must be between $500 and $10,000`;
    document.querySelector(".error").style.backgroundColor = "skyblue";
   }
   if(time>5)
   {
    ri+=2;
   }
   if(ri==5 || ri==7 || ri==9 || ri==10 ||ri==12)
   {
   var total=(pa*ri*time)/100;
   var tamount=total+pa;
   (document.getElementById("interest")).textContent=`Interest: ${total}`;
   (document.getElementById("ta")).textContent=`Total Amount: ${tamount}`;
   document.getElementById("rate-of-interset").value=ri+"%";
   document.getElementById("result").innerHTML=`<ul><li>Bonus Rate (for time > 5 years): ${time > 5 ? "2%" : "None"}</li></ul>`;
   }

}