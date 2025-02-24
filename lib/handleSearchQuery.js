import { waitTimeBetweenSelectors, waitTimeBetweenActions } from './waitTime.js';
import timeOut from './timeOut.js';

const handleJobSearchQuery = async( page, title, selector, options = {} ) => {
    const {
        timeOutForSelector = waitTimeBetweenSelectors * 1000, 
        timeOutAfterCompletion = waitTimeBetweenActions * 1000 
    } = options;
    
    await page.waitForSelector(selector, { timeout: timeOutForSelector });
    await page.type(selector, title);

    await timeOut(timeOutAfterCompletion);

    await page.keyboard.press('Enter');
}

export default handleJobSearchQuery;