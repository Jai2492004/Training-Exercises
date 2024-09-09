var student= [];
var grade= [];
var count=0;
function add()
{
    if(document.getElementById("input-box1").value=="")
    {
        alert("Enter the Name");
    }
    else if(document.getElementById("input-box2").value=="")
    {
        alert("Enter the Grade");
    }
    else if(Number(document.getElementById("input-box2").value)<0 || Number(document.getElementById("input-box2").value)>100)
    {

        alert("Enter the Grade within the range(0-100).");
    }
    else
    {
    student[count]=document.getElementById("input-box1").value
    grade[count]=document.getElementById("input-box2").value
    document.getElementById("input-box1").value="";
    document.getElementById("input-box2").value=""
    count++;
    }
}
var n=0;
function display()
{
    for(i=n;i<count;i++)
    {
    var list=document.createElement("li");
    var list2=student[i]+" - "+grade[i]+"%";
    list.append(list2) 
    document.getElementById("list").appendChild(list)
    }
    n=count;
}
function calculate()
{
    var sum=0;
    for(i=0;i<count;i++)
    {
        sum=sum+Number(grade[i]);
    }
    sum=sum/count;
    document.getElementById("average").textContent=`Average Garde: ${sum} %`
}