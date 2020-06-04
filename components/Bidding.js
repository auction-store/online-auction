import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLiraSign } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  Button,
  Fade,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Countdown from "react-countdown-now";
import Countdown from "./Countdown";
import Currency from "react-currency-formatter";

class Bidding extends React.Component {
  render() {
    const horizontalRule =
      this.props.loggedIn || this.props.saleOwner || this.props.maxBidder ? (
        <hr />
      ) : (
        ""
      );

    let biddingInput;
    if (this.props.finishedSale || this.props.saleOwner) {
      biddingInput = "";
    } else if (!this.props.loggedIn) {
      biddingInput = (
        <div>
          <hr />
          <h5 className="text-center mb-3">Give offer</h5>
          <p className="text-center">
            Teklif vermek için
            <Link href={"/registration"}>
              <a className="text-dark underline"> sign up</a>
            </Link>{" "}
            veya
            <Link href={"/login"}>
              <a className="text-dark"> login</a>
            </Link>
          </p>
        </div>
      );
    } else if (this.props.maxBidder) {
      biddingInput = (
        <div>
          <hr />
          <h5 className="text-center mb-3">Give offer</h5>
          <p> Currently, the highest bid is your bid. </p>
        </div>
      );
    } else {
      biddingInput = (
        <div>
          <hr />
          <div className="text-center justify-content-md-center">
            <h5 className="text-center mb-3">Give offer</h5>
            <Form>
              <FormGroup>
                <InputGroup style={{ width: "60%", marginLeft: "20%" }}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>₺</InputGroupText>
                  </InputGroupAddon>
                  <Input
                    className="text-center"
                    bgSize="sm"
                    type="number"
                    form="nanana"
                    name="bid"
                    onChange={this.props.handleInputChange}
                    onKeyDown={this.props.handleKeyDown}
                    placeholder="Your bid"
                  />
                </InputGroup>
                <Fade
                  in={this.props.biddingFade.in}
                  tag="p"
                  className="mt-3 text-danger"
                >
                  {this.props.biddingFade.message}
                </Fade>
              </FormGroup>
              <Button onClick={this.props.handleNewBid} color="dark">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      );
    }
    let biddingInfo;
    if (!this.props.finishedSale) {
      biddingInfo = <Countdown date={this.props.endDate} />;
    } else if (this.props.maxBidder) {
      biddingInfo = <p className="text-center mt-3 text-success">You won</p>;
    } else {
      biddingInfo = <p className="text-center mt-3 text-danger">Closed</p>;
    }

    let maxBidInfo =
      this.props.maxBid.amount in [null, 0] ? (
        "There was no bidder"
      ) : (
        <span>
          {this.props.maxBid.bidder.nameSurname}:{" "}
          <Currency
            quantity={this.props.maxBid.amount}
            currency="TRY"
            pattern="##,### !"
          />
        </span>
      );
    return (
      <div>
        <h4 className="text-center">Highest bid</h4>

        <p className="text-center">{maxBidInfo}</p>
        {biddingInput}
        <hr />
        {biddingInfo}
      </div>
    );
  }
}

export default Bidding;
