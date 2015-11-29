import React, { Component, PropTypes } from 'react';

export default class PaginationButton extends Component {

  handleButtonClick(){
    this.props.onChangePage(this.props.page);
  }

  render() {
    let btnClass = this.props.page === this.props.actualPage ? 'active' : '';
    return (
      <li className={btnClass} onClick={this.handleButtonClick}><a style={{width: '3em', textAlign: 'center'}} href="#">{this.props.page}</a></li>
    );
  }
}

PaginationButton.propTypes = {
  page: PropTypes.number,
  actualPage: PropTypes.number,
  onChangePage: PropTypes.func
};
