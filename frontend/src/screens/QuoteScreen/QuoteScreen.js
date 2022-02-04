import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { quote } from "../../redux/actions/userActions";
import MainScreen from "../../components/MainScreen";
import { useNavigate } from "react-router-dom";
import styles from "./QuoteScreen.module.css";

function QuoteScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [moveInDate, setMoveInDate] = useState("");
    const [peopleNumber, setPeopleNumber] = useState("");
    const [stayDuration, setStayDuration] = useState("");
    const [roomType, setRoomType] = useState("");
    const [companySize, setCompanySize] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [offersAndCommunication, setOffersAndCommunication] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const userQuote = useSelector((state) => state.userQuote);
    const { loading, error } = userQuote;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(quote(name, email, companyName, phoneNumber, moveInDate, peopleNumber, stayDuration, roomType, companySize, additionalInfo, offersAndCommunication));
        setSubmitted(true)
    };

    useEffect(() => {
        if (!loading && !error && submitted)
            navigate(`/`);
    }, [loading, error, submitted, navigate]);

    return (
        <MainScreen title="REQUEST A QUOTE">
            <div className={styles.quoteContainer}>
                <Form onSubmit={submitHandler}>
                    <Form.Group className={styles.formFields} controlId="name">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                            type="name"
                            value={name}
                            placeholder="Enter your name..."
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className={styles.formFields} controlId="name">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={companyName}
                            placeholder="Enter your Company name..."
                            onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className={styles.formFields} controlId="formBasicEmail">
                        <Form.Label>Email address *</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter your email..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className={styles.formFields} controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                            type="text"
                            value={phoneNumber}
                            placeholder="Enter your Phone number..."
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </Form.Group>

                    <span>When would you like to move in?</span>

                    <Form.Select aria-label="Default select example">
                        <option>Choose an option</option>
                        <option value="immediately" onChange={(e) => setMoveInDate(e.target.value)}>Immediately</option>
                        <option value="next_Month" onChange={(e) => setMoveInDate(e.target.value)}>Next Month</option>
                        <option value="more_than_a_month_from_now" onChange={(e) => setMoveInDate(e.target.value)}>More than a month from now</option>
                        <option value="not_sure_yet" onChange={(e) => setMoveInDate(e.target.value)}>Not sure yet</option>
                    </Form.Select>
                   
                    <span>For how many people?</span>
                    
                    <Form.Select aria-label="Default select example">
                        <option>Choose an option</option>
                        <option value="1_to_5" onChange={(e) => setPeopleNumber(e.target.value)}>1 to 5</option>
                        <option value="6_to_99" onChange={(e) => setPeopleNumber(e.target.value)}>6 to 99</option>
                        <option value="more_than_a_100" onChange={(e) => setPeopleNumber(e.target.value)}>More than a 100</option>
                        <option value="not_sure_yet" onChange={(e) => setPeopleNumber(e.target.value)}>Not sure yet</option>
                    </Form.Select>

                    <span>For how long?</span>

                    <Form.Select aria-label="Default select example">
                        <option>Choose an option</option>
                        <option value="one_day" onChange={(e) => setStayDuration(e.target.value)}>One day</option>
                        <option value="less_than_a_month" onChange={(e) => setStayDuration(e.target.value)}>Less than a month</option>
                        <option value="up_to_one_year" onChange={(e) => setStayDuration(e.target.value)}>Up to one year</option>
                        <option value="more_than_a_year" onChange={(e) => setStayDuration(e.target.value)}>More than a year</option>
                    </Form.Select>
                    
                    <span>What kind of room would you like?</span>

                    <Form.Select aria-label="Default select example">
                        <option>Choose an option</option>
                        <option value="private" onChange={(e) => setRoomType(e.target.value)}>Private</option>
                        <option value="public" onChange={(e) => setRoomType(e.target.value)}>Public</option>
                    </Form.Select>

                    <span>Company Size</span>

                    <Form.Select aria-label="Default select example">
                        <option>Choose an option</option>
                        <option value="1_to_5" onChange={(e) => setCompanySize(e.target.value)}>1 to 5</option>
                        <option value="6_to_99" onChange={(e) => setCompanySize(e.target.value)}>6 to 99</option>
                        <option value="100_to_300" onChange={(e) => setCompanySize(e.target.value)}>100 to 300</option>
                        <option value="more_than_300" onChange={(e) => setCompanySize(e.target.value)}>More than 300</option>
                    </Form.Select>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Additional Requests/Information</Form.Label>
                        <Form.Control as="textarea" rows={3} value={additionalInfo}  placeholder="For additional comments, type here..." onChange={(e) => setAdditionalInfo(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className={styles.checkboxTerms} controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Send me CO@WORK news, events and exclusive offers"
                            onChange={(e) => setOffersAndCommunication(e.target.checked)}
                        />
                    </Form.Group>
                    <div className={styles.quote}>
                        <Button className={styles.buttonquote} type="submit" >
                            REQUEST YOUR QUOTE
                        </Button>
                    </div>

                </Form>
                <Row className={styles.rowquote}>
                    <Col>
                        By submitting, you are accepting our Privacy Policy! 
                    </Col>
                </Row>
                <div className={styles.formErrorError}>
                    <Row>
                        <Col className={styles.formError}>
                            {error && <ErrorMessage>{error}</ErrorMessage>}
                        </Col>
                    </Row>
                    {loading && <Loading />}
                </div>
            </div>
        </MainScreen>
    );
}

export default QuoteScreen;