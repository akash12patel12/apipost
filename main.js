var form = document.getElementById('my-form');
form.addEventListener('submit', addData);
function addData(e){
    e.preventDefault();
    
    var newName = document.getElementById("name").value;
    var newEmail = document.getElementById("email").value;
    let obj = {
        Name : newName,
        Email : newEmail
    };
    localStorage.setItem("obj", obj);

   console.log(localStorage);
}