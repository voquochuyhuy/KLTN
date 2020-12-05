import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
// import Schedule from "@material-ui/icons/Schedule";
// import Info from "@material-ui/icons/Info";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Gavel from "@material-ui/icons/Gavel";
// import HelpOutline from "@material-ui/icons/HelpOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
// import Accordion from "components/Accordion/Accordion.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import bgGame1 from "assets/img/lucky-spin.jpg";
import bgGame2 from "assets/img/lucky-draw.jpg";

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center"
  },
  cardCategory: {
    margin: "0",
    color: "#999999"
  }
};
class Game extends Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader>
              <h4
                style={{ "font-weight": "bold" }}
                className={classes.cardTitle}
              >
                Vòng quay may mắn
              </h4>
            </CardHeader>
            <CardBody>
              <NavPills
                color="warning"
                tabs={[
                  {
                    tabButton: "Trò chơi",
                    tabContent: (
                      <div>
                        <img src={bgGame1} alt="..." style={{ width: "99%" }} />

                      </div>
                    )
                  },
                  {
                    tabButton: "Mô tả",
                    tabContent: (
                      <span>
                        <p>
                          VQMM đã trở lại đây, hàng nghìn giải thưởng đã được
                          gửi đến các Quý khách hàng thân yêu. Cùng chơi nào!!
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </CardBody>
            <CardFooter style={{ "justify-content": "flex-end" }}>
              <Button color="warning" round>
                Play
              </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader>
              <h4
                style={{ "font-weight": "bold" }}
                className={classes.cardTitle}
              >
                Quay số may mắn
              </h4>
            </CardHeader>
            <CardBody>
              <NavPills
                color="warning"
                tabs={[
                  {
                    tabButton: "Trò chơi",
                    tabContent: (
                      <div>
                        <img src={bgGame2} alt="..." style={{ width: "99%" }} />
                      </div>
                    )
                  },
                  {
                    tabButton: "Mô tả",
                    tabContent: (
                      <span>
                        <p>Quay số may mắn</p>
                      </span>
                    )
                  }
                ]}
              />
            </CardBody>
            <CardFooter style={{ "justify-content": "flex-end" }}>
              <Button color="warning" round>
                Play
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}
export default withStyles(styles)(Game);
