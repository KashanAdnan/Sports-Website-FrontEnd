const firebaseConfig = {
  apiKey: "AIzaSyCbcbPRw8m2w4ZzMCQvF0rK1ZZRQW361Z0",
  authDomain: "upload-image-dbc41.firebaseapp.com",
  projectId: "upload-image-dbc41",
  storageBucket: "upload-image-dbc41.appspot.com",
  messagingSenderId: "83724584697",
  appId: "1:83724584697:web:1832e81d1f3aae0d05c428",
  measurementId: "G-JTGF48PDVX",
};

firebase.initializeApp(firebaseConfig);
let fileItem;
let fileName;
const getFile = (e) => {
  fileItem = e.target.files[0];
  fileName = fileItem.name;
};

function addNews() {
  let storageRef = firebase.storage().ref("NewsThumbail/" + fileName);
  let uploadTask = storageRef.put(fileItem);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      percentVal = Math.floor(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 1000
      );
    },
    (error) => {
      console.log(error);
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((url) => {
        axios
          .post("https://sports-website-backend-production.up.railway.app/api/v5/add", {
            Title: document.getElementById("video-title").value,
            thumbnail: url,
            Date: document.getElementById("video-link").value,
          })
          .then((result) => {
            // console.log(result);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  );

  return false;
}

axios
  .get("https://sports-website-backend-production.up.railway.app/api/v5/admin/Newss")
  .then((result) => {
    var i = 0;
    const data = result.data.News.map((data) => {
      document.getElementById("showdata").innerHTML += `
          <tr>
							 <th><span class="custom-checkbox">
							 <input type="checkbox" id="checkbox1" name="option[]" value="1">
							 <label for="checkbox1"></label></th>
							 <th>${i++}</th>
							 <th>${data.Title}</th>
							 <th><img src="${
                 data.thumbnail
               }" width="50px" height="50px" style="border-radius:50%;object-fit : cover;" /></th>
                                <th>${data.Date}</th>
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
                               data-toggle="tooltip"  onclick="deleteVideo('${
                                 data._id
                               }')" title="Delete">&#xE872;</i>
							   </a>
							 </th>
							 </tr>
        `;
      document.getElementById("show-number").innerHTML = `
        showing <b>${i}</b> out of <b>${result.data.Videos.length}</b
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

function deleteVideo(id) {
  axios
    .delete(`https://sports-website-backend-production.up.railway.app/api/v5/admin/News/${id}`)
    .then((result) => {
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
}
