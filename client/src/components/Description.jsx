import React from 'react';
import style from '../style.css';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreInfo: false,
    };
    this.toggleShowMore = this.toggleShowMore.bind(this);
  }
  toggleShowMore() {
    this.setState({ showMoreInfo: !this.state.showMoreInfo });
  }
  render() {
    const listing = this.props.listing;
    // newline to <br> courtesy of https://medium.com/@kevinsimper/react-newline-to-break-nl2br-a1c240ba746
    return (
      <div>
        <p>{ listing.primary_host.first_name }&#8217;s home is located
          in {listing.city}, {listing.state}, {listing.country}.
        </p>
        <p>{ listing.neighborhood_overview.split('\n').map((item, key) => <span key={key}>{item}<br /></span>) }</p>
        <div className="div-neighborhood-more-info">
          {this.state.showMoreInfo ?
            <div>
              <span className="div-neighborhood-subheading">Getting Around</span>
              <p>{listing.transit}</p>
              <span
                className="div-neighborhood-clickable"
                onClick={this.toggleShowMore}
                onKeyPress={this.toggleShowMore}
                role="button"
                tabIndex={0}
              >Hide &uarr;
              </span>
            </div> :
            <span
              className="div-neighborhood-clickable"
              onClick={this.toggleShowMore}
              onKeyPress={this.toggleShowMore}
              role="button"
              tabIndex={0}
            >Read more about the neighborhood &darr;
            </span>
          }
        </div>
      </div>
    );
  }
}

export default Description;
