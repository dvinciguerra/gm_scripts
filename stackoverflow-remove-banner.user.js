// ==UserScript==
// @name     Stackoverflow :: Remove Cookie Banner
// @author   dvinciguerra
// @version  1.0.0
// @include  /(stackexchange|stackoverflow)\.com/
// @icon     https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196
// @run-at   document-end
// ==/UserScript==


// 'use strict';

// global variables
const MAX_RETRY = 3
const SELECTOR = '#onetrust-banner-sdk'

/**
* Check if the banner is present
* @return {boolean} - true if the banner is present, false otherwise
*/
const hasBanner = () =>
	document.querySelector(SELECTOR) != null

/**
* Remove the banner
*/
const removeBanner = () => {
  document.querySelector(SELECTOR).style.display = 'none'
}

let retries = 0

const startId = setTimeout(() => {
  if (hasBanner()) clearInterval(startId)

  const retryId = setInterval(() => {
    if (retries < MAX_RETRY) {
      console.error('Max retries reached!')
      clearInterval(retryId)
    }

    if (!hasBanner()) console.log('Banner removed!')

    removeBanner()
    retries++
  }, 1000)
}, 1000)

