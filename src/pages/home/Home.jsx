import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Col, Row, Input, Button } from 'antd';
import { fetchTodos } from '../../redux/actions/todos';
import '../../assets/styles/styles.css';

// conectar com redux e chamar action

const { TextArea } = Input;

class Home extends Component {
  static propTypes = {
    todos: PropTypes.objectOf(PropTypes.any),
    onFetchTodos: PropTypes.func.isRequired,
  };

  static defaultProps = {
    todos: {},
  };

  componentDidMount() {
    this.props.onFetchTodos();
  }

  renderTodos = () => {
    const todos = this.props.todos.ids.map(id => (
      <div key={id}>
        <h3>{this.props.todos.content[id].id}</h3>
        <p>{this.props.todos.content[id].content}</p>
        <hr />
      </div>
    ));
    return todos;
  }

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <Row gutter={16}>
          <Col span={24}>
            <Card
              title="TODO LIST"
              className="margin-bottom-16"
              bordered={false}
            >
              <div>
                <TextArea rows={4} id="todoListInput" placeholder="Enter your TODO item" />
                <Button id="todoListSAddButton">Normal</Button>
              </div>
              <div>
                {this.renderTodos()}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

/**
* @description Map the state from redux store to the component props
* @param {Object} state The state from redux store
* @returns {Object} The object which will be appended to props
*/
const mapStateToProps = ({ todos }) => ({
  todos,
});

/**
* @description Map the functions which will be dispatched to redux reducers to the component props
*/
const mapDispatchToProps = {
  onFetchTodos: fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
