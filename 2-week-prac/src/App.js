import React from 'react';
import BucketList from './BucketList';
import styled from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
  }
  
  render() {
    return (
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <BucketList list={this.state.list} />
      </Container>
    );
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.div`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;