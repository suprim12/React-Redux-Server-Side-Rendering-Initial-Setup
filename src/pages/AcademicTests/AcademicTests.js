import React from 'react'
import MainLayout from '../../components/hoc/MainLayout'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
const AcademicTests = () => {
    return (
        <MainLayout>
            <section className="tests-collections">
                <div className="wrapper">
                    <BreadCrumb></BreadCrumb>
                    <div className="tests-collections--items">
                        <h1><Link to="/academic/ielts-mock-test-2020">IELTS Mock Test 2020</Link></h1>
                    </div>
                    <div className="tests-collections--items">
                        <h1><Link to="/academic/ielts-recent-actual-test-answers">IELTS Recent Actual Test With Answers</Link></h1>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default AcademicTests
