import React, { useState } from "react";
import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
} from "reactstrap";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
import ValidationError from "../components/ValidationError";

const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const validator = require("../utils/validations");

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSurname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      validationErrors: {},
      alertMessage: "",
    };
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let errors = this.state.validationErrors;
    errors[name] = "";

    this.setState({
      [name]: value,
      validationErrors: errors,
    });
  }
  handleRegistration() {
    const apiConfig = require("../api-config");
    const url = apiConfig.serverUrl + "/user/save";
    let pass = bcrypt.hashSync(this.state.password, salt);

    let validated = this.validate();
    if (!validated) return;
    axios
      .post(url, {
        nameSurname: this.state.nameSurname,
        email: this.state.email,
        password: pass,
      })
      .then((response) => {
        Router.push("/login?registered=" + this.state.email);
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            alertMessage: error.response.data.message,
          });
        } else {
          this.setState({
            alertMessage:
              "Recording is currently not possible due to a run on the server.",
          });
        }
      });
  }
  validate() {
    let validated = true;
    let errors = this.state.validationErrors;

    if (this.state.nameSurname.length < 5) {
      validated = false;
      errors.nameSurname =
        "You must enter a longer value in the first and last name field.";
    } else if (this.state.nameSurname.length > 50) {
      validated = false;
      errors.nameSurname = "Name and surname can be up to 50 characters.";
    }

    if (!validator.isEmail(this.state.email)) {
      validated = false;
      errors.email = "You did not enter a valid email address";
    }

    if (this.state.password !== this.state.passwordConfirm) {
      validated = false;
      errors.passwordConfirm = "Passwords do not match.";
    }

    if (!validated)
      this.setState({
        validationErrors: errors,
        password: "",
        passwordConfirm: "",
      });

    return validated;
  }
  render() {
    return (
      <Layout page="registration">
        <div
          className="container bg-white"
          style={{ padding: "3%", marginTop: "3%" }}
        >
          <div className="row justify-content-md-center">
            <div className="col-md-4">
              {this.state.alertMessage.length > 0 ? (
                <Alert color="danger">{this.state.alertMessage}</Alert>
              ) : (
                ""
              )}
              <h2 className="text-light bg-dark text-center rounded p-2">
                Register
              </h2>
              <hr />
              <Form>
                <FormGroup>
                  <Input
                    bsSize="lg"
                    type="text"
                    name="nameSurname"
                    value={this.state.nameSurname}
                    onChange={this.handleInputChange}
                    id="nameSurname"
                    placeholder="Enter your name and surname"
                  />
                  <ValidationError
                    message={this.state.validationErrors.nameSurname}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    bsSize="lg"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    id="email"
                    placeholder="Enter your email address"
                  />
                  <ValidationError
                    message={this.state.validationErrors.email}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    bsSize="lg"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    id="password"
                    placeholder="Set password"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    bsSize="lg"
                    type="password"
                    name="passwordConfirm"
                    value={this.state.passwordConfirm}
                    onChange={this.handleInputChange}
                    id="password-confirm"
                    placeholder="Confirm your password"
                  />
                  <ValidationError
                    message={this.state.validationErrors.passwordConfirm}
                  />
                </FormGroup>

                <Button
                  color="secondary"
                  size="lg"
                  onClick={this.handleRegistration}
                  block
                >
                  Complete Registration
                </Button>
              </Form>
              <hr />
              <p>
                Already a member?
                <Link href={"/login"}>
                  <a className="text-dark">Login</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Registration;
