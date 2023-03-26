function getChart() {
  axios
    .get("https://sports-website-backend-production.up.railway.app/api/v1/admin/users")
    .then((result) => {
      var userCount = result.data.users.length;
      axios
        .get("https://sports-website-backend-production.up.railway.app/api/v2/admin/players")
        .then((res) => {
          const playercount = res.data.Players.length;
          axios
            .get("https://sports-website-backend-production.up.railway.app/api/v3/admin/org")
            .then((response) => {
              console.log(response);
              const orgcount = response.data.Org.length;
              const ctx = document.getElementById("myChart");
              new Chart(ctx, {
                type: "pie",
                data: { 
                  labels: ["User", "Players", "Organization"],
                  datasets: [
                    {
                      label: "Users",
                      data: [userCount, playercount, 11],
                      borderWidth: 1,
                    },
                  ],
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true,
                    },
                  },
                },
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

getChart();
