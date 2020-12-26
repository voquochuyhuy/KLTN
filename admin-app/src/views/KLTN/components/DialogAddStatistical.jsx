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
class DialogAddStatistical extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  
  handleAddBoard=()=>{
    if(!this.verifyData()) return
    const eventName = this.eventName.getValue();
    const cost = this.cost.getValue();
    const numberOfParti = this.numberOfParti.getValue();
    const revenue = this.revenue.getValue();
    const note = this.note.getValue();
    
    this.props.onConfirm(eventName,cost,numberOfParti,revenue,note);   
    this.props.onCancel()
  }
  verifyData = () =>{
    return this.eventName.verifyInput() && this.cost.verifyInput() && this.numberOfParti.verifyInput()&& this.revenue.verifyInput()&& this.note.verifyInput();
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
          <h4 className={classes.modalTitle}>THÊM SỐ LIỆU</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <InputNormal 
                  ref={ref=>this.eventName = ref}  
                  placeholder = "Tên sự kiện"
                />
                <InputNormal 
                  ref={ref=>this.cost = ref}  
                  placeholder = "Chi phí"
                />
                <InputNormal 
                  ref={ref=>this.numberOfParti = ref}  
                  placeholder = "Số lượt tham gia"
                />
                <InputNormal 
                  ref={ref=>this.revenue = ref}  
                  placeholder = "Doanh thu"
                />
                <InputNormal 
                  ref={ref=>this.note = ref}  
                  placeholder = "Ghi chú"
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
DialogAddStatistical.propTypes = {
  open:PropTypes.bool,
  onConfirm : PropTypes.func,
  onCancel : PropTypes.func

}
export default withStyles(styles)(DialogAddStatistical)
