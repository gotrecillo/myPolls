import React from 'react';

export default React.createClass({
  propTypes: {
    page: React.PropTypes.number,
    actualPage: React.PropTypes.number,
    onChangePage: React.PropTypes.func
  },

  handleButtonClick: function() {
    this.props.onChangePage(this.props.page);
  },

  render: function() {
    let btnClass = this.props.page === this.props.actualPage ? 'active' : '';

    return (
      <li className={btnClass} onClick={this.handleButtonClick}><a style={{width: '3em', textAlign: 'center'}} href="#">{this.props.page}</a></li>
    );
  }
});
