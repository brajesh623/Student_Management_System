// All the Code for All Students Page Goes Here
let allStudentsArray=JSON.parse(localStorage.getItem("admission"));
display(allStudentsArray);  
function display(arr){
    let tbody=document.querySelector("tbody");
    tbody.innerText="";
    arr.forEach(function (el,index){
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.innerText=el.name;
        let td2=document.createElement("td");
        td2.innerText=el.email;
        let td3=document.createElement("td");
        td3.innerText=el.course;
        let td4=document.createElement("td");
        td4.innerText=el.gender;
        let td5=document.createElement("td");
        td5.innerText=el.phone;
        let td6=document.createElement("td");
        td6.innerText="Accept";
        td6.style.cursor="pointer";
        td6.style.backgroundColor="green";
        td6.style.color="white";
        td6.addEventListener("click", function(event){
            acceptFunction(event,index);
        });
        let td7=document.createElement("td");
        td7.innerText="Reject";
        td7.style.cursor="pointer";
        td7.style.backgroundColor="red";
        td7.style.color="white";
        td7.addEventListener("click", function(event){
            rejectFunction(event,index);
        });
        tr.append(td1,td2,td3,td4,td5,td6,td7);
        tbody.append(tr);
    });
    let allAcceptedArray=JSON.parse(localStorage.getItem("admission-accepted"))||[];
    function acceptFunction(event,index){
        allAcceptedArray.push(allStudentsArray[index]);
        localStorage.setItem("admission-accepted",JSON.stringify(allAcceptedArray));
        event.target.parentNode.remove();
        allStudentsArray.splice(index,1);
        localStorage.setItem("admission",JSON.stringify(allStudentsArray));
        window.target.reload();
    }
    let allRejectedArray=JSON.parse(localStorage.getItem("admission-rejected"))||[];
    function rejectFunction(event,index){
        allRejectedArray.push(allStudentsArray[index]);
        localStorage.setItem("admission-rejected",JSON.stringify(allRejectedArray));
        event.target.parentNode.remove();
        allStudentsArray.splice(index,1);
        localStorage.setItem("admission",JSON.stringify(allStudentsArray));
        window.target.reload();
    }
    document.querySelector("#filter").addEventListener("change",courseFilter);

    function courseFilter(){
        let course=[];
        let val=document.querySelector("#filter").value;
        allStudentsArray.forEach(function(el){
            if(val==el.course){
                course.push(el);
            }
        });
        if(val=="all"){
            display(allStudentsArray);
        }else{
            display(course);
        }
        
    }
}