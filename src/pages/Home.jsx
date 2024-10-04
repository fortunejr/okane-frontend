import '../styles/Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <>
         <div className="head">
            <div className='inner-head'>
                <div className='head-content'>
                <h2>Invest and watch your money grow like grass</h2>
                <p>Okane is digital investment service where you can buy some securities which increases or decreases according to demand and supply.</p>
                </div>
                <img src="/images/money.png" alt='money icon'></img>
            </div>
                <Link className='get-started' to="/login">Get Started</Link>
         </div>
         <div className="about">
            <p>Okane is a digital investment platform designed to empower individuals in Nigeria by providing accessible investment opportunities that foster financial growth. In a country where poverty levels are high and many struggle with financial stability, Okane serves as a crucial tool for economic empowerment.</p>
        </div>
        <div className='how'>
            <div>
            <h3>How does it work?</h3>
            <p>When a new user signs up on the platform each user is allowed to purchase assets and shares of comapanies in Nigeria and abroad. The prices of these assets and shares are liable to increase over time and users can sell them for profit. It uses the idea of the stock market</p>
            </div>
            <img src="/images/stocks.jpg" alt='money icon'></img>
        </div>
         </>
    )
}

export default Home