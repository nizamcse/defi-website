import { Row,Col } from 'antd';
import {useState} from 'react';
import { useTranslation } from 'react-i18next';
    
function LoginInfo() {
  const [t,i18n] = useTranslation();
  const [use,setUser] = useState(JSON.parse(localStorage.getItem("userInfo")));
  return (
    <Col span={22} offset={1} className="mt-8 myColor1 text-sm">
      <Row>
        <Col span={20}>
         {t('Username')} 
        </Col>
      </Row>

      <Row className="text-lg font-bold">
        <Col span={24}>
          {t(use.email)}
        </Col>
      </Row>
    </Col>
  );
}

export default LoginInfo;