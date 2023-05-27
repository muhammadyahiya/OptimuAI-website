import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  const googleFormsLink = 'https://forms.gle/8FwZjMUcHSq9WGmbA';

  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 style={{ color: 'white', marginBottom: '10px'  }}>AI & Data Science Academy</h1>
          <p style={{ color: 'white', marginTop: '60px'  }}>Best Institute In Hyderabad</p>
          <a href={googleFormsLink} target="_blank" rel="noopener noreferrer">
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Register Now</button>
          </a>
        </div>
        <div className="additionalContent" style={{ color: 'white', marginTop: '300px' }}>
          <h2 style={{fontSize: '150px' }}><button style={{ backgroundColor: 'blue', color: 'white' }}>Our Courses</button></h2>
          <ul style={{ fontSize: '18px' }}>
            <li>Introduction to Machine Learning</li>
            <li>Deep Learning Fundamentals</li>
            <li>Natural Language Processing</li>
            <li>Data Science</li>
            <li>Devops</li>
            <li>Full stack Engineering</li>
            <li>Cloud Computing</li>
          </ul>
          <p></p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
