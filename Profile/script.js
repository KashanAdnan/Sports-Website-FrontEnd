axios
  .get("https://sports-website-backend-production.up.railway.app/api/v1/me")
  .then((result) => {
    document.getElementById("showdata").innerHTML = `
     <div class="container">

         <!-- ===== ===== Header/Navbar ===== ===== -->
         <header>
             <div class="brandLogo">
                 <span>UsmanSports</span>
             </div>
         </header>


         <!-- ===== ===== User Main-Profile ===== ===== -->
         <section class="userProfile card">
             <div class="profile">
                 <figure id="image"><img src="${result.data.user.avatar}" alt="profile" width="250px" height="250px"></figure>
             </div>
         </section>


         <!-- ===== ===== Work & Skills Section ===== ===== -->
         <section class="work_skills card">
             <!-- ===== ===== Work Container ===== ===== -->
             <div class="work">
                 <h1 class="heading">work</h1>
                 <div class="primary">
                     <h1>Spotify New York</h1>
                     <span onclick="logout()">Logout</span>
                     <p>170 William Street <br> New York, NY 10038-212-315-51</p>
                 </div>

                 <div class="secondary">
                     <h1>Metropolitan <br> Museum</h1>
                     <span>Edit Profile</span>
                     <p>S34 E 65th Street <br> New York, NY 10651-78 156-187-60</p>
                 </div>
             </div>

             <!-- ===== ===== Skills Container ===== ===== -->
             <div class="skills">
                 <h1 class="heading">Skills</h1>
                 <ul>
                     <li style="--i:0">Android</li>
                     <li style="--i:1">Web-Design</li>
                     <li style="--i:2">UI/UX</li>
                     <li style="--i:3">Video Editing</li>
                 </ul>
             </div>
         </section>


         <!-- ===== ===== User Details Sections ===== ===== -->
         <section class="userDetails card">
             <div class="userName">
                 <h1 class="name" id="name">${result.data.user.name}</h1>
                 <div class="map">
                     <i class="ri-map-pin-fill ri"></i>
                     <span id="first-address">${result.data.user.Address}</span>
                 </div>
                 <p>Product Designer</p>
             </div>



             <div class="btns">
                 <ul>
                     <li class="sendMsg">
                         <i class="ri-chat-4-fill ri"></i>
                         <a href="#">Send Message</a>
                     </li>

                     <li class="sendMsg active">
                         <i class="ri-check-fill ri"></i>
                         <a href="#">Contacts</a>
                     </li>

                     <li class="sendMsg">
                         <a href="#">Report User</a>
                     </li>
                 </ul>
             </div>
         </section>


         <!-- ===== ===== Timeline & About Sections ===== ===== -->
         <section class="timeline_about card">
             <div class="tabs">
                 <ul>
                     <li class="timeline">
                         <i class="ri-eye-fill ri"></i>
                         <span>Timeline</span>
                     </li>

                     <li class="about active">
                         <i class="ri-user-3-fill ri"></i>
                         <span>About</span>
                     </li>
                 </ul>
             </div>

             <div class="contact_Info">
                 <h1 class="heading">Contact Information</h1>
                 <ul>
                     <li class="phone">
                         <h1 class="label">Phone:</h1>
                         <span class="info" id="phone">${result.data.user.phone}</span>
                     </li>

                     <li class="address">
                         <h1 class="label">Address:</h1>
                         <span class="info" id="address">${result.data.user.Address}</span>
                     </li>

                     <li class="email">
                         <h1 class="label">E-mail:</h1>
                         <span class="info" id="email">${result.data.user.email}</span>
                     </li>
                 </ul>
             </div>

             <div class="basic_info">
                 <h1 class="heading">Basic Information</h1>
                 <ul> 
                     <li class="birthday">
                         <h1 class="label">Birthday:</h1>
                         <span class="info" id="birth">${result.data.user.dob}</span>
                     </li>
                 </ul>
             </div>
         </section>
     </div>
    `;
    document.getElementById("profileImage").innerHTML = `
    <div class="button">
                <a href="/Player">Player</a>
            </div><a href="/Profile"><img src="${result.data.user.avatar}" /></a>`;
  })
  .catch((err) => {
    window.location.href = "/Login";
  });
function updateContent(name, email, id) {
  console.log("302");
  document.getElementById(`${id}`).innerHTML = `
                    <input type="file" id="file" />
                    <label for="file">+</label>
                    <table class="profile" border="1px" cellspacing="0" cellspadding="10px"
                        id="${id}">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                        </tr>
                        <tr>
                            <td><input type="text" id="name" value="${name}"></td>
                            <td><input type="email" id="email" value="${email}"></td>
                            <td><button
                                    onclick="updateData(''${id}')">Update</button>
                            </td>
                        </tr>
                    </table>
            `;
}

