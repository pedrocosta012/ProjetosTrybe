import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, totalExpense } = this.props;
    return (
      <div>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{totalExpense.toFixed(2)}</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  totalExpense: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.wallet.totalExpenseValue,
});

export default connect(mapStateToProps)(Header);
