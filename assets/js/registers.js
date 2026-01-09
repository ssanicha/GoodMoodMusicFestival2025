const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  console.log("submit clicked");

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, phone })
  })
  .then(res => res.json())
  .then(() => {
    window.location.href = "/confirm";
  })
  .catch(err => console.error(err));
});

