fetch("https://fakestoreapi.com/products?limit=10")
  .then((response) => response.json())
  .then((data) => {
    let container = document.getElementById("div1");
    data.map((fetch4) => {
      let card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
    <img src="${fetch4.image}" alt="${fetch4.title}">
      <h2> ${fetch4.title}</h2>
      <p class="p2"> ${fetch4.description}</p>
      <p  class="pe"> ${fetch4.price}$</p>
       <button>Sotib olish</button>
    `;
      container.appendChild(card);
    });
  });
