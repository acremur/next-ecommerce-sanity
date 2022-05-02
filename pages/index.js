import { FooterBanner, HeroBanner, Product } from "../components"
import { client } from '../lib/client'

const Home = ({products, banner }) => {
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]} />

      <div className='products-heading'>
        <h2>Best Seller Products</h2>
        <p>Speakers of many variantions</p>
      </div>

      <div className='products-container'>
        {products?.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={banner.length && banner[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]'
  const products = await client.fetch(productsQuery)

  const bannerQuery = '*[_type == "banner"]'
  const banner = await client.fetch(bannerQuery)

  return {
    props: {
      products,
      banner
    }
  }
}

export default Home