import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import { Redirect } from "react-router-dom";
import InputNormal from './InputNormal';
import PropTypes from "prop-types";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}
const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};
class DialogAddOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  
  handleAddBoard=()=>{
    if(!this.verifyData()) return
    const orgaName = this.orgaName.getValue();
    const address = this.address.getValue();
    const hotline = this.hotline.getValue();
   
    this.props.onConfirm(orgaName,address,hotline);   
    this.props.onCancel();
  }
  verifyData = () =>{
    return this.orgaName.verifyInput() && this.address.verifyInput() && this.hotline.verifyInput();
  }
  render() {
    const { classes } = this.props;
    return (
      <Dialog
        classes={{
          root: classes.center + " " + classes.modalRoot,
          paper: classes.modal
        }}
        open={this.props.open}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description">
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <h4 className={classes.modalTitle}>THÊM TỔ CHỨC</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <InputNormal 
                  ref={ref=>this.orgaName = ref}  
                  placeholder = "Tên tổ chức"
                />
                <InputNormal 
                  ref={ref=>this.address = ref}  
                  placeholder = "Địa chỉ"
                />
                <InputNormal 
                  ref={ref=>this.hotline = ref}  
                  placeholder = "Hotline"
                />
              </CardBody>             
            </Card>
          </GridItem>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button 
            onClick={() => this.props.onCancel()}
            color="transparent"
            simple
          >
            Hủy
          </Button>
          <Button
            color="success"
            onClick={() => this.handleAddBoard()}
            
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
DialogAddOrganization.propTypes = {
  open:PropTypes.bool,
  onConfirm : PropTypes.func,
  onCancel : PropTypes.func

}
export default withStyles(styles)(DialogAddOrganization)
