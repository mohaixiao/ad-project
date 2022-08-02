import React, { Component } from 'react'
import './style.scss'
interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <div className='box'>
        Hello,React
        <span>I am jack I am 22 years old</span>
      </div>
    )
  }
}
