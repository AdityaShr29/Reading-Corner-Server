import React from "react";
import { Link } from "react-router-dom";

function Footer(){

    // function handleMailClick(e){
    //     window.location.href = mailto
    // }

    return (
        <div className="footer">
            <p>©️ Arpit Shrivastava</p>
            <p>Reach out at: <Link to='javascript:void(0)'
                                   onClick={() => window.location = 'mailto:arpit.shrivastava2803@gmail.com'}
                                   style={{color: "white"}}>
                                   arpit.shrivastava2803@gmail.com
                             </Link>
            </p>
        </div>
    );
}

export default Footer;