const login = () => {
  axios
    .post(
      "https://sports-website-backend-production.up.railway.app/api/v1/login",
      {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }
    )
    .then((result) => {
      swal("Good Job !", "Login Successful", "success");
      setInterval(() => {
        window.location.href =
          "https://kashanadnan.github.io/Sports-Website-FrontEnd/";
      }, 3000);
    })
    .catch((err) => {
      swal("OOPS !", err.response.data.message, "error");
    });
  return false;
};
