import VueSimpleAlert from "vue-simple-alert";
import VueRellax from 'vue-rellax';
import VueFullPage from 'vue-fullpage.js'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

Vue.use(VueSimpleAlert);
Vue.use(VueRellax);

if(isClient) {
    Vue.use(VueFullpage);
  }
}