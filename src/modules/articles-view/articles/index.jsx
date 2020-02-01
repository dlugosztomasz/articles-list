import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { fetchSportArticles, fetchFashionArticles } from 'api/articles';
import { AppLoader, Message } from 'components';
import { alphabeticSortingType, messages } from 'config';
import { handleDate } from 'utils/date';
import styles from './index.less';

function Articles() {
  const [ fashionArticles, setFashionArticles ] = useState([]);
  const [ sportArticles, setSportArticles ] = useState([]);
  const [ hasError, setHasError ] = useState(false);
  const [ loading, setIsLoading ] = useState(false);
  const { alphabeticSortingType: alphabeticSortingTypeState, dataSources } = useSelector((state) => state.articles);

  useEffect(() => {
    (async () => {
      setHasError(false);
      setIsLoading(true);
      try {
        const { articles: sportsCategory } = await fetchSportArticles();
        const { articles: fashionCategory } = await fetchFashionArticles();
        setSportArticles(sportsCategory.map(handleDate));
        setFashionArticles(fashionCategory.map(handleDate));
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    })();
  }, []);

  const chosenArticles = useMemo(() => {
    const dataSourcesSmallCases = dataSources.map((data) => data.toLowerCase());
    const articlesByCategory = [ ...fashionArticles, ...sportArticles ]
      .filter(({ category }) => dataSourcesSmallCases.includes(category))
      .sort((first, second) => moment(first.date).diff(moment(second.date)));
    if (alphabeticSortingTypeState === alphabeticSortingType.DESC) {
      return articlesByCategory.reverse();
    }
    return articlesByCategory;
  }, [
    fashionArticles, sportArticles, dataSources, alphabeticSortingTypeState
  ]);

  return (
    <div className="articles">
      {hasError && (
        <Message
          error={true}
          title={messages.SERVER_ERROR}/>
      )}
      {loading && (
          <AppLoader title={messages.LOADING}/>
      )}
      {Boolean(chosenArticles.length) && (
          <>
            {chosenArticles.map(({ date, image, title, preamble }, index) => (
              <div key={`${title}-${index}`} className="article">
                <div className="imageContainer">
                  <img
                    alt=""
                    width={250}
                    height={170}
                    src={image} />
                </div>
                <div className="detailsContainer">
                  <div className="headerContainer">
                    <div className="title">{title}</div>
                    <div className="date">{date}</div>
                  </div>
                  <div className="preamble">{preamble}</div>
                </div>
              </div>
            ))}
          </>
      )}
      {!chosenArticles.length && !loading && !hasError && (
        <Message
          title={messages.NO_ITEMS_SELECTED} />
      )}
    </div>
  );
}

export default Articles;
