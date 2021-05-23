import React, { Component } from 'react';
import classNames from 'classnames';
// eslint-disable-next-line no-unused-vars
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
              <a
                href="https://cmj.umaine.edu/"
                target="_blank"
                rel="noreferrer"
              >
                Environmental Communication
              </a>{' '}
              and{' '}
              <a
                href="https://umaine.edu/womensgenderandsexualitystudies/"
                target="_blank"
                rel="noreferrer"
              >
                Women’s, Gender & Sexuality Studies
              </a>{' '}
              at the <a href="University of Maine">University of Maine</a> . I
              also teach courses in communication and journalism. My current
              work explores affective quality of potent collectivity in digital
              activism and methodology of digital humanities with R. Most of my
              publications and working papers are available on{' '}
              <a
                href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3532935"
                target="_blank"
                rel="noreferrer"
              >
                SSRN
              </a>
              , along with my{' '}
              {/* <Link href="https://hartbullock.com/course/cse-138/"></Link> course */}
              offerings on this website. My{' '}
              <a href={Pdf} target="_blank" rel="noreferrer">
                Curriculum Vitae{' '}
              </a>
              has more detail if you need it.
              <br />
              <br />
              You can find me on{' '}
              <a
                href="https://twitter.com/HartBullock"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>{' '}
              connect via{' '}
              <a
                href="https://www.linkedin.com/in/hartbullock/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{' '}
              , or reach out by{' '}
              <a href="mailto:minglei.zhang@maine.edu">email</a>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
