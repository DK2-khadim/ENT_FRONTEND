import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <span>
                  ENT GUIDE
                </span>
              </li>
              <li>
                <span>
                  About EPT
                </span>
              </li>
              <li>
                <span>
                  Blog
                </span>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            &copy; copyright 2020 by 45promo GIT.
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
