// components/AccordionComponent.jsx
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComponent = () => {
  return (
    <div className="p-4 space-y-4">
    
      <Accordion className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <AccordionSummary
          className="text-white font-semibold"
          expandIcon={<ExpandMoreIcon className="text-teal-500" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className="text-lg">Q) How do different post types (Reels vs Carousels vs Static) compare in terms of engagement metrics?</h3>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-gray-300 p-4">
          <p>Ans) Reels generally garner significantly higher reach and impressions compared to carousels and static posts. However, carousels tend to have a higher save rate, suggesting users find their content more valuable for future reference. Static posts often have lower overall engagement but can still be effective depending on the specific content and target audience.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <AccordionSummary
          className="text-white font-semibold"
          expandIcon={<ExpandMoreIcon className="text-teal-500" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3 className="text-lg">Q) What's the save-to-like ratio across different post types?</h3>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-gray-300 p-4">
          <p>Ans) Reels have a save-to-like ratio of approximately 0.005. Carousels have a notably higher ratio, around 0.03, suggesting users save carousels more often relative to liking them. Static posts fall in between, with a ratio of roughly 0.015. This indicates carousels are most likely to be saved compared to their likes.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <AccordionSummary
          className="text-white font-semibold"
          expandIcon={<ExpandMoreIcon className="text-teal-500" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <h3 className="text-lg">Q) How does engagement vary across different states in India?</h3>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-gray-300 p-4">
          <p>Ans) Bihar, Punjab, and Jharkhand show high reach and engagement, potentially due to posts about local markets and festivals. States like Kerala, Delhi, and Assam have lower engagement despite diverse content. Content related to local markets and festivals appears to perform well.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <AccordionSummary
          className="text-white font-semibold"
          expandIcon={<ExpandMoreIcon className="text-teal-500" />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <h3 className="text-lg">Q) What's the engagement pattern across different gender segments?</h3>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-gray-300 p-4">
          <p>Ans) Females show high engagement with diverse content, including reels, carousels, and static posts, with a strong interest in shopping and cultural themes. Males engage significantly with reels and carousels focused on adventure, travel, and nature. Other genders demonstrate high engagement with nature, cultural festivals, and travel-related content, particularly in carousel and reel formats.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <AccordionSummary
          className="text-white font-semibold"
          expandIcon={<ExpandMoreIcon className="text-teal-500" />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <h3 className="text-lg">Q) Are there specific states showing higher save rates?</h3>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-gray-300 p-4">
          <p>Ans) Several states exhibit higher save rates relative to other engagement metrics. Haryana, with its #FestiveVibes carousel post, stands out. Andaman and Nicobar Islands also sees strong save numbers across various post types. Additionally, carousel posts in Assam, Jharkhand, and West Bengal show a propensity for saves.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <AccordionSummary
          className="text-white font-semibold"
          expandIcon={<ExpandMoreIcon className="text-teal-500" />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <h3 className="text-lg">Q) Which content themes/topics generate the highest saves?</h3>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-gray-300 p-4">
          <p>Ans) Content related to "Hidden Treasures," "Cultural Journey," and "NatureLove" often generates high save counts. Additionally, carousel posts tend to have more saves, suggesting users appreciate the multi-image format for saving information or inspiration.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <AccordionSummary
          className="text-white font-semibold"
          expandIcon={<ExpandMoreIcon className="text-teal-500" />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <h3 className="text-lg">Q) What's the impression-to-reach ratio across different post types?</h3>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-gray-300 p-4">
          <p>Ans) Reels have the highest impression-to-reach ratio, significantly outperforming Static and Carousel posts. This suggests Reels generate more impressions for each person reached, indicating higher engagement or repeated views. Static posts have the lowest ratio, implying less engagement or visibility after the initial reach.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <AccordionSummary
          className="text-white font-semibold"
          expandIcon={<ExpandMoreIcon className="text-teal-500" />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <h3 className="text-lg">Q) How does the day of the week affect content reach?</h3>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-gray-300 p-4">
          <p>Ans) Analyzing the data provided, there isn't a clear correlation between the day of the week and post reach. Posts published on various days achieved both high and low reach figures, suggesting other factors like content type, topic, and audience engagement are more influential.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <AccordionSummary
          className="text-white font-semibold"
          expandIcon={<ExpandMoreIcon className="text-teal-500" />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <h3 className="text-lg">Q) Is there a correlation between scenic content and save rates?</h3>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-gray-300 p-4">
          <p>Ans) Posts with captions related to nature, sunsets, and beaches tend to have higher save rates. This suggests that visually appealing scenic content resonates with users, prompting them to save the posts for future reference or inspiration. However, more analysis is needed to confirm a strong correlation.</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;