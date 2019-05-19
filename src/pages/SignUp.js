import React, { Component } from 'react';
import styled from 'styled-components';
import './SignUp.css';
import logo from '../assets/images/logo-red.svg';

const ButtonPrimary = styled.button`
  margin-top: 30px;
  background-color: #e5556e;
  width: 318px;
  height: 50px;
  border-style: none;
  border-radius: 50px;
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div className="signup-container">
        <form onSubmit={this.handleSubmit}>
          <h1>
            <img className="logo-red" src={logo} alt="MeetApp" />
          </h1>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Digite seu nome"
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Digite seu e-mail"
          />

          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />
          <ButtonPrimary className="button-primary">Criar conta</ButtonPrimary>
          <button className="button-secondary">Já tenho conta</button>
        </form>
      </div>
    );
  }
}
