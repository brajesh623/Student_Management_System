// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit", addFunction);
let admissionArray=JSON.parse(localStorage.getItem("admission"))||[];
function addFunction(event){
    event.preventDefault();
    let obj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        phone:document.querySelector("#phone").value,
        gender:document.querySelector("#gender").value,
        course:document.querySelector("#course").value,
    }
    admissionArray.push(obj);
    localStorage.setItem("admission",JSON.stringify(admissionArray));
}
