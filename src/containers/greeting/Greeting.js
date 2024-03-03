import { React, useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCk1rcr7UL1fCLhs-nlv1P1JhsG7EGWf68',
  authDomain: 'portfolio-website-23bb3.firebaseapp.com',
  databaseURL: 'https://portfolio-website-23bb3-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'portfolio-website-23bb3',
  storageBucket: 'portfolio-website-23bb3.appspot.com',
  messagingSenderId: '982468605870',
  appId: '1:982468605870:web:6b8e4a267047e949aeba3f',
  measurementId: "G-25HPT8FH8N"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);

}

const WebsiteCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const db = firebase.database();
    const countRef = db.ref('visitCount');

    countRef.transaction(currentCount => {
      return currentCount + 1;
    });

    countRef.on('value', snapshot => {
      const count = snapshot.val();
      setVisitCount(count);
    });
  }, []);

  return (
    <div className="hit">
      Homepage hit count: {visitCount}🔥
    </div>
  );
};

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <WebsiteCounter /> */}
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            {/* <img
							alt="saad sitting on table"
							src={require("../../assests/images/feelingProud.svg")}
						></img> */}
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
