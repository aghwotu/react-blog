import React, {Component} from "react"
import classNames from "classnames"
import Link from "../../_ui/Link/Link"
import WatercolorCanvas from "../../WatercolorCanvas/WatercolorCanvas"

require('./HomeHeader.scss')

class HomeHeader extends Component {
  getClassName() {
    return classNames("HomeHeader")
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <WatercolorCanvas className="HomeHeader__watercolor-canvas" />
        <div className="HomeHeader__content">
          <div className="HomeHeader__content__text">
            <div className="HomeHeader__content__text__top">Hi, I’m</div>
            <h1 className="HomeHeader__content__text__title">Ndu Ifeanyi</h1>

            <div className="HomeHeader__content__text__description">
              I'm a frontend developer. 
              I write code, build applications and create digital experiences.
              <br />
               👦 Currently a frontend developer at FSDH bank .
              <br />
              <br />
              <Link to="https://www.linkedin.com/in/ifeanyi-ndu-7b9b80164/">My LinkedIn</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader
