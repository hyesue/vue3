import './assets/styles/common.scss';
import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import {createI18n} from 'vue-i18n';
import koLocale from './lang/ko.json';
import enLocale from './lang/en.json';

// 다국어 데이터 설정
const messages = {
  ko: koLocale, // 한국어 번역 데이터
  en: enLocale, // 영어 번역 데이터
};

const i18n = createI18n({
  locale: 'en', // 기본 언어 설정
  messages,
});

createApp(App).use(store).use(router).use(i18n).mount('#app');
