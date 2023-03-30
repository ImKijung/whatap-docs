import React from 'react';
import MDXContent from '@theme/MDXContent';
import {useLocation} from '@docusaurus/router';

export default function IncludeDoc ({children, include}) {
    let prods = include.split(",");
    let location = useLocation();
    let myContents;
    let cProd = location.pathname.split("/")[1];
    let i, prod;
    
    for (i =0; i < prods.length; i ++) {
        // console.log(prods[i]);
        prod = prods[i]
        if (cProd == prod) {
            // console.log("include!!!");
            myContents = children;
            break;
        } else {
            // console.log("not include!!!");
            myContents = "";
        }
    }

    return (
        <MDXContent>
            {myContents}
        </MDXContent>
    );
}