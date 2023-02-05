import api from '.';
import IFeedback from '../interfaces/feedback';

export const createFeedback = async (data: IFeedback) => {
    const response = await api.post('/feedback', {...data});
    return response;
}