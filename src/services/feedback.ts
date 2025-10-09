import api from '.';
import IFeedback from '../interfaces/feedback';

export const createFeedback = async (data: IFeedback) => {
    // await api.post('/feedback', {...data});
    return true;
}

export const getTopFiveFeedbacks = (): IFeedback[] => { 
    // const response = await api.get('/feedbacktopfive')
    
    // return response.data;

    const response: IFeedback[] = [ 
        {
            name: "Leandra C. Dal Rovere",
            starRating: 5,
            feedback: "Excelente atendimento!\n\n O técnico foi muito profissional, pontual e resolveu o problema da minha máquina de lavar com eficiência. Explicou tudo com clareza e deixou o local limpo após o conserto. Recomendo o serviço."
        }
    ]


    return response;
}