import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX from "../components/HeaderX";

function Channels(props) {
  return (
    <Root>
      <HeaderX
        style={{
          height: 80,
          boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
        }}
        icon2Family="Feather"
        icon2Name="search"
      ></HeaderX>
      <Body>
        <Tabs>
          <Following>
            <ButtonOverlay>
              <Text>Following</Text>
            </ButtonOverlay>
          </Following>
          <Popular>
            <ButtonOverlay>
              <Text2>Popular</Text2>
            </ButtonOverlay>
          </Popular>
          <Button>
            <ButtonOverlay>
              <Text3>Explore</Text3>
            </ButtonOverlay>
          </Button>
        </Tabs>
        <Categories>
          <Button2RowColumn>
            <Button2Row>
              <Button2>
                <ButtonOverlay>
                  <Image>
                    <Rect8Filler></Rect8Filler>
                    <Rect8>
                      <Text22>SCIENCE</Text22>
                    </Rect8>
                  </Image>
                </ButtonOverlay>
              </Button2>
              <Button2Filler></Button2Filler>
              <Button3>
                <ButtonOverlay>
                  <Image2Stack>
                    <Image2
                      src={require("../assets/images/chips-circuit-circuit-board-343457.jpg")}
                    ></Image2>
                    <Rect82>
                      <Text23>TECHNOLOGY</Text23>
                    </Rect82>
                  </Image2Stack>
                </ButtonOverlay>
              </Button3>
            </Button2Row>
            <Button4Row>
              <Button4>
                <ButtonOverlay>
                  <Image3>
                    <Rect83Filler></Rect83Filler>
                    <Rect83>
                      <Text24>FASHION</Text24>
                    </Rect83>
                  </Image3>
                </ButtonOverlay>
              </Button4>
              <Button4Filler></Button4Filler>
              <Button5>
                <ButtonOverlay>
                  <Image4>
                    <Rect84Filler></Rect84Filler>
                    <Rect84>
                      <Text25>FINANCE</Text25>
                    </Rect84>
                  </Image4>
                </ButtonOverlay>
              </Button5>
            </Button4Row>
          </Button2RowColumn>
          <Button2RowColumnFiller></Button2RowColumnFiller>
          <Button7Row>
            <Button7>
              <ButtonOverlay>
                <Image22>
                  <Rect85Filler></Rect85Filler>
                  <Rect85>
                    <Text26>ENVIRONMENT</Text26>
                  </Rect85>
                </Image22>
              </ButtonOverlay>
            </Button7>
            <Button7Filler></Button7Filler>
            <Button6>
              <ButtonOverlay>
                <Image32>
                  <Rect86Filler></Rect86Filler>
                  <Rect86>
                    <Text27>AUTO</Text27>
                  </Rect86>
                </Image32>
              </ButtonOverlay>
            </Button6>
          </Button7Row>
        </Categories>
      </Body>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: rgb(255,255,255);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Body = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Tabs = styled.div`
  height: 80px;
  background-color: rgba(31,178,204,1);
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  elevation: 0px;
  shadow-radius: 0px;
  display: flex;
  box-shadow: 0px 0px 0px  0px rgba(0,0,0,1) ;
`;

const Following = styled.div`
  width: 100px;
  height: 38px;
  background-color: rgba(247,247,247,0);
  align-self: center;
  border-radius: 5px;
  border-color: rgba(255,255,255,1);
  border-width: 1px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border-style: solid;
`;

const Text = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  align-self: center;
`;

const Popular = styled.div`
  width: 100px;
  height: 38px;
  background-color: rgba(247,247,247,0);
  align-self: center;
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const Text2 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  align-self: center;
`;

const Button = styled.div`
  width: 100px;
  height: 38px;
  background-color: rgba(247,247,247,0);
  align-self: center;
  border-radius: 100px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  border: none;
`;

const Text3 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  align-self: center;
`;

const Categories = styled.div`
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const Button2 = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url(${require("../assets/images/astronaut-astronomy-cosmos-2156.jpg")});
  background-size: cover;
`;

const Rect8Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect8 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text22 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 14px;
  align-self: center;
`;

const Button2Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Button3 = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image2 = styled.img`
  top: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  bottom: 1px;
  object-fit: cover;
`;

const Rect82 = styled.div`
  left: 0px;
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  position: absolute;
  right: 0px;
  bottom: 0px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text23 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 14px;
  align-self: center;
`;

const Image2Stack = styled.div`
  flex: 1 1 0%;
  margin-bottom: -1px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Button2Row = styled.div`
  height: 150px;
  flex-direction: row;
  display: flex;
`;

const Button4 = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image3 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url(${require("../assets/images/accessories-accessory-boots-322207.jpg")});
  background-size: cover;
`;

const Rect83Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect83 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Text24 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 14px;
  align-self: center;
`;

const Button4Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Button5 = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Image4 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  background-image: url(${require("../assets/images/cash-cent-child-1246954.jpg")});
  background-size: cover;
`;

const Rect84Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect84 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
`;

const Text25 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 14px;
  margin-top: 7px;
  align-self: center;
`;

const Button4Row = styled.div`
  height: 150px;
  flex-direction: row;
  display: flex;
  margin-top: 40px;
`;

const Button2RowColumn = styled.div`
  flex-direction: column;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
`;

const Button2RowColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Button7 = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  align-self: flex-end;
  border: none;
`;

const Image22 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: -1px;
  margin-top: 1px;
  height: 100%;
  background-image: url(${require("../assets/images/conifers-daylight-environment-1666021.jpg")});
  background-size: cover;
`;

const Rect85Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect85 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  margin-bottom: 1px;
`;

const Text26 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 14px;
  margin-top: 7px;
  align-self: center;
`;

const Button7Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Button6 = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgba(230, 230, 230,1);
  elevation: 18px;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  align-self: flex-end;
  border: none;
`;

const Image32 = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: -1px;
  margin-top: 1px;
  height: 100%;
  background-image: url(${require("../assets/images/architecture-audi-automotive-1545743.jpg")});
  background-size: cover;
`;

const Rect86Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect86 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
`;

const Text27 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 14px;
  margin-top: 6px;
  align-self: center;
`;

const Button7Row = styled.div`
  height: 150px;
  flex-direction: row;
  display: flex;
  margin-bottom: 30px;
  margin-left: 15px;
  margin-right: 15px;
`;

export default Channels;
