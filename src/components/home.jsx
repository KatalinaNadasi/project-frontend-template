import React from 'react';
import Navigation from './navigation';
import BandeauTitre from './bandeauTitre';
import Questionaire from './questionaire';
import AllArticles from './allArticles';
import AllTestimonies from './allTemoignages';

export default function Home() {
  return (
    <>
      <Navigation />
      <BandeauTitre />
      <Questionaire />
      <AllArticles />
      <AllTestimonies />
    </>
  );
}
