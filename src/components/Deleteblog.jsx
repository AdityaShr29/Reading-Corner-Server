import React, { useEffect } from "react";

function Deleteblog(){

    const url = window.location.pathname;

    useEffect(() => {
        fetch("https://reading-corner-server-2.onrender.com"+url)
    }, []);

    return (
        <div style={{position: "absolute",
                     top: "50%",
                     left: "35%"
        }}>
            <h1>Your blog has been deleted succcessfully!</h1>
            <p>Directing you to all blogs...</p>
        </div>
    );
}

export default Deleteblog;