axios
  .get("https://sports-website-backend-production.up.railway.app/api/v1/me")
  .then((result) => {
    const image = document.getElementById("profileImage");
    image.innerHTML = `
    <div class="button">
                <a href="/Player">Player</a>
            </div><a href="/Profile"><img src="${result.data.user.avatar}" /></a>`;
  })
  .catch((err) => {});

function whenLoad() {
  const preloader = (document.getElementById("loading").style.display = "none");
}

const openMenu = () => {
  console.log("hello");
  const menu = document.getElementById("menu");
  menu.classList.add("openMenu");
};
