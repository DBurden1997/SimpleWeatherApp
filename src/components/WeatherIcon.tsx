import React from "react";

type Props = {
    icon : string;
};

type State = {
};

class WeatherIcon extends React.Component<Props, State> {

    getIcon(icon : string) {
        switch(icon) {
            case "01d": {
                return <i className="fa-solid fa-sun"></i>;
            }
            case "01n": {
                return <i className="fa-solid fa-moon"></i>;
            }
            case "02d": {
                return <i className="fa-solid fa-cloud-sun"></i>;
            }
            case "02n": {
                return <i className="fa-solid fa-cloud-moon"></i>;
            }
            case "03d":
            case "03n":
            case "04d":
            case "04n": {
                return <i className="fa-solid fa-cloud"></i>;
            }
            case "09d":
            case "09n": {
                return <i className="fa-solid fa-cloud-shower-heavy"></i>;
            }
            case "10d": {
                return <i className="fa-solid fa-cloud-sun-rain"></i>;
            }
            case "10n": {
                return <i className="fa-solid fa-cloud-moon-rain"></i>;
            }
            case "11d": 
            case "11n": {
                return <i className="fa-solid fa-cloud-bolt"></i>
            }
            case "13d":
            case "13n": {
                return <i className="fa-solid fa-snowflake"></i>;
            }
            case "50d":
            case "50n": {
                return <i className="fa-solid fa-smog"></i>;
            }

            default: {
                return <i className="fa-solid fa-cloud"></i>;
            }
        }
    }

    render() {
        let icon = this.getIcon(this.props.icon);

        return (
            <React.Fragment>
                {icon}
            </React.Fragment>
        )
    }
}

export default WeatherIcon;