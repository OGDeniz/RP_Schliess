import React from 'react';
import Link from 'next/link';

export default function Navigation() {
return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>essen</li>
                <li>trinken</li>
                <li>dessert</li>
                <li>salate</li>
            </ul>    
          
        </div>
    </nav>
        
    </div>
)
}