import React from 'react'

function Header() {
  return (
    <header>
    <svg width="48" height="35" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg" id="hamburger" class="s">
      <rect width="48" height="7" rx="3.5" fill="white" id="top-bar" />
      <rect y="14" width="27" height="7" rx="3.5" fill="white" id="mid-bar" />
      <rect y="28" width="35" height="7" rx="3.5" fill="white" id="bottom-bar" />
    </svg>

    <div id="div">
      <img src="./assets/logo/big_b_part.svg" class="hero_vector" id="big_b" alt="" />
      <img src="./assets/logo/small_b_part.svg" class="hero_vector" id="small_b" alt="" />
      <img src="./assets/logo/c_part.svg" class="hero_vector" id="c" alt="" />
    </div>

    <a class="header_cta contact_btn" id="four">Contact Now</a>
  </header>
  )
}

export default Header