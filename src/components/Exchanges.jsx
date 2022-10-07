import React from 'react';

import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';



const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
 
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        
          <Col span={24}>
            
              
                {HTMLReactParser('----')}
              
          </Col>
        
      </Row>
    </>
  );
};

export default Exchanges;
