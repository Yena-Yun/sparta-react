import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3,
    }
  }

  addNemo = () => {
    //setState로 기존 초기값 count에 1을 더해줌
    this.setState({ count: this.state.count + 1 });
  }

  removeNemo = () => {
    //네모갯수가 0보다 클 때만 빼는 동작 수행
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    
    //네모갯수가 0개라면 alert만 띄움
    } else {
      alert("네모가 없어요!");
    }
  }

  render() {
    // Array.from()은 배열을 만들고 초기화까지 해주는 내장 함수
    // 1항 = {length: 원하는 길이} 
    // 2항 = 원하는 값을 반환하는 callBack 함수
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => i);

    return (
      <div className="App">
        {nemo_count.map((num, idx) => {
          return (
            <div key={idx}
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#ddd",
                margin: "10px",
              }}
            >
              nemo
            </div>
          );
        })}

        <div>
          <button onClick={this.addNemo}>하나 추가</button>
          <button onClick={this.removeNemo}>하나 빼기</button>
        </div>
      </div>
    );
  }
}

export default App;
