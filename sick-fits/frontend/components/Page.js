import React, { Component } from 'react'
import Header from './Header'
import Meta from './Meta'

export default class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
