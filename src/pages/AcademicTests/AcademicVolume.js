import React from 'react'
import MainLayout from '../../components/hoc/MainLayout'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom';
const AcademicVolume = () => {
    return (
        <MainLayout>
            <section className="volume-collections">
                <div className="wrapper">
                    <BreadCrumb></BreadCrumb>
                    <table className="volume-collections--table">
                        <thead className="volume-collections--table--header">
                            <tr>
                                <th>PRACTICE MODULES</th>
                                <th>Listening</th>
                                <th>Reading</th>
                                <th>Writing</th>
                                <th>Speaking</th>
                            </tr>
                        </thead>
                        <tbody className="volume-collections--table--items">
                            <tr className="volume-collections--table--item">
                                <td className="volume-collections--table--item-title">
                                    Practice Test 1
                                </td>
                                <td>
                                    <Link to="/test/listening/test1" className="btn">Take Test</Link>
                                </td>
                                <td>
                                    <Link to="/test/reading/test1" className="btn">Take Test</Link>
                                </td>
                                <td>
                                    <Link o="/test/writing/test1" className="btn">Take Test</Link>
                                </td>
                                <td>
                                    <Link to="/test1" className="btn">Take Test</Link>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
        </MainLayout>
    )
}

export default AcademicVolume
