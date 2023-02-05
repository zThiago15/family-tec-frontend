import api from '.';
import IFeedback from '../interfaces/feedback';

export const createFeedback = async (data: IFeedback) => {
    await api.post('/feedback', {...data});
    return true;
}

export const getTopFiveFeedbacks = async () => { 
    const response = await api.get('/feedbacktopfive')
    return response.data;
}