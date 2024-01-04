import { useState } from 'react';
import './App.css';
import { Card, CardTop, CardWrapper, Container, CTopText, CTopTitle, Desrcption, Logo, Shoes, ShowOne, ShowTwo, Wrapper } from './Style';
import Brand from './assets/nike.png';
import Shoe1 from './assets/Shoe1.jpg';
import Shoe2 from './assets/Shoe2.jpg';
function App() {

  const [currentColor, setCurrentColor] = useState(1);
  return (
    <div className="App">
      <Wrapper>
          <Container>
            <CardWrapper>
              <Card>
                <CardTop currentColor={currentColor}>
                  <Logo src={Brand} alt="logo"/>
                  <CTopText>
                    <CTopTitle>React 55</CTopTitle>
                    <Desrcption>
                      The Nike React 55 SE is a balanced blend of classic design and forward looking innovation.
                    </Desrcption>
                  </CTopText>
                  <Shoes>
                    <ShowOne src={Shoe1} alt="shoe-1"/>
                    <ShowTwo src={Shoe2} slt="shoe-2"/>
                  </Shoes>
                </CardTop>
              </Card>
            </CardWrapper>
          </Container>
      </Wrapper>
    </div>
  );
}

export default App;
