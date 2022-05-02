import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import Cart from './Cart'

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext()
  
  return (
    <div className='navbar-container'>
      <p>
        <Link href='/'>
          <img 
            style={{ cursor: 'pointer' }}
            src="https://i.pinimg.com/originals/67/2d/e8/672de87e96f5bfc022d030be7cf1a7c1.png" 
            alt="logo" 
            width={50}
            height={50}
          />
        </Link>
      </p>
      <button 
        type='button' 
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar