import React from 'react'
import SiteHeader from '../SiteHeader'

const MainLayout = (props) => {
    return (
        <React.Fragment>
            <SiteHeader></SiteHeader>
            <main className="site-main">
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default MainLayout
