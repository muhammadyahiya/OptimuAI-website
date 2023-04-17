import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To OptimumAI Academy</Typography>
        <p>
        At OptimumAI, we are committed to addressing the significant gap between 
        academic learning and the demands of the technology industry. We understand 
        that many recent graduates lack the essential skill sets required to succeed 
        in the field of artificial intelligence and machine learning. To bridge this gap, 
        we have developed a comprehensive Industry Readiness Curriculum that prepares our students 
        for a successful career in AI and related fields.
        </p>
        <br />
        <p>
        Our goal is to help our students secure jobs in the AI industry and excel 
        in their careers. To achieve this, we focus on developing the skills that 
        employers are looking for, including problem-solving, critical thinking, 
        and communication. We also provide our students with ongoing career support, 
        including job search assistance and networking opportunities.
        </p>
        <br />
        <p>
        At OptimumAI, we are committed to providing our students with the 
        skills and knowledge they need to succeed in the fast-paced and ever-evolving 
        field of AI. We are confident that our Industry Readiness Curriculum will prepare 
        our graduates to excel in their careers and make a positive impact in the world of technology.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
