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
          .post("http://localhost:3000/api/v2/register", {
            playerName: document.getElementById("PlayerName").value,
            playerImage: url,
            Address: document.getElementById("PlayerAddress").value,
            City: document.getElementById("PlayerCity").value,
            State: document.getElementById("PlayerState").value,
            Zip: document.getElementById("Zip").value,
            Phone: document.getElementById("Phone").value,
            Gender: document.getElementById("Gender").value,
            CaptainName: document.getElementById("CaptainName").value,
            CompanyName: document.getElementById("CompanyName").value,
            DateOfBirth: document.getElementById("DateOfBirth").value,
          })
          .then((result) => {
            swal("Good Job !", "SignUp Successful", "success");
            setInterval(() => {
              window.location.href = "/Home";
            }, 3000);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  );
  return false;
}

const ball = () => {
  console.log("hello");
  const player = (document.getElementById("player").innerHTML = `
      <form class="signUp-form">
            <h1>Welcome !</h1>
            <p class="to">
                to <span>UsmanSports</span> Website For Players
            </p>
            <div class="inputs">
                <div class="input-div">
                    <input type="file" id="file" onchange="getFile(event)">
                    <label for="file">+</label>
                </div>
                <div class="input-div">
                    <input type="text" id="PlayerName" placeholder="Enter Your Player Name">
                </div>
                <div class="input-div">
                    <input type="text" id="PlayerAddress" placeholder="Enter Your Player Address">
                </div>
                <div class="input-div">
                    <input type="text" id="PlayerCity" placeholder="Enter Your City">
                </div>
                <div class="input-div">
                    <input type="text" id="PlayerState" placeholder="Enter Your State">
                </div>
                <div class="input-div">
                    <input type="text" id="Zip" placeholder="Enter Your Zip">
                </div>
                <div class="input-div">
                    <input type="text" id="Phone" placeholder="Enter Your Phone">
                </div>
                <div class="input-div">
                    <input type="text" id="Gender" placeholder="Enter Your Gender">
                </div>
                <div class="input-div">
                    <input type="text" id="CaptainName" placeholder="Enter Your Captain Name">
                </div>
                <div class="input-div">
                    <input type="text" id="CompanyName" placeholder="Enter Your Company Name">
                </div>
                <div class="input-div">
                    <input type="text" id="CompanyName" placeholder="Enter Your Company Name">
                </div>
                <div class="input-div">
                    <input type="text" id="CompanyName" placeholder="Enter Your Company Name">
                </div>
                <div class="input-div">
                    <select name="" id="bat-ball">
                        <option value="Bat" onclick="bat()">Bating</option>
                        <option value="Ball">Balling</option>
                    </select>
                </div>
                <div class="input-div">
                    <input type="date" id="DateOfBirth">
                </div>
            </div>
            <div class="links">
                <button onclick="return register()">Sign Up</button>
                <p>
                    Have an Account ?
                    <a href="/">Login</a>
                </p>
            </div>
        </form>
  `);
};
