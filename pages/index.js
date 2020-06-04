import Layout from "../components/AppLayout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ItemCard from "../components/ItemCard";
import { getToken, guest } from "../utils/auth";
import { Alert } from "reactstrap";
import axios from "axios";
import socketIOClient from "socket.io-client";
import React from "react";

const apiConfig = require("../api-config");
const socket = socketIOClient(apiConfig.serverUrl);

class Index extends React.Component {
  constructor(props) {
    super(props);
    var token = this.props.token;
    this.getUser(token);
    this.getActiveSales();
    this.state = {
      loggedIn: !!token,
      user: {
        nameSurname: "",
      },
      sales: [],
      serverDown: false,
    };
  }
  componentDidMount() {
    socket.on("update sales", () => {
      this.getActiveSales();
    });
  }
  getUser(token) {
    const url = apiConfig.serverUrl + "/user/get";
    axios
      .post(
        url,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((response) => {
        this.setState({
          user: response.data.user,
        });
      })
      .catch(
        function (error) {
          if (!error.response)
            this.setState({
              serverDown: true,
            });
          console.log(error);
        }.bind(this)
      );
  }
  getActiveSales() {
    const url = apiConfig.serverUrl + "/sales";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          sales: response.data.sales,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const sales = this.state.sales.map((sale) => <ItemCard sale={sale} />);
    return (
      <Layout page="home" user={this.state.user} loggedIn={this.state.loggedIn}>
        <div
          className="container bg-white"
          style={{ padding: "3%", marginTop: "3%" }}
        >
          <h2> Online Auction Application</h2>
          <hr />
          {this.state.serverDown ? (
            <Alert
              style={{ fontFamily: "verdana", fontSize: "17px" }}
              color="info"
            >
              We are unable to service due to the problem with our servers. We
              will be back very soon. Thank you for your understanding.
            </Alert>
          ) : (
            <p
              style={{
                fontFamily: "verdana",
                fontSize: "17px",
                marginBottom: "20px",
              }}
            >
              You can offer your products to auction on our platform, or you can
              have the opportunity to buy valuable products by participating in
              active auctions. You can make an offer if you go on sale by
              choosing the products below that interest you.
            </p>
          )}

          <hr></hr>
          <div className="row">{sales}</div>
        </div>
      </Layout>
    );
  }
}

Index.getInitialProps = async (ctx) => {
  // Check user's session
  const token = getToken(ctx);

  return { token };
};

export default Index;
