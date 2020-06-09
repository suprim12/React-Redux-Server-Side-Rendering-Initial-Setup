import React from 'react'
import MainLayout from '../../components/hoc/MainLayout'
import BreadCrumb from '../../components/BreadCrumb'

const GeneralTests = () => {
    return (
        <MainLayout>
            <section className="tests-collections">
                <div className="wrapper">
                    <BreadCrumb></BreadCrumb>
                    General Tests
                </div>
            </section>
        </MainLayout>
    )
}

export default GeneralTests
