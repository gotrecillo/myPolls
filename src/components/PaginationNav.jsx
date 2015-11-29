import React, { Component, PropTypes } from 'react';
import PaginationButton from './PaginationButton.jsx';

export default class PaginationNav extends Component{
 
  _isOfTheFirstOnes() {
    return this.props.actualPage < 6;
  }

  _isOfTheLastOnes() {
    return this.props.actualPage > (this.props.totalPages - 5);
  }

  render() {
    let remainingPages = this.props.totalPages - this.props.actualPage;
    let offset = this._isOfTheFirstOnes() ? 1 :
                 this._isOfTheLastOnes() ? this.props.actualPage - (9 - remainingPages) + 1 :
                                           this.props.actualPage - 4;
    let pagesToList = (this.props.totalPages < 10) ? this.props.totalPages : 9;
    return (
      <ul className="pagination pagination-sm col-xs-12">
        {
          Array.apply(null, {length: pagesToList}).map(function(value, index){
            return (
              <PaginationButton
                key={index}
                page={index + offset}
                actualPage={this.props.actualPage}
                onChangePage={this.props.onChangePage}
                />
            );
          }.bind(this))
        }
      </ul>
    );
  }
}

PaginationNav.propTypes = {
  actualPage: PropTypes.number,
  totalPages: PropTypes.number,
  onChangePage: PropTypes.func
};
