import React, { Component } from 'react';
import logo from '../../assets/images/logo-red.svg';
import Button from '../../components/Button';

import { Container, Logo, Form } from './styles';

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
    const { name, email, password } = this.state;
    return (
      <Container>
        <Logo>
          <img className="logo-red" src={logo} alt="MeetApp" />
        </Logo>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Digite seu nome"
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Digite seu e-mail"
          />

          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />
          <Button type="submit">Criar conta</Button>
          <Button secondary type="submit">
						Já tenho conta
          </Button>
        </Form>
      </Container>
    );
  }
}