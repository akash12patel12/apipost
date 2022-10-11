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
    localStorage.setItem(newEmail, JSON.stringify(obj));

   console.log(localStorage);
}