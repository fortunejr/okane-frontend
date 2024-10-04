import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

function InvestmentDetail() {
    const { id } = useParams();  // Get the ID from the URL
    const [investment, setInvestment] = useState(null);  // Initial state is null
    const [loading, setLoading] = useState(true);  // Loading state

    useEffect(() => {
        const fetchInvestment = async () => {
            try {
                console.log(id)
                const response = await api.get(`/api/investments/${id}/`);  // Fetch the investment by ID
                setInvestment(response.data);  // Set the investment data
            } catch (error) {
                console.error("Error fetching investment:", error);  // Handle any errors
            } finally {
                setLoading(false);  // Stop loading once fetch is complete
            }
        };

        fetchInvestment();  // Call the async function
    }, [id]);  // Dependency array with `id`

    // Display loading message while waiting for data
    if (loading) {
        return <p>Loading...</p>;
    }

    // If no investment is found or it's null, display an error message
    if (!investment) {
        return <p>Investment not found</p>;
    }

    // Once data is loaded, display the investment details
    return (
        <div>
            <h2>{investment?.name}</h2> 
            <p>{investment?.description}</p>
            <p>{investment?.price}</p>
        </div>
    );
}

export default InvestmentDetail;
