const createHeader = () => {
    let header = document.querySelector('header');

    header.innerHTML = `
    <!-- Header Section -->

        <!-- First Section in the Header -->
        <section class="header-1">
        <header>
            <div class="logo">
              <a href="index.html">
                <img src="" alt="Logo" <h1>Company Name</h1>
                </a>
            </div>
          
        </section>

        <!-- Second Section in the Header -->
        <section class="header-2">
            <nav>
                <a href="#">Jackets</a>
                <a href="#">Vests</a>
                <a href="#">Chaps</a>
                <a href="#">Flannels</a>
                <a href="#">Luggage</a>
                <a href="#">Ladies Bags</a>
                <a href="#">Gloves</a>
                <a href="#">Headwear</a>
                <a href="#">Accessories</a>
                <a href="#">Dealer Login</a>
                <a href="#">Search</a>
            </nav>

        <div class="topnav" id="myTopnav">
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>    
        <a href="#.html">Jackets</a>
            <a href="#">Vests</a>
            <a href="#">Chaps</a>
            <a href="#">Flannels</a>
            <a href="#">Luggage</a>
            <a href="#">Ladies Bags</a>
            <a href="#">Gloves</a>
            <a href="#">Headwear</a>
            <a href="#">Accessories</a>
            <a href="#">Dealer Login</a>
            <a href="#">Search</a>
  </a>
</div>
        </section>

    </header>
    `;
}

createHeader();