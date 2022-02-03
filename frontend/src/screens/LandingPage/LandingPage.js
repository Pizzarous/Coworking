import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {

  return (
    <div className={styles.mainDiv}>
      <Container>
        <Row>
          <div className={styles.divIntro}>
            <div className={styles.divText}>
              <div className={styles.crop}>
                <img className={styles.logo} src="https://i.imgur.com/KyanZCU.jpg" />
              </div>
              <div className={styles.textonimage}>
                <h3> CO@WORK</h3>
                <p>A place to work, to cowork!</p>
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.buttonContainer}>
                <Link to="#">
                  <Button className={styles.sendButton}>Request Quote</Button>
                </Link>
                <Link to="#">
                  <Button className={styles.sendButton}>Book Visit</Button>
                </Link>
              </div>
              <div className={styles.imageswrapper}>

                <div className={styles.information}>
                  <div className={styles.informationimg1}></div>
                  <div className={styles.informationtxt1}>
                    <p>Shared office space provides a more flexible cost and seating configuration, giving you mobility in your company's growth and location. Coworker is a website where you can search, find, and reserve a shared workspace, including coworking desks, private offices, meeting rooms, and virtual offices, anywhere in the world. Professionals and companies can use Coworker to compare all the available shared office spaces to find one that has the services and amenities that fit their requirements.

                      Once you’ve found the shared office space that is best for you, you can enquire about availability and rates, schedule a tour, and reserve your space directly.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;