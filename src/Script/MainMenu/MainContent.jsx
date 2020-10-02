import React from 'react';
import { Card, Space, Row, Col,Divider } from 'antd';

const MainContent = () => {

    
    const cardstyle={
        boxShadow: "2px 2px 4px grey",
        marginTop:20,
        marginBottom:20,
        height :200
    }

    return (
        <>
            <div>
                <div id="cards">
                    <Row gutter={16}>
                    <Col span={12}>
                        <Card title={"Card title"} style={cardstyle}>
                            this is card
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card title={"Card title"} style={cardstyle}>
                            this is card
                        </Card>
                    </Col>


                </Row>
                <br></br>
                </div>
                <div id="Context">
                    <h2>
                        Check
                    </h2>
                </div>
                <Divider></Divider>
                <div style={{
                    margin:10
                }}>
                    this is the way
                </div>
            </div>


        </>


    );


}

export default MainContent;