function saveToCloud(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const obj = {
    name,
    email,
  };
  axios
    .post("https://crudcrud.com/api/4747191ff2384b96b9096592edfbea44/data", obj)
    .then((res) => console.log("connected"))
    .catcth((err) => console.log(err));
}

axios
  .get("https://crudcrud.com/api/4747191ff2384b96b9096592edfbea44/data")
  .then((res) => {
    const users = res.data;
    const parentNode = document.getElementById("users");

    users.forEach((user) => {
      const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user.id}')> Delete User </button>
 </li>`;
      parentNode.innerHTML = parentNode.innerHTML + childHTML;
    });
  });

function getAll() {
  axios
    .get("https://crudcrud.com/api/4747191ff2384b96b9096592edfbea44/data")
    .then((res) => {
      const users = res.data;
      const parentNode = document.getElementById("users");

      users.forEach((user) => {
        const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user._id}')> Delete User </button>
 </li>`;
        parentNode.innerHTML = parentNode.innerHTML + childHTML;
      });
    });
}

function deleteUser(id) {
  const delidurl ="https://crudcrud.com/api/4747191ff2384b96b9096592edfbea44/data" + id;
  axios
    .delete(delidurl)
    .then((res) => {
      console.log(res);
      getAll();
    })
    .catcth((err) => console.log(err));
}
