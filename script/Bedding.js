var Bedcontainer = document.getElementById("Beddingcontainer");

var data;

// const BedFetch = async () => {

// };

// BedFetch();

async function renderBed() {
  let res = await fetch(`http://localhost:3000/bedding`);
  data = await res.json();

  console.log(data);

  data.forEach((el) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.item[0].img1;

    let p = document.createElement("p");
    p.innerText = el.name;

    let price = document.createElement("p");
    price.innerText = el.price1;

    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";

    div.append(img, p, price, btn);
    Bedcontainer.append(div);
  });
}

renderBed();
