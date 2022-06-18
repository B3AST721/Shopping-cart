import bootstrap from '/home/jaheel/Shopping-cart/src/images/bootstrap.svg';
import Bag from '/home/jaheel/Shopping-cart/src/images/bag-fill.svg';
import Cart from '/home/jaheel/Shopping-cart/src/images/cart-fill.svg';

function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a class="navbar-brand" href="#">
        <img src={bootstrap} width='30' height='30' alt='' />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link d-flex align-items-center" href="#"><img className='mr-2' src={Bag} width='25' height='25' alt='' /> Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link d-flex align-items-center" href="#"><img className='mr-2' src={Cart} width='25' height='25' alt='' /> Cart</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    
  );
}

export default App;
