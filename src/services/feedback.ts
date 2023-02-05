import api from '.';
import IFeedback from '../interfaces/feedback';

export const createFeedback = async (data: IFeedback) => {
    const response = await api.post('/feedback', {...data});
    return response;
}

export const getTopFiveFeedbacks = async () => { 
    const response = await api.get('/feedbacktop5')
    return response;
}