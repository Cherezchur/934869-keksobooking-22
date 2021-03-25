import './markup-ads.js';
import './util.js';
import './data.js';
import './form-logics.js';
import './page-load.js';
import {getAds} from './filtered-ads.js';
import {initMap} from './map.js';
import {getData, initSubmitForm} from './api.js';
import {showSuccessfulSendingMessage} from './submit-form.js';

export const ads = new Array;

const onLoad = (offers) => {
  initMap(offers);
  getAds(offers);
}

getData(onLoad);
initSubmitForm(showSuccessfulSendingMessage);
