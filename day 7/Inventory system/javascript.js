function product(productName,price,qty)
{
this.product_name=productName;
this.price=price;
this.qty=qty;
}
var n=0;
function add()
{
n++;
if(document.getElementById("name").value=="" || document.getElementById("price").value=="" || document.getElementById("qty").value=="")
{
    alert("Enter the valid input");
}
else{
var deltail1=document.getElementById("name").value;
var deltail2=document.getElementById("price").value;
var deltail3=document.getElementById("qty").value;
document.getElementById("name").value="";
document.getElementById("price").value="";
document.getElementById("qty").value="";
const product_details=new product(deltail1,deltail2,deltail3);


var tablerow=document.createElement("tr");
var tabledata1=document.createElement("td");
var tabledata2=document.createElement("td");
var tabledata3=document.createElement("td");

tabledata1.append(product_details.product_name);
tabledata2.append("$"+product_details.price);
tabledata3.append(product_details.qty);


var updateButton=document.createElement("button");
updateButton.textContent="Edit";
updateButton.id="update";
tabledata3.append(updateButton);



var deleteButton=document.createElement("button");
deleteButton.textContent="x";
 deleteButton.id="del";
tabledata3.append(deleteButton);


tablerow.appendChild(tabledata1);
tablerow.appendChild(tabledata2);
tablerow.appendChild(tabledata3);

document.getElementById("list").appendChild(tablerow);
}

deleteButton.addEventListener('click',function()
{
    deleteButton.parentElement.parentElement.remove();
})

updateButton.addEventListener('click',function()
{
   var data=window.prompt("Enter the updated Quantity");
   updateButton.parentElement.firstChild.textContent=data;

})

}