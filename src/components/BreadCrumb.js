import React from 'react'
import { Link, useLocation } from 'react-router-dom';
const BreadCrumb = () => {
    const location = useLocation();
    let str = location.pathname.replace('/', '');
    let strarr = [...str.split('/')];
    return (
        <ul className="breadcrumb">
            <li>
                <Link to="/">Home</Link>
            </li>
            {strarr && strarr.map((item, i) => {
                if (strarr.length === i + 1) {
                    return (
                        <li key={item} >
                            <span >
                                {item}
                            </span>
                        </li>
                    )
                } else {
                    return (
                        <li key={item}>
                            <Link to={`/${item}`}>
                                {item}
                            </Link>
                        </li>
                    )
                }
            })}
        </ul>
    )
}

export default BreadCrumb


