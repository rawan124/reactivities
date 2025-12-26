import axios from 'axios';
import { store } from '../stores/store';
const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
export const apiAgent=axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

apiAgent.interceptors.request.use(config=>{
    store.uiStore.isBusy();
    return config;
})
apiAgent.interceptors.response.use(async response=>{
    try {
        await sleep(1000);
        return response;

    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    } finally{
        store.uiStore.isIdle();
    }
});
export default apiAgent;