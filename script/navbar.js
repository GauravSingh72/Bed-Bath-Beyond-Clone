function navbar() {
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
      <a href="./index.html"><img style="height: 40px; width: 50px" src="Logo.jpeg" alt="mainLogo" /></a>
        
        <a href="https://www.buybuybaby.com/"><img
        style="height: 40px; width: 50px"
        src="BuyBuyBaby.jpeg"
        alt="BuyBuyBabyLogo"
      /></a>
        
        <a href="https://www.harmonfacevalues.com/"><img
        style="height: 40px; width: 50px"
        src="harmon.jpeg"
        alt="harmonLogo"
      /></a>
        
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
    <a href="./bedding.html"><p onclick="page()">Bedding</p></a>
    <a href="./smallAppliances.html"><P onclick="page()">Small Appliances</P></a>
    <p onclick="page()">Comfort Sets</p>
    <P onclick="page()">Bedding Bassics</P>
    <P onclick="page()">Sheets & Pillows</P>
    <P onclick="page()">Pillows</P>
    <P onclick="page()">Bath Towel & Rugs</P>
    <P onclick="page()">Shower</P>
    <P onclick="page()">Bathroom hardware</P>
    <P onclick="page()">Bathroom Accessories</P>
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
<a href="./index.html">
<img style="height: 60px; width: 100px: margin-top:0px" src="Logo3.jpeg" alt="" />

</a>

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
        <a href="./cart.html">
        <i
        class="fa fa-shopping-cart"
          style="font-size: 25px; color: #094576"
        >
        </i></a>
      </div>
    </div>

    <div class="dropdown">
    <a class="dropbtn">bedding</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="./bedding.html">bedding</a>
          <a href="">comfortable sets</a>
          <a href="">bedding basics</a>
        </div>
        <div class="column">
          <a href="">sale</a>
          <a href="">mattress pads</a>
          <a href="">shams</a>
        </div>
        <div class="column">
          <a href="">bed in a bef</a>
          <a href="">quilts</a>
          <a href="">bed skirts</a>
        </div>
        </div>
    </div>

    <a class="dropbtn">bath</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="">bath linen</a>
          <a href="">shower</a>
          <a href="">bath accessries</a>
        </div>
        <div class="column">
          <a href="">bathroom storage</a>
          <a href="">bath towels</a>
          <a href="">wastebaskets</a>
        </div>
        <div class="column">
          <a href="">towel bars</a>
          <a href="">wall cabinets</a>
          <a href="">towel warmers</a>
        </div>
        </div>
    </div>
    
    <a class="dropbtn">kitchen</a>
    <div class="dropdown-content">
      <div class="header">
      </div>  
      <div class="row">
        <div class="column">
          <a href="./smallAppliances.html">small appliances</a>
          <a href="#">cookware</a>
          <a href="#">air fryers</a>
        </div>
        <div class="column">
          <a href="#">blenders</a>
          <a href="#">juicers</a>
          <a href="#">roasters</a>
        </div>
        <div class="column">
          <a href="#">mising bowels</a>
          <a href="#">coffee makers</a>
          <a href="#">knife sets</a>
        </div>
        </div>
    </div>
    
    <a class="dropbtn">dinning</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">dinnerware sets</a>
          <a href="#">bowls</a>
          <a href="#">glasses</a>
        </div>
        <div class="column">
          <a href="#">pitchers</a>
          <a href="#">mattress pads</a>
          <a href="#">wine glasses</a>
        </div>
        <div class="column">
          <a href="#">serving sets</a>
          <a href="#">cocktail glasses</a>
          <a href="#">place settings</a>
        </div>
        </div>
    </div>    

    <a class="dropbtn">storage & cleaning</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">storage bins & baskets</a>
          <a href="#">hangers</a>
          <a href="#">hooks</a>
        </div>
        <div class="column">
          <a href="#">underbed storage</a>
          <a href="#">storage bags</a>
          <a href="#">shoe racks & storage</a>
        </div>
        <div class="column">
          <a href="#">trash bags & liners</a>
          <a href="#">recycling</a>
          <a href="#">dish & hand soap</a>
        </div>
        </div>
    </div>

    <a class="dropbtn">home decor</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">area rugs</a>
          <a href="#">throwrugs</a>
          <a href="#">outdoor rugs</a>
        </div>
        <div class="column">
          <a href="#">throw pillows</a>
          <a href="#">throw blankets</a>
          <a href="#">pillow covers & inserts</a>
        </div>
        <div class="column">
          <a href="#">table lamps</a>
          <a href="#">floor lamps</a>
          <a href="#">ceiling fans</a>
        </div>
        </div>
    </div>

    <a class="dropbtn">curtains & window</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">blackout curtains</a>
          <a href="#">blackout shades</a>
          <a href="#">simply essential</a>
        </div>
        <div class="column">
          <a href="#">room darkening curtains</a>
          <a href="#">light filtering shades</a>
          <a href="#">bee & willow home</a>
        </div>
        <div class="column">
          <a href="#">light filtering curtains</a>
          <a href="#">cellular shades</a>
          <a href="#">sun zero</a>
        </div>
        </div>
    </div>

    <a class="dropbtn">furniture</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">sofas & loveseats</a>
          <a href="#">chairs & recliners</a>
          <a href="#">ottomans & benches</a>
        </div>
        <div class="column">
          <a href="#">bar stools & counter stools</a>
          <a href="#">dining chairs & benchess</a>
          <a href="#">folding tables & chairs</a>
        </div>
        <div class="column">
          <a href="#">beds</a>
          <a href="#">headboards</a>
          <a href="#">dressers & chests</a>
        </div>
        </div>
    </div>    

    <a class="dropbtn">health & beauty</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">hair dryers</a>
          <a href="#">hair styling tools</a>
          <a href="#">shampoo & conditioner</a>
        </div>
        <div class="column">
          <a href="#">water flossers & floss</a>
          <a href="#">electric toothbrushes</a>
          <a href="#">teeth whitening</a>
        </div>
        <div class="column">
          <a href="#">men's shaving</a>
          <a href="#">electric groomers & shavers</a>
          <a href="#">trimmers & clippers</a>
        </div>
        </div>
    </div>

    <a class="dropbtn">outdoor</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">patio chairs & benches</a>
          <a href="#">chaise lounges</a>
          <a href="#">outdoor sofas and loveseats</a>
        </div>
        <div class="column">
          <a href="#">patio umbrellas</a>
          <a href="#">gazebos & canopies</a>
          <a href="#">patio umbrella bases</a>
        </div>
        <div class="column">
          <a href="#">outdoor grills & smokers</a>
          <a href="#">grill tools & accessories</a>
          <a href="#">outdoor cookware</a>
        </div>
        </div>
    </div>    

    <a class="dropbtn">luggage pet & more</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">luggage sets</a>
          <a href="#">checked luggage</a>
          <a href="#">luggage carry ons</a>
        </div>
        <div class="column">
          <a href="#">smart security & safety</a>
          <a href="#">smart doorbells</a>
          <a href="#">voice assistants</a>
        </div>
        <div class="column">
          <a href="#">entertainment</a>
          <a href="#">smart thermostats</a>
          <a href="#">electric heaters</a>
        </div>
        </div>
    </div> 
    
    <a class="dropbtn">gifts</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">gifts by recipient</a>
          <a href="#">top gifts</a>
          <a href="#">gifts for her</a>
        </div>
        <div class="column">
          <a href="#">cooking & baking gifts</a>
          <a href="#">coffee gifts</a>
          <a href="#">beauty & style qifts</a>
        </div>
        <div class="column">
          <a href="#">personalized bedding</a>
          <a href="#">personalized bath</a>
          <a href="#">personalized wall art</a>
        </div>
        </div>
    </div>    

    <a class="dropbtn">baby & kids</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">infant car seats</a>
          <a href="#">convertible car seats</a>
          <a href="#">booster car seats</a>
        </div>
        <div class="column">
          <a href="#">diaper bags</a>
          <a href="#">baby camers</a>
          <a href="#">activity</a>
        </div>
        <div class="column">
          <a href="#">health & wellness</a>
          <a href="#">baby gates</a>
          <a href="#">monitors</a>
        </div>
        </div>
    </div>
    
    <a class="dropbtn">shop by brand</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
        <div class="column">
          <a href="#">Dyson</a>
          <a href="#">UGG</a>
          <a href="#">lodge</a>
        </div>
        <div class="column">
          <a href="#">Caraway</a>
          <a href="#">Cirkul</a>
          <a href="#">everhome</a>
        </div>
        <div class="column">
          <a href="#">Smeg</a>
          <a href="#">homesick</a>
          <a href="#">Tuppenware</a>
        </div>
        </div>
    </div> 
    
    <a class="dropbtn">college</a>
    <div class="dropdown-content">
      <div class="header">
      </div>   
      <div class="row">
      <div class="column">
      <a href="./bedding.html">bedding</a>
      <a href="./smallAppliances.html">small appliances</a>
      <a href="">bedding basics</a>
    </div>
    <div class="column">
      <a href="">sale</a>
      <a href="">mattress pads</a>
      <a href="">shams</a>
    </div>
    <div class="column">
      <a href="">bed in a bef</a>
      <a href="">quilts</a>
      <a href="">bed skirts</a>
    </div>
        </div>
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

function page(){
  window.location.href="./bedding.html"
}