import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import CustomInput from "components/CustomInput/CustomInput";
import iconInputStyle from "assets/jss/material-dashboard-pro-react/components/iconInputStyle";
import PropTypes from "prop-types";

 class CustomInputPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          helpText: undefined,
          value: ""
        };
      }
   
    getValue = () => this.state.value;
    verifyLength = (value, range) => {
        if (!!!value) return false;
        return !(value.length < range[0] || value.length > range[1]);
      };
    verifyInput = () => {
        const value = this.state.value;
        let helpText = undefined;
    
        if (value)
        {
          if (!this.verifyLength(value, [1, 50])) helpText = `Mật khẩu phải từ 1 đến 50 ký tự`
        } else if (!!this.props.required) helpText = `Trường này không được bỏ trống`;
    
        this.setState({ helpText });
        return helpText === undefined
      };
    render() {
        const {required,inputProps,className, ...rest } = this.props;
        return (
            <CustomInput
                error={this.state.helpText !== undefined}
                labelText="Password"
                helpText={this.state.helpText}
                id="password"
                formControlProps={{
                    fullWidth: true
                }}
                // labelProps={{
                //     required,
                //   }}
                inputProps={{
                    ...inputProps,
                    type: "password",
                    onChange:
                      event => this.setState({
                        value: event.target.value,
                        helpText: undefined
                      }),
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon className={iconInputStyle.inputAdornmentIcon}>
                                lock_outline
                             </Icon>
                        </InputAdornment>
                    )
                }}
                {...rest}
            />

        );
    }
}
CustomInputPassword.defaultProps = {
    required: true,
    value: ""
  };
  
CustomInputPassword.propTypes = {
    required: PropTypes.bool,
    value: PropTypes.string
  };
  
  export default CustomInputPassword;