import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
<img src="https://media.licdn.com/dms/image/C4E0BAQHZvBVomvR5ww/company-logo_100_100/0/1535114460296?e=1691020800&v=beta&t=psdul2Nk1DmlNCWPn2OdH_H5cdMmnJPh6RRtpWJbIYk" />
      <h5>  Triple Threat Leadership - Personal Branding 101 - The Branding of ME!</h5>
        

      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
<img src="https://media.licdn.com/dms/image/C560BAQHMVfed1djuQA/company-logo_100_100/0/1634816790343?e=1691020800&v=beta&t=ha-QsBg_AZmKQ2q8mMj_9M9PRovl162HWfXqajav2lU" />    
     <h5> Certified in Computer Fundamentals (Foundation)</h5>
      </Col>

       <Col xs={4} md={2} className="tech-icons">
<img src="https://media.licdn.com/dms/image/C560BAQHMVfed1djuQA/company-logo_100_100/0/1634816790343?e=1691020800&v=beta&t=ha-QsBg_AZmKQ2q8mMj_9M9PRovl162HWfXqajav2lU" />   
       <h5>Certified in JavaScript Programming</h5>
       </Col>
       <Col xs={4} md={2} className="tech-icons">
<img src="https://media.licdn.com/dms/image/C4E0BAQHAzidYsIKzTw/company-logo_100_100/0/1572356795552?e=1691020800&v=beta&t=nlVklyB0A_ImXtqq-j0hUmiiLSnwzGG1lbwyn1Z37CE" />   
       <h5>FOUNDATIONS IN PERSONAL FINANCE </h5>
       </Col>
    </Row>
  );
}

export default Toolstack;
