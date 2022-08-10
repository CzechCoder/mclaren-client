//images
import loginpic from "../assets/login_white.png";
// material ui
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
// other
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../app/hooks";

interface UserFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<UserFormData>({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useAppSelector<any>(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.warning(message);
    }
    if (isSuccess || user) {
      navigate("/mycars");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(login(formData));
  };

  return (
    <div className="login-bg">
      <div className="l-container">
        <div className="login-pic">
          <img src={loginpic} alt="Login" />
        </div>
        <div className="loginform lcard">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <TextField
                size="small"
                variant="outlined"
                className="form-control"
                label="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <FormControl
                variant="outlined"
                size="small"
                className="form-control"
              >
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  label="Password"
                  type="text"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  endAdornment={
                    <InputAdornment position="end"></InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="text-center mt-4">
              <Button
                variant="contained"
                type="submit"
                color="primary"
                style={{ width: "100%", height: "50px" }}
              >
                Log in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
