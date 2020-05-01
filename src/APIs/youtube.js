import axios from 'axios';

const KEY = 'AIzaSyCUEzcnzueqFo2EGgtzMwD-wvPV891nMgk';


//we are creating a pre-configured instance of axios that has a base URL and parameters in it
export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'        
    }
});