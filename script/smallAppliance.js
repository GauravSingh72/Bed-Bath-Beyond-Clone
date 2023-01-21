var Appliancecontainer = document.getElementById("Applicanescontainer");

async function renderAppliance() {
  let result = await fetch(`http://localhost:3000/smallAppliances`);
  var data = await result.json();
  console.log(data);
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("id","appliances")

    let img = document.createElement("img");
    img.src = el.item[0].img1;
    img.style = "width:150px;"

    let p = document.createElement("p");
    p.innerText = el.name;

    let price = document.createElement("h3");
    price.innerText = "$"+el.price1;


    let btn = document.createElement("button");
    btn.innerText = "Add to Cart";

    div.append(img, p, price, btn);
    Appliancecontainer.append(div);
  });
}

renderAppliance();
