import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate ,  } from "react-router-dom";
import  Loader from '../components/Loader/Loader'
import {auth} from '../firebase/config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      return toast.error("Password không giống nhau");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Đăng kí thành công...");
        setTimeout(() => {navigate("/login")},1404);
      })
      .catch((error) => {
        toast.error("Tài khoản đã tồn tại vui lòng sử dụng tài khoản khác....");
        setIsLoading(false);
      });
  };
  return (
    <>
    <ToastContainer/>
    {isLoading && <Loader />}
    <Helmet title="Đăng kí ">
      <CommonSection title="Đăng kí" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={registerUser} >
              
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Email"
                    required value = {email} onChange = {(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required value = {password} onChange = {(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required value={cPassword} onChange = {(e) => setCPassword(e.target.value)}
                    
                  />
                </div>
              
                <button type="submit" className="addToCart__btn">
                  Đăng kí
                </button>
              </form>
              <Link to="/login">Bạn đã có tài khoản? Đăng nhập ngay</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
    </>
  );
};

export default Register;