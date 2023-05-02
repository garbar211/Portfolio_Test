import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
<img src="https://media.licdn.com/dms/image/C4E0BAQHZvBVomvR5ww/company-logo_100_100/0/1535114460296?e=1691020800&v=beta&t=psdul2Nk1DmlNCWPn2OdH_H5cdMmnJPh6RRtpWJbIYk" />
        Triple Threat Leadership - Personal Branding 101 - The Branding of ME!

      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
<img src="https://media.licdn.com/dms/image/C560BAQHMVfed1djuQA/company-logo_100_100/0/1634816790343?e=1691020800&v=beta&t=ha-QsBg_AZmKQ2q8mMj_9M9PRovl162HWfXqajav2lU" />    
      Certified in Computer Fundamentals (Foundation)
      </Col>

       <Col xs={4} md={2} className="tech-icons">
<img src="https://media.licdn.com/dms/image/C560BAQHMVfed1djuQA/company-logo_100_100/0/1634816790343?e=1691020800&v=beta&t=ha-QsBg_AZmKQ2q8mMj_9M9PRovl162HWfXqajav2lU" />   
       Certified in JavaScript Programming
       </Col>
      
    </Row>
  );
}

export default Toolstack;
