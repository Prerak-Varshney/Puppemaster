import { waitTimeBetweenActions } from './waitTime.js';
import buttonClick from './buttonClick.js';
import timeOut from './timeOut.js';

// Types of filters, More filters Needed.

// For radio or checkbox filters, single or multiple selection.
const handleFilters = async ( page, parentFilter, filtersList, isButtonIndexed=false, index=0 ) => {

    await buttonClick(page, parentFilter);
    await timeOut(waitTimeBetweenActions);

    for (const filter of filtersList) {
        await buttonClick(page, filter);
        await timeOut(waitTimeBetweenActions);
    }

    if(!isButtonIndexed){
        await buttonClick(page, buttonClasses.primary);    
        return;
    }

    await buttonClick(page, buttonClasses.primary, { isIndexed: true, index: index });
    await timeOut(waitTimeBetweenActions);
    
    return;
}

export default handleFilters;