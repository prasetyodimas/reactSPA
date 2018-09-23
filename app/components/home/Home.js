import React, { Component } from 'react';
import PropTypes from 'prop-types';
import menu from '../../menu';

const Home = (props) => {
		const { title, subtitle, description, JobPosition, docsLink, github, } = menu;
		const githubUrl = `https://ghbtns.com/github-btn.html?user=${github.user}&repo=${github.repository}`;
    return (
      <div className="home">
        <img className="imgRounded" src="./images/download.jpg"/>
        <h1 className="title">{subtitle} {title}</h1>
        <p className="description">{description}</p>
        <h3 className="JobPosition">{JobPosition}</h3>
        <div className="buttons">
          <iframe
            src={`${githubUrl}&type=star&count=true&size=large`}
            frameBorder="0"
            scrolling="0"
            width="80px"
            height="30px"
          />
        </div>
        <p className="documentation">
          <a
            className="docs-button"
            onClick={() => props.handleLink(docsLink)}
          >
            <i className="fa fa-book" />
            Click Here To See Apps
          </a>
        </p>
      </div>
    );
}
Home.propTypes = {
  handleLink: PropTypes.func.isRequired,

};
export default Home;



