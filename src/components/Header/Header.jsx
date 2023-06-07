import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";


export default function Header() {

    const [isActive, setisActive] = React.useState(false)

    return (
        <>
    <nav className='navbar p-2 is-primary' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
            <h1 className="title is-4">keepIt!</h1>
        </a>
        <a
          onClick={() => {setisActive(!isActive)}}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbar'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbar' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'>
              item
            </a>
            <a href='/' className='navbar-item'>
              item
            </a>
          </div>
        </div>
      </div>
    </nav>

    </>
    )
}
