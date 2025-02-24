import { waitTimeBetweenSelectors, waitTimeBetweenActions } from './waitTime.js';
import timeOut from './timeOut.js';

const buttonClick = async( page, selector, options={} ) => {
  const { 
    isIndexed = false, 
    index = 0, 
    timeOutForSelector = waitTimeBetweenSelectors * 1000,
    timeOutAfterCompletion = waitTimeBetweenActions * 1000 
  } = options;

  if(!isIndexed){
    await page.waitForSelector(selector, { timeout: timeOutForSelector * 1000 });
    await page.click(selector);
    await timeOut(timeOutAfterCompletion);
    return;
  }

  const findWithElement = await page.$$(selector);
  await findWithElement[index].click();
  await timeOut(timeOutAfterCompletion);
  return;
};

export default buttonClick;