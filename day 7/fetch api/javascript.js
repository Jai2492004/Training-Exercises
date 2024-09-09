document.getElementById("search").addEventListener('click',weather);
async function weather()
{
    
    var city= document.getElementById("city").value;
    var data= document.getElementById("error");
    data.textContent="";
    document.getElementById("condition").textContent="";
    document.getElementById("information1").textContent="";

    if(!city)
    {
        data.innerHTML='Please Enter a city';
    }
    try{
        const url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=KPS9UTV6FX3SC6A8FAES3UGE5&unitGroup=metric`;
       var response =await fetch(url);
       var weatherData=await response.json();
       console.log(weatherData);
       if(weatherData.length==0||!weatherData)
       {
        data.innerHTML='City not Found';
        return;
       }
       

       const table =  document.getElementById("condition");

         var cityName=weatherData.address;
         var temperature=weatherData.currentConditions.temp+"°C";
         var humidity=weatherData.currentConditions.humidity+"%";    


         var tablerow3=document.createElement("tr");
         var tablehead3=document.createElement("th");
         var tabledata3=document.createElement("td");


         tablehead3.textContent="City Name:";
         tabledata3.textContent=`${cityName}`;

         tablerow3.appendChild(tablehead3);
         tablerow3.appendChild(tabledata3);
         table.appendChild(tablerow3);


         var tablerow1=document.createElement("tr");
         var tablehead1=document.createElement("th");
         var tabledata1=document.createElement("td");


         tablehead1.textContent="Temprature:";
         tabledata1.textContent=`${temperature}`;

         tablerow1.appendChild(tablehead1);
         tablerow1.appendChild(tabledata1);
         table.appendChild(tablerow1);


         var tablerow2=document.createElement("tr");
         var tablehead2=document.createElement("th");
         var tabledata2=document.createElement("td");


         tablehead2.textContent="Humidity:";
         tabledata2.textContent=`${humidity}`;

         tablerow2.appendChild(tablehead2);
         tablerow2.appendChild(tabledata2);
         table.appendChild(tablerow2);


         var lat=weatherData.latitude;
         var lon=weatherData.longitude;
    const url1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6ee466e1c7ae158909df3a65a2d34b80`;
    var response1 =await fetch(url1);
    var weatherData1=await response1.json();
    console.log(weatherData1);
    var icon=weatherData1.weather[0].icon;
    
    var image=document.createElement("img");
    image.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    var iconText=document.createElement("p");
    iconText.textContent="Weather Icon:";
    document.getElementById("information1").appendChild(iconText);
    document.getElementById("information1").appendChild(image);
    }
    catch(error)
    {
       data.innerHTML='Data not fetched';
        return;
    }
}