// import { t } from "@lingui/macro";
import CustomInput from "components/CustomInput/CustomInput";
// import { trans } from "config/LinguiConfig";
import PropTypes from "prop-types";
import React from "react";
// import { verifyEmail } from "variables/helper";

import InputAdornment from "@material-ui/core/InputAdornment/index";
import Email from "@material-ui/icons/Email";
import iconInputStyle from "assets/jss/material-dashboard-pro-react/components/iconInputStyle";

class EmailInput extends React.PureComponent {

  constructor(props) {
    super(props);
    const { inputProps } = this.props;
    this.state = {
      helpText: undefined,
      value: inputProps && inputProps.defaultValue ? inputProps.defaultValue : ""
    };
  }

  getValue = () => this.state.value;

  verifyEmail = (value) => {
    let emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRex.test(value);
  };
  verifyInput = () => {
    const value = this.state.value;
    let helpText = undefined;

    if (!!this.props.required && !!!value)
      helpText = `Trường này không được bỏ trống`;
    else if (!this.verifyEmail(value)) {
      helpText = `Email phải từ 4 đến 50 ký tự, chứa kí tự @ và .`;
    }

    this.setState({ helpText });
    return helpText === undefined
  };

  render() {
    const { inputProps, required, ...rest } = this.props;
    return (
      <CustomInput
        error={this.state.helpText !== undefined}
        formControlProps={{
          fullWidth: true
        }}
        // labelProps={{
        //   required,
        // }}
        labelText="Email"
        helpText={this.state.helpText}
        id="email"
        inputProps={{
          ...inputProps,
          type: "email",
          onChange:
            event => this.setState({
              value: event.target.value,
              helpText: undefined
            }),
          endAdornment: (
            <InputAdornment
              position="end"
              style={iconInputStyle.inputAdornment}
            >
              <Email style={iconInputStyle.inputAdornmentIcon} />
            </InputAdornment>
          )
        }}
        {...rest}
      />
    );
  }
}

EmailInput.defaultProps = {
  required: true,
  value: ""
};

EmailInput.propTypes = {
  inputProps: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default EmailInput;