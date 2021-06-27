import React from 'react';
import ReactDOM from 'react-dom';

class stocks extends React.Component {
  state = {
    num: 0
  };
  shoot = (sign) => {
    this.setState ((pre) => {
      return {
        num: sign
      }
    });
  }

  render() {
    if (this.state.num == 1) {
      return (
        <>
        <div>
          <button onClick = {() => this.shoot("1")}>반도체</button>
          <button onClick = {() => this.shoot("2")}>바이오</button>
          <button onClick = {() => this.shoot("3")}>자동차</button>
        <table>
          <thead>
            <tr>
              <th>회사명</th><th>주가($)</th><th>전일 대비 상승률(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TSMC</td><td>117.62</td><td>-0.54</td>
            </tr>
            <tr>
              <td>인텔</td><td>57.10</td><td>-0.48</td>
            </tr>
            <tr>
              <td>AMD</td><td>81.88</td><td>+0.37</td>
            </tr>
            <tr>
              <td>NVIDIA</td><td>709.46</td><td>+1.78</td>
            </tr>
          </tbody>
        </table>
        </div>
        </>
      )
    }
    if (this.state.num == 2) {
      return (
        <>
        <div>
          <button onClick = {() => this.shoot("1")}>반도체</button>
          <button onClick = {() => this.shoot("2")}>바이오</button>
          <button onClick = {() => this.shoot("3")}>자동차</button>
        <table>
          <thead>
            <tr>
              <th>회사명</th><th>주가($)</th><th>전일 대비 상승률(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TSMC</td><td>117.62</td><td>-0.34</td>
            </tr>
            <tr>
              <td>인텔</td><td>57.10</td><td>-0.48</td>
            </tr>
            <tr>
              <td>AMD</td><td>81.88</td><td>+0.37</td>
            </tr>
            <tr>
              <td>NVIDIA</td><td>709.46</td><td>+1.78</td>
            </tr>
          </tbody>
        </table>
        </div>
        </>
      )
    }
    if (this.state.num == 3) {
    return(
      <>
        <div>
        <button onClick = {() => this.shoot("1")}>반도체</button>
        <button onClick = {() => this.shoot("2")}>바이오</button>
        <button onClick = {() => this.shoot("3")}>자동차</button>
        <table>
          <thead>
            <tr>
              <th>회사명</th><th>주가($)</th><th>전일 대비 상승률(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TSMC</td><td>117.62</td><td>-0.54</td>
            </tr>
            <tr>
              <td>인텔</td><td>57.10</td><td>-0.48</td>
            </tr>
            <tr>
              <td>AMD</td><td>81.88</td><td>+0.37</td>
            </tr>
            <tr>
              <td>NVIDIA</td><td>709.46</td><td>+1.78</td>
            </tr>
          </tbody>
        </table>
        </div>
      </>
      );
    }
    return (
      <>
        <div>
          <button onClick = {() => this.shoot("1")}>반도체</button>
          <button onClick = {() => this.shoot("2")}>바이오</button>
          <button onClick = {() => this.shoot("3")}>자동차</button>
        </div>
      </>
    )
  }
}


ReactDOM.render(<stocks />, document.getElementById('root'));

export default stocks;