function updateData(id) {
  axios.put("https://sports-website-backend-production.up.railway.app/api/v1/me/update", {});
}

function logout() {
  axios
    .get("https://sports-website-backend-production.up.railway.app/api/v1/logout")
    .then((result) => {
      alert("Logout Succesfull");
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });
}
axios
  .get("https://sports-website-backend-production.up.railway.app/api/v2/me")
  .then((result) => {
    console.log(result);
    document.getElementById("player").innerHTML = `
     <div class="container">

         <!-- ===== ===== Header/Navbar ===== ===== -->
         <header>
             <div class="brandLogo">
                 <span>UsmanSports</span>
             </div>
         </header>


         <!-- ===== ===== User Main-Profile ===== ===== -->
         <section class="userProfile card">
             <div class="profile">
                 <figure id="image"><img src="${result.data.Player.playerImage}" alt="profile" width="250px" height="250px"></figure>
             </div>
         </section>


         <!-- ===== ===== Work & Skills Section ===== ===== -->
         <section class="work_skills card">
             <!-- ===== ===== Work Container ===== ===== -->
             <div class="work">
                 <h1 class="heading">work</h1>
                 <div class="primary">
                     <h1>Spotify New York</h1>
                     <span onclick="logout()">Logout</span>
                     <p>170 William Street <br> New York, NY 10038-212-315-51</p>
                 </div>

                 <div class="secondary">
                     <h1>Metropolitan <br> Museum</h1>
                     <span><a href="/Edit-User"> Edit Profile</a></span>
                     <p>S34 E 65th Street <br> New York, NY 10651-78 156-187-60</p>
                 </div>
             </div>

             <!-- ===== ===== Skills Container ===== ===== -->
             <div class="skills">
                 <h1 class="heading">Skills</h1>
                 <ul>
                     <li style="--i:0">Android</li>
                     <li style="--i:1">Web-Design</li>
                     <li style="--i:2">UI/UX</li>
                     <li style="--i:3">Video Editing</li>
                 </ul>
             </div>
         </section>


         <!-- ===== ===== User Details Sections ===== ===== -->
         <section class="userDetails card">
             <div class="userName">
                 <h1 class="name" id="name">${result.data.Player.playerName}</h1>
                 <div class="map">
                     <i class="ri-map-pin-fill ri"></i>
                     <span id="first-address">${result.data.Player.Address}</span>
                 </div>
                 <p>${result.data.Player.Profashion}</p>
             </div>



             <div class="btns">
                 <ul>
                     <li class="sendMsg">
                         <i class="ri-chat-4-fill ri"></i>
                         <a href="#">Send Message</a>
                     </li>

                     <li class="sendMsg active">
                         <i class="ri-check-fill ri"></i>
                         <a href="#">Contacts</a>
                     </li>

                     <li class="sendMsg">
                         <a href="#">Report User</a>
                     </li>
                 </ul>
             </div>
         </section>


         <!-- ===== ===== Timeline & About Sections ===== ===== -->
         <section class="timeline_about card">
             <div class="tabs">
                 <ul>
                     <li class="timeline">
                         <i class="ri-eye-fill ri"></i>
                         <span>Timeline</span>
                     </li>

                     <li class="about active">
                         <i class="ri-user-3-fill ri"></i>
                         <span>About</span>
                     </li>
                 </ul>
             </div>

             <div class="contact_Info">
                 <h1 class="heading">Contact Information</h1>
                 <ul>
                     <li class="phone">
                         <h1 class="label">Phone:</h1>
                         <span class="info" id="phone">${result.data.Player.Phone}</span>
                     </li>

                     <li class="address">
                         <h1 class="label">Address:</h1>
                         <span class="info" id="address">${result.data.Player.Address}</span>
                     </li>

                     <li class="email">
                         <h1 class="label">State:</h1>
                         <span class="info" id="email">${result.data.Player.State}</span>
                     </li>
                     <li class="email">
                         <h1 class="label">Gender:</h1>
                         <span class="info" id="email">${result.data.Player.Gender}</span>
                     </li>
                     <li class="email">
                         <h1 class="label">Hand:</h1>
                         <span class="info" id="email">${result.data.Player.Hand}</span>
                     </li>
                 </ul>
             </div>

             <div class="basic_info">
                 <h1 class="heading">Basic Information</h1>
                 <ul> 
                     <li class="birthday">
                         <h1 class="label">Birthday:</h1>
                         <span class="info" id="birth">${result.data.Player.DateOfBirth}</span>
                     </li>
                 </ul>
             </div>
         </section>
     </div>
    `;
  })
  .catch((err) => {
    document.getElementById("player").innerHTML = `
    <h1>Player</h1>
    <h1>No Data Available</h1>
    `;
    // console.log(err);
  });
