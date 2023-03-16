import './.htaccess';
import './robots.txt';
import './assets/styles/index.scss';
import './assets/js/phonemask.js';
import './assets/js/get-prices.js';
import './assets/components/header/header.js';
import './assets/components/swiper/swiper.js';
import './assets/components/parallax/parallax.min.js';
import './assets/components/parallax/parallax-cust.js';
import './assets/components/model-card/model-card.js';
import './assets/components/modal/modal.js';
import './assets/components/good-modal/good-modal.js';
import './assets/components/premium-good-modal/premium-good-modal.js';
import './assets/components/tariff-modal/tariff-modal.js';
import './assets/components/yamap/yamap.js';
import './assets/components/offer-item/offer-item.js';
import './assets/components/video-widget/video-widget.js';
import './assets/sections/models/models.js';
import YandexMetrika from './assets/js/analytics/yandex-metrika.js';
import createYmapsObject from "./assets/js/yandex-maps.js";
import MangoOffice from './assets/js/analytics/mango-office.js';
import Envybox from './assets/js/analytics/envybox.js';
import FormSender from './assets/js/sender.js';
import Roistat from './assets/js/analytics/roistat.js';

const analyticsTimeout = setTimeout(() => {
    new YandexMetrika([{
        id: 91840915,
        params: { webvisor: true },
    }]);
    new MangoOffice(23176);
    clearTimeout(analyticsTimeout);
}, 2000);

new Roistat('8d1d08aebc35d0292c2ca7b696150b7e');

const envyboxTimeout = setTimeout(() => {
    new Envybox();
    clearTimeout(envyboxTimeout);
}, 4000);

/* eslint-enable no-new */

const formSender = new FormSender({
    createLeadUrl: 'https://collector.centr-to.ru/lead/create',
    group_id: '1',
    source: 'шиномонтажное.сто5.рф',
    type: '1359182',
});

document.addEventListener('DOMContentLoaded', () => {
    formSender.init();
    createYmapsObject();
});
