import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreInfo: false,
    };
    this.toggleShowMore = this.toggleShowMore.bind(this);
  }
  toggleShowMore() {
    this.setState({showMoreInfo: !this.state.showMoreInfo});
  }
  render() {
    return (
      <div>
        <p>{ this.props.listing.primary_host.first_name }'s home is located in {this.props.listing.city}
        , {this.props.listing.state}, {this.props.listing.country}. </p>
        <p>{ this.props.listing.neighborhood_overview }</p>
        <div className='div-neighborhood-more-info'>
          {this.state.showMoreInfo ?
            <div>
              <span className='div-neighborhood-subheading'>Getting Around</span>
              <p>{this.props.listing.transit}</p>
              <span className='div-neighborhood-clickable'
                onClick={this.toggleShowMore}>Hide &uarr;
              </span>
            </div> : 
            <span className='div-neighborhood-clickable'
              onClick={this.toggleShowMore}>Read more about the neighborhood &darr;
            </span>
          }
        </div>
      </div>
    );
  }
}

export default Description;
