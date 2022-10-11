var form = document.getElementById('my-form');
form.addEventListener('submit', addData);
function addData(e){
    e.preventDefault();
    
    var newName = document.getElementById("name").value;
    var newEmail = document.getElementById("email").value;
    let obj = {
        newName,
        newEmail
    };
    if(localStorage.getItem(newEmail)) alert("Already exist");

   else  localStorage.setItem(newEmail, JSON.stringify(obj));
    
   console.log(localStorage);
}