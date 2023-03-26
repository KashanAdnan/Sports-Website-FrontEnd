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
var fileText = document.getElementById("fileText");
var uploadPercentage = document.getElementById("percentage");
let percentVal;
let fileItem;
let fileName;
const getFile = (e) => {
  fileItem = e.target.files[0];
  fileName = fileItem.name;
};

function regsiter() {
  let storageRef = firebase.storage().ref("images/" + fileName);
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
          .post(
            "https://sports-website-backend-production.up.railway.app/api/v1/register",
            {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
              password: document.getElementById("password").value,
              Address: document.getElementById("address").value,
              phone: document.getElementById("phone").value,
              dob: document.getElementById("dob").value,
              avatar: url,
            }
          )
          .then((result) => {
            swal("Good Job !", "SignUp Successful", "success");
            setInterval(() => {
              window.location.href =
                "https://kashanadnan.github.io/Sports-Website-FrontEnd/";
            }, 3000);
          })
          .catch((err) => {
            swal("OOPS !", err.response.data.message, "error");
          });
      });
    }
  );

  return false;
}
