function navbar(){
    let container = document.getElementById("navbar");
    container.innerHTML = `
    <div>
    <div id="redBar">
      <p>
        <b>New Welcome Rewards™+ members get $15 in rewards!</b>
        Enroll for $29/yr
      </p>
    </div>
    <div id="blueBar">
      <div id="left_blueBar">
        <img style="height: 40px; width: 50px" src="Logo.jpeg" alt="mainLogo" />
        <img
          style="height: 40px; width: 50px"
          src="BuyBuyBaby.jpeg"
          alt="BuyBuyBabyLogo"
        />
        <img
          style="height: 40px; width: 50px"
          src="harmon.jpeg"
          alt="harmonLogo"
        />
      </div>

      <div id="right_blueBar">
        <i class="fa fa-shopping-bag">
          <b>Same Day Delivery</b> | order by 2pm</i
        >
        <i class="fa fa-calendar"> <b>Store Pickup</b> | Find a store</i>
      </div>
    </div>

    <div id="searchBar">
    <label htmlFor="checker" class="line">
    <i style="color:#094576; margin-top:14px" class="fa fa-bars" onclick="show()"></i>
  </label>
  <ul id="#style-2">
  <div class="item" id="mobile"> 
  <i class="fa-solid fa-user"></i>
  <a class="loginb" href="login.html">Log In</a>
  </li>
  <li>
  <i class="fa-solid fa-bag-shopping"></i>
  <a class="help" href="help.html">HELP</a>
  </li>
  <li><i class="fa-solid fa-cart-shopping"></i>
      <a class="icon" href="cart.html">Cart</a>
  </li>
  </div>
    <div style="margin-top: 0px;" class="item">
      <li >
      <i class="fa-solid fa-person"></i>
      <a href="index.html"> <img style="height: 40px; width: 60px" src="Logo3.jpeg" alt="" /></a>
      </li>
      <li >
      <i class="fa-solid fa-person-dress"></i>
      <a href="https://www.buybuybaby.com/"><img
      style="height: 40px; width: 50px"
      src="BuyBuyBaby2.jpeg"
      alt="BuyBuyBabyLogo"
    /></a>
      </li>
      <li >
        <i class="fa-solid fa-child-reaching"></i>
        <a href="https://www.harmonfacevalues.com/"><img
        style="height: 40px; width: 50px"
        src="harmon2.jpeg"
        alt="harmonLogo"
      /></a>
      </li>
    </div>
    <div class="menu">
    <p onclick="page()">Bedding</p>
    <p onclick="page()">Comfort Sets</p>
    <P onclick="page()">Bedding Bassics</P>
    <P onclick="page()">Sheets & Pillows</P>
    <P onclick="page()">Pillows</P>
    <P onclick="page()">Bath Towel & Rugs</P>
    <P onclick="page()">Shower</P>
    <P onclick="page()">Bathroom hardware</P>
    <P onclick="page()">Bathroom Accessories</P>
    <P onclick="page()">Small Appliances</P>
    <P onclick="page()">Coffee & Tea</P>
    <P onclick="page()">Bathroom Ideas</P>
    <P onclick="page()">Wedding</P>
    <P onclick="page()">College</P>
    <a href="https://www.bedbathandbeyond.com/store/account/TrackOrder"><P onclick="page()">Track an order</P></a>
    <a href="https://www.bedbathandbeyond.com/store/static/coupons"><P onclick="page()">Offers</P></a>
    <a href="https://www.bedbathandbeyond.com/store/selfservice/FindStore"><P onclick="page()">Store Finder</P></a>
    <a href="https://www.bedbathandbeyond.com/ideaboard"><P onclick="page()">Idea Boards</P></a>
    <a href="https://www.bedbathandbeyond.com/welcomerewardsplus"><P onclick="page()">Join welcome rewards</P></a>
    <a href="https://www.bedbathandbeyond.com/store/knowledgecenter/home">
    <P onclick="page()">Help</P></a>
    
    
    </div>
  </ul>
      <img style="height: 60px; width: 100px: margin-top:0px" src="Logo3.jpeg" alt="" />

      <div id="search">
        <input
          style="
            border-radius: 25px;
            width: 65rem;
            text-align: center;
            font-size: 18px;
            padding: 10px;
            margin-left: 40px;
          "
          type="text"
          placeholder="What product can we help you find?"
        />
      </div>

      <div id="right_searchBar">
        <a
          style="
            color: #094576;
            font-weight: bold;
            font-size: 20px;
            text-decoration: none;
          "
          href="login.html"
          >sign in</a
        >
        <i
          class="fa fa-shopping-cart"
          style="font-size: 25px; color: #094576"
        ></i>
      </div>
    </div>

    <div id="dropedownMenu">
      <a href="">bedding</a>
      <a href="">bath</a>
      <a href="">kitchen</a>
      <a href="">dinding</a>
      <a href="">storage & cleaning</a>
      <a href="">home decor</a>
      <a href="">curtains & window</a>
      <a href="">furniture</a>
      <a href="">health & beauty</a>
      <a href="">outdoor</a>
      <a href="">luggage pet & more</a>
      <a href="">gifts</a>
      <a href="">baby & kids</a>
      <a href="">shop by brand</a>
      <a href="">college</a>
    </div>
    </div>
    `;
}
navbar();
function show() {
  if (document.querySelector("ul").classList.contains("shownav")) {
    document.querySelector("ul").classList.remove("shownav");
  } else {
    document.querySelector("ul").classList.add("shownav");
  }
}