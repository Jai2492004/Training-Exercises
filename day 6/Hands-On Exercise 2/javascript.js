if(document.getElementById("list-container")==="")
    {
        f=1;
    }
    var f=1;
    var m=0;

function task(){
    m++;
    if(document.getElementById("inputbox").value==="")
    {
        alert("your input is empty");
    }
    else{
    var items=document.createElement("div");
    items.id="task"+m;
    items.className="task";
    
    var cbox=document.createElement("input");
    cbox.setAttribute("type","checkbox");
    cbox.id="cbox";
    cbox.className="cbox";

    var font=document.createElement("p");
    font.id="font";
    font.className="font";
    font.textContent=document.getElementById("inputbox").value;

    document.getElementById("inputbox").value="";

    var del=document.createElement("button")
    del.textContent="Delete";
    del.id="del"; 
    del.className="del";

    items.appendChild(cbox);    
    items.appendChild(font); 
    items.appendChild(del);
    document.getElementById("list-container").appendChild(items);
 
    if(f>1)
    {
        items.style.borderTop="1px solid lightgray";
    }
    f++;
    }
   
    del.addEventListener("click",function()
    {
        if ((document.getElementById("b1").nextElementSibling.firstChild).id === del.parentElement.id  && del.parentElement.nextElementSibling !== null) 
    {
        del.parentElement.nextElementSibling.style.border = "none";
        f=1;
      
    }
       del.parentElement.remove();
    })
    cbox.addEventListener("change",function()
    {
        if(cbox.checked)
        {
            (cbox.nextElementSibling).style.textDecoration='line-through';
        }
        else{
            (cbox.nextElementSibling).style.textDecoration='None';
        }
    })

    document.getElementById("delete-all").addEventListener("click",function()
{
    if(items.firstChild.checked){
        items.remove();
        f=1;
    }
})
}