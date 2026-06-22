const button = document.getElementById("loadBtn");
const statusText = document.getElementById("status");
const usersDiv = document.getElementById("users");

button.addEventListener("click", () => {

    statusText.textContent = "Loading...";
    usersDiv.innerHTML = "";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {

            users.forEach(user => {

                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                `;

                usersDiv.appendChild(card);
            });

            statusText.textContent = "Loaded Successfully";
        })

        .catch(error => {
            statusText.textContent = "Error Loading Data";
            console.log(error);
        });

    }, 2000);

});