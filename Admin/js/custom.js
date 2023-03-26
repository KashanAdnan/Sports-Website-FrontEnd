axios
  .get("https://sports-website-backend-production.up.railway.app/api/v1/admin/users")
  .then((result) => {
    var i = 0;
    const arraydata = result.data.users.map((data) => {
      const showdata = (document.getElementById("showdata").innerHTML += `
        	      <tr id="${data._id}">
							 <th><span class="custom-checkbox">
							 <input type="checkbox" id="checkbox1" name="option[]" value="1">
							 <label for="checkbox1"></label></th>
							 <th>${i++}</th>
							 <th>${data.name}</th>
							 <th>${data.email}</th>
							 <th>${data.Address}</th>
							 <th>${data.phone}</th>
							 <th>
							    <a href="#editEmployeeModal" onclick="updateUser('${data._id}','${
        data.name
      }','${data.email}','${data.Address}','${
        data.phone
      }')"  class="edit" data-toggle="modal">
							   <i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
							   </a>
							   <a  class="delete" data-toggle="modal">
							   <i class="material-icons" 
                               data-toggle="tooltip"  onclick="deleteUser('${
                                 data._id
                               }')" title="Delete">&#xE872;</i>
							   </a>
							 </th>
							 </tr>
        `);
      const showNumberData = (document.getElementById(
        "showNumberData"
      ).innerHTML = `
        showing <b>${i}</b> User</b>
        `);
    });
  })
  .catch((err) => {
    window.location.href = "/";
  });

function deleteUser(id) {
  console.log(id);
  axios
    .delete(`https://sports-website-backend-production.up.railway.app/api/v1/admin/user/${id}`)
    .then((result) => {
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateUser(id, name, email, Address, phone) {
  document.getElementById(`${id}`).innerHTML = `
     <tr>
							 <th><span class="custom-checkbox">
							 <input type="checkbox" id="checkbox1" name="option[]" value="1">
							 <label for="checkbox1"></label></th>
							 <th><input type="text"  id="${id}-name" value="${name}" /></th>
							 <th><input type="text"  id="${id}-email" value="${email}" /></th>
							 <th><input type="text"  id="${id}-adress" value="${Address}" /></th>
							 <th><input type="text"  id="${id}-phone" value="${phone}" /></th>
							 <th>
							    <a href="#editEmployeeModal"  onclick="updateUserData('${id}')"  class="edit" data-toggle="modal">
							   <i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
							   </a>
							   <a  class="delete" data-toggle="modal">
							   <i class="material-icons" 
                               onclick="deleteUser('${id}')"
                               data-toggle="tooltip" title="Delete">&#xE872;</i>
							   </a>
							 </th>
							 </tr>
    `;
}

function updateUserData(id) {
  axios
    .put(`https://sports-website-backend-production.up.railway.app/api/v1/admin/user/${id}`, {
      name: document.getElementById(`${id}-name`).value,
      email: document.getElementById(`${id}-email`).value,
      phone: document.getElementById(`${id}-phone`).value,
      Address: document.getElementById(`${id}-adress`).value,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
