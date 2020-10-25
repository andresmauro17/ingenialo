import axios from 'axios';

var urlIn = window.location.href
var arr = urlIn.split("/");
var currentUrl = arr[0] + "//" + arr[2]+"/api"
import cookiesService from '@/services/cookiesService.js'

let instance = axios.create({
    baseURL: currentUrl,
    headers: {'X-CSRFToken': cookiesService.getCookieByName('csrftoken')},
    //send a pseudo params for the browser doesnt take past cache when back
    params: {
        pseudoParam: new Date().getTime()
      }
});

export default instance;