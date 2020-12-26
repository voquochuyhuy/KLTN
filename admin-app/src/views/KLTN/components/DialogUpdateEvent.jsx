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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
class DialogUpdateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate : new Date(),
      endDate : new Date()
    }
  }
  
  handleAddBoard=()=>{
    const eventName = this.eventName.getValue();
    const organization = this.organization.getValue();
    const place = this.place.getValue();
   
   
    this.props.onConfirm(eventName,organization,place,this.state.startDate,this.state.endDate);   
    this.props.onCancel()
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
          <h4 className={classes.modalTitle}>Chỉnh sửa thông tin</h4>
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
                  ref={ref=>this.organization = ref}  
                  placeholder = "Đơn vị tổ chức"
                />
                <InputNormal 
                  ref={ref=>this.place = ref}  
                  placeholder = "Nơi tổ chức"
                />
                <div style={{paddingBottom:"20px",paddingTop:"20px",display:"flex"}}>
                  <p >Chọn ngày bắt đầu</p>
                  <div style={{marginLeft:"15px"}}>
                    <DatePicker 
                    
                    placeholderText="Click to select a date"
                      selected={this.state.startDate} onChange={date => this.setState({startDate:date})} 
                    />
                  </div>
                  
                </div>

                <div style={{paddingBottom:"20px",paddingTop:"20px",display:"flex"}}>
                  <p >Chọn ngày kết thúc</p>
                  <div style={{marginLeft:"15px"}}>
                    <DatePicker 
                    
                  
                    placeholderText="Click to select a date"
                      selected={this.state.endDate} onChange={date => this.setState({endDate:date})} 
                    />
                  </div>
                   
                </div>
                
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
DialogUpdateEvent.propTypes = {
  open:PropTypes.bool,
  onConfirm : PropTypes.func,
  onCancel : PropTypes.func

}
export default withStyles(styles)(DialogUpdateEvent)
