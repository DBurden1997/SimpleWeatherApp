import React from "react";

type Props = {
  cityList: Array<string>;
  activeCity: string;
  onCityClick : Function;
};

type State = {
};

class CityNav extends React.Component<Props, State> {
  render() {
    let listItems = this.props.cityList.map((cityName, i) => 
      <li key={i}>
        <div className={`city-nav-item ${this.props.activeCity === cityName ? "active" : ""}`} 
          onClick={() => {this.props.onCityClick(cityName)}}>
            {cityName}
        </div>
      </li>
    );

    return (
      <nav className="city-nav">
        <ul className="city-nav-list">
          {listItems}
        </ul>
      </nav>
    )
  }
}

export default CityNav;