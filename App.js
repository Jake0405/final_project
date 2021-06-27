import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      company: '',
      quantity: '',
      price: '',
      num: 1,
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      company: this.state.company,
      price: this.state.price,
      quantity: this.state.quantity
    });

    this.setState({
      items,
      company: '',
      price: '',
      quantity: ''
    });
  };
 
  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Table items={ this.state.items }/>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newCompany={ this.state.company }
          newPrice={ this.state.price }
          newQuantity={ this.state.quantity } />
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="company">
          회사명:
          <input id="company" value={this.props.newCompany} 
            type="text" name="company"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="price">
          가격:
          <input id="price" value={this.props.newPrice} 
            type="text" name="price"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="quantity">
          수량:
          <input id="Quantity" value={this.props.newQuantity} 
            type="text" name="quantity"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">추가</button>
        </form>
      </div>
    );
  }
}

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 1
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        list: prevState.list.filter(li => !li.value)
      };
    });
  };

  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <thead>
            <th>회사명</th>
            <th>가격($)</th>
            <th>수량(개)</th>
          </thead>
          <tbody>
            {
              items && items.map(item => {
                return (
                  <tr>
                    <td>{item.company}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <button onClick={this.handleClick}>삭제</button>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(<Table />, document.getElementById('root'));

export default App;