import { waitTimeBetweenSelectors } from './waitTime.js';
const getTextFromSelector = async ( page, selector, timeOut = waitTimeBetweenSelectors*1000 ) => {
    try {
        // Extract text from the target element
        await page.waitForSelector(selector, { timeout: timeOut });

        let text = await page.$eval(selector, el => el.innerText.trim());

        return text;
        
    } catch (error) {
        throw error;
    }
};

export default getTextFromSelector;