import React, { useEffect } from "react";

function Deletebook(){

    const url = window.location.pathname;

    useEffect(() => {
        fetch("https://reading-corner-server-2.onrender.com"+url)
    }, []);

    return (
        <div style={{position: "absolute",
                     top: "48%",
                     left: "30%"
        }}>
            <h1>Your book has been deleted succcessfully!</h1>
            <p style={{color: "#10BEB9"}}>Directing you to all books...</p>
        </div>
    );
}

export default Deletebook;