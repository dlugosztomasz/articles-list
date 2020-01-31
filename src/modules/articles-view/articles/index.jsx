import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { fetchSportArticles, fetchFashionArticles } from '../../../api/articles';
import { AppLoader, Message } from '../../../components';
import { alphabeticSortingTypesMapper } from '../../../config';
import { handleDate } from '../../../utils/date';
import styles from './index.less';

function Articles() {
  const [ fashionArticles, setFashionArticles ] = useState([]);
  const [ sportArticles, setSportArticles ] = useState([]);
  const [ error, setIsError ] = useState(false);
  const [ loading, setIsLoading ] = useState(false);
  const { alphabeticSortingType, dataSources } = useSelector(state => state.articles);

  useEffect(async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const { articles: sportsCategory } = await fetchSportArticles();
      const { articles: fashionCategory } = await fetchFashionArticles();
      setSportArticles(sportsCategory.map(handleDate));
      setFashionArticles(fashionCategory.map(handleDate));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  const chosenArticles = useMemo(() => {
    const dataSourcesSmallCases = dataSources.map(data => data.toLowerCase());
    const articlesByCategory = [ ...fashionArticles, ...sportArticles ]
      .filter(({category}) => dataSourcesSmallCases.includes(category))
      .sort((a, b) => moment(a.date).diff(moment(b.date)));
    if (alphabeticSortingType === alphabeticSortingTypesMapper.DESC) {
      return articlesByCategory.reverse();
    }
    return articlesByCategory;
  }, [ fashionArticles, sportArticles, dataSources, alphabeticSortingType ]);

  return (
    <div className="articles">
      {error && (
        <Message
          error={true}
          title={'Something went wrong'}/>
      )}
      {loading ?
        (
          <AppLoader title={'Loading...'}/>
        ) :
        (
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
        )
      }
    </div>
  )
}

export default Articles;
