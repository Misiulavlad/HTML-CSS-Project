const container = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <p><strong>Имя:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Город:</strong> ${user.address.city}</p>
        <p><strong>Улица:</strong> ${user.address.street}</p>
        <p><strong>Телефон:</strong> ${user.phone}</p>
        <p><strong>Компания:</strong> ${user.company.name}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Ошибка при получении данных:", error);
  });
