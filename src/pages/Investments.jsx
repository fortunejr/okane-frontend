import React from "react"
import api from "../api"
import { useState,useEffect } from "react"
import { useFetcher } from "react-router-dom"
import InvestmentsView from '../components/InvestmentsView'
import '../styles/Investments.css'

function Investments() {

    const [investments, setInvestments] = useState([])

    useEffect(()=> {
        getInvestments()
    },[])

    const getInvestments = () => {
        api.get('/api/investments/')
        .then((res)=>res.data)
        .then((data)=> {setInvestments(data); console.log(data)})
        .catch((err) => alert(err))
    }

    return <div>
        <div>
            <h2>Investments:</h2>
            {investments.map((investment)=>
            <InvestmentsView investment={investment} key={investment.id}/>)}
        </div>
    </div>
}

export default Investments