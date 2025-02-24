import { waitTimeBetweenSelectors, waitTimeBetweenActions } from './waitTime.js';

const gotoUrls = async(page, url, timeOut=waitTimeBetweenSelectors*1000) => {
  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: timeOut,
    });

  } catch (error) {
    console.error(`Error navigating to ${url}:`, error);
    throw error;
  }
}

export default gotoUrls;