import React from 'react';
import Installation from './components/docs/pages/intro/Installation';
import Swapi from './components/docs/pages/api/ApiStarwars';
import DetailSwapi from './components/docs/pages/api/DetailFilm';


const menu = {
  title: 'Tunaiku.com',
  subtitle:'This is Frontend Technical Test At ',
  description: 'Using Framework React JS',
  JobPosition: 'By Dimas Prasetyo as Frontend Developer',
  homeLink: '/',
  docsLink: '/docs/installation',
  github: {
    user: 'vladmir123',
    repository: 'reactSPA',
  },
  sections: [
    {
      title: 'Intro',
      icon: 'fa fa-info-circle',
      links: [
        {
          href: '/docs/installation',
          title: 'Installation',
          component: <Installation />,
        },
      ],
    },
    {
      title: 'Tes Code',
      icon: 'fa fa-cogs',
      links: [
        {
          href: '/docs/api',
          title: 'API from SWAPI',
          description: 'https://swapi.co/api/films',
          component: <Swapi />,
        },
      ],
    },
  ],
};

export default menu;