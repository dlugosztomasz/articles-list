import React, { useEffect, useState } from 'react';
import { fetchSportArticles, fetchFashionArticles } from '../../../api/articles';
import styles from './index.less';

function Articles() {
  const [ fashionArticles, setFashionArticles ] = useState([]);
  const [ sportArticles, setSportArticles ] = useState([]);

  useEffect(async () => {
    const { articles: sportsCategory } = await fetchSportArticles();
    const { articles: fashionCategory } = await fetchFashionArticles();

    setSportArticles(sportsCategory);
    setFashionArticles(fashionCategory);
  }, []);

  return (
    <div className="articles">
      {[ ...sportArticles, ...fashionArticles ].map(({ date, image, title, preamble }, index) => (
        <div key={`${title}-${index}`} className="article">
          <img alt="" width={250} height={170} src={image} />
          <div className="detailsContainer">
            <div className="headerContainer">
              <div className="title">{title}</div>
              <div className="date">{date}</div>
            </div>
            <div>{preamble}</div>
          </div>
        </div>
      ))}
    </div>
  );

}

export default Articles;
