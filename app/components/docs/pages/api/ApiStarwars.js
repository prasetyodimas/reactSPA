import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../components/docs/layout/Sidebar';
import Spinner from '../../../../components/docs/layout/LoadingSpinner';
import menu from '../../../../menu';

class GetAPI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error :null,
			isLoading : false,
			filmsinfo :[],
      link: '/',
		};
    this.handleLink = this.handleLink.bind(this);
	}

	componentDidMount() {
    this.setState({ link: window.location.hash.replace('#', '') });
		this.fetchData();
    }

  	fetchData(){
  		fetch("https://swapi.co/api/films")
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.results.map(informations =>(
          	{
          		title         :`${informations.title}`,
          		episode_id    :`${informations.episode_id}`,
          		opening_crawl :`${informations.opening_crawl}`,
          		director      :`${informations.director}`,
          		producer      :`${informations.producer}`,
          		release_date  :`${informations.release_date}`,
          		created       :`${informations.created}`,
          		edited        :`${informations.edited}`
            }
        )))
        .then(filmsinfo => this.setState({
          filmsinfo,
          isLoading: true,
        }))
        .catch(error => console.log('parsing failed !!', error))
  	}

    handleLink(link) {
      window.location.hash = link;
      this.setState({ link });
    }

  	render() {
  		const { isLoading, filmsinfo } = this.state;
      const { link } = this.state;
      	return (
          <div className="wrapper-elemsblock">
            <div className="heading-block">
              <h3>Starwars Episode</h3>
            </div>
            <div className="panel-group">
              {
                !isLoading ? <Spinner/> : filmsinfo.map(films => {
                  const { title, episode_id, opening_crawl, director, producer, release_date, created, edited  } = films;
                  return <ul className="films-ul" key={episode_id}>
                    <li className="films-li">
                      <Link to={`#/docs/api/film`}>
                        <i className="fa fa-share-alt" aria-hidden="true"></i> {title}
                      </Link>
                    </li>
                 </ul>
                })
              }
            </div>
          </div>
      );
    }
}

export default GetAPI;

