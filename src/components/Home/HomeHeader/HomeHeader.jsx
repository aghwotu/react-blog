import React, { Component } from 'react';
import classNames from 'classnames';
import Link from '../../_ui/Link/Link';
import WatercolorCanvas from '../../WatercolorCanvas/WatercolorCanvas';
import Pdf from '../../../CV.pdf';

require('./HomeHeader.scss');

class HomeHeader extends Component {
  getClassName() {
    return classNames('HomeHeader');
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <WatercolorCanvas className="HomeHeader__watercolor-canvas" />
        <div className="HomeHeader__content">
          <div className="HomeHeader__content__text">
            <div className="HomeHeader__content__text__top">Hi, I’m</div>
            <h1 className="HomeHeader__content__text__title">Hart</h1>

            <div className="HomeHeader__content__text__description">
              I'm a frontend developer. a doctoral student studying{' '}
              <Link to="https://cmj.umaine.edu/">
                Environmental Communication
              </Link>{' '}
              and{' '}
              <Link to="https://umaine.edu/womensgenderandsexualitystudies/">
                Women’s, Gender & Sexuality Studies
              </Link>{' '}
              at the <Link to="University of Maine">University of Maine</Link> .
              I also teach courses in communication and journalism. My current
              work explores affective quality of potent collectivity in digital
              activism and methodology of digital humanities with R. Most of my
              publications and working papers are available on{' '}
              <Link to="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3532935">
                SSRN
              </Link>
              , along with my{' '}
              <Link to="https://hartbullock.com/course/cse-138/"></Link> course
              offerings on this website. My{' '}
              <a href={Pdf} target="_blank" rel="noreferrer">
                Curriculum Vitae{' '}
              </a>
              has more detail if you need it.
              <br />
              <br />
              You can find me on{' '}
              <Link to="https://twitter.com/HartBullock">Twitter</Link>connect
              via{' '}
              <Link to="https://www.linkedin.com/in/hartbullock/">
                LinkedIn
              </Link>{' '}
              , or reach out by <Link to="minglei.zhang@maine.edu">email</Link>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
