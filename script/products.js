var products = document.getElementById("products");

async function products() {
    const res = await fetch(Bedding.json);
    return await res.json();
}