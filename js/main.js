import './markup-ads.js';
import './util.js';
import './data.js';
import './form-logics.js';
import './page-load.js';
import {initMap} from './map.js';
import {getData, initSubmitForm} from './api.js';
import {showSuccessfulSendingMessage} from './submit-form.js';

const onLoad = (offers) => {
  initMap(offers);
}

getData(onLoad);
initSubmitForm(showSuccessfulSendingMessage);
