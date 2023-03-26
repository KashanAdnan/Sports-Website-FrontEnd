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

function register() {
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
            "https://sports-website-backend-production.up.railway.app/api/v2/register",
            {
              playerName: document.getElementById("PlayerName").value,
              playerImage: url,
              Profashion: "Bat",
              Address: document.getElementById("PlayerAddress").value,
              City: document.getElementById("PlayerCity").value,
              State: document.getElementById("PlayerState").value,
              Zip: document.getElementById("Zip").value,
              Phone: document.getElementById("Phone").value,
              Gender: document.getElementById("Gender").value,
              CaptainName: document.getElementById("CaptainName").value,
              CompanyName: document.getElementById("CompanyName").value,
              DateOfBirth: document.getElementById("DateOfBirth").value,
              Hand: document.getElementById("right-left").value,
            }
          )
          .then((result) => {
            window.location.href = "/";
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  );
  return false;
}
