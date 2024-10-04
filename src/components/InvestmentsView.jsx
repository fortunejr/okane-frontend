import React from "react";
import Investments from "../pages/Investments";
import { Link } from "react-router-dom";

function InvestmentView({investment}) {
    return ( 
        <div className="investment-container">
            <Link to={`/investments/${investment.id}`}>
                <p className="investment-title">{investment.name}</p>
                <p className="investment-desc">{investment.description}</p>
                <p className="investment-desc">{investment.price}</p>
            </Link>
            <Link to={`/investments/buy/${investment.id}`}>Buy</Link>
        </div>
    )
}

export default InvestmentView