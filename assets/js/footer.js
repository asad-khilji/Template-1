const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer>

    <div class="row">
    <div class="col-4">
    <a href="index.html">
        <img src="" alt="Logo" width="100%">
        </a>
    </div>

    <div class="col-4">
      <h3>MAILING ADDRESS</h3>
      <p>Companyn Name</p>
      <p>Street Address</p>
      <p>City, State Zip Code</p>
      <p>Toll Free: (800) 555-3333</p>
      <p>Fax: (324) 354-6567</p>
      <p>Email: email@gmail.com</p>
    </div>

    <div class="col-4">
      <h3>QUICK LINKS</h3>
      <a href="#"><p>Become a Dealer</p></a>
      <a href="#"><p>Dealer Login</p></a>
      <a href="#"><p>FAQ</p></a>
      <a href="#"><p>About us</p></a>
      <a href="#"><p>Return Policy</p></a>
      <a href="#"><p>Search</p></a>
      <a href="#"><p>Privacy Policy</p></a>
      <a href="#"><p>Terms of Service</p></a>
    </div>

    <div class="col-4">
      <h3>FOLLOW US</h3>
      <a href="#"><p>Facebook</p></a>
      <a href="#"><p>Instagram</p></a>
    </div>
  </div>

  </footer>
    `;
}

createFooter();