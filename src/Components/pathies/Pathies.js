import React from 'react';
import Testimonials from './direct-testimonials/testimonial'
import Articles from './article/articles.js'
import Videos from './videosSection/video'
import Stars from './stars/stars'
import { Summary } from './summary/Summary';
import Article from './article_links/Articles';
import Header from './Pathy_header/Header'
import Footer from '../Footer/Footer';

function Pathies() {
  const name="Homopathy"
  const data="Homeopathy is a medical system based on the belief that the body can cure itself. Those who practice it use tiny amounts of natural substances, like plants and minerals. They believe these stimulate the healing process."
  return (
    <>
    <Header/>
    <Summary data={data}/>
    <Testimonials />
    <Videos/>
    <Articles/>
    <Article/>
    <Footer/>
    </>
  );
}

export default Pathies;
