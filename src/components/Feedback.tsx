import { AxiosResponse } from "axios";
import { FormEvent, useEffect, useState } from "react";
import StarRatings from 'react-star-ratings';
import IFeedback from "../interfaces/feedback";
import { createFeedback, getTopFiveFeedbacks } from "../services/feedback";

export default function Feedback() {

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const [starRating, setStarRating] = useState(1);

  const [savedFeedbacks, setSavedFeedbacks] = useState<IFeedback[] | []>([]);

    const saveFeedback = async (e: FormEvent) => {
        e.preventDefault();
        await createFeedback({ name, feedback, starRating })
        alert('Feedback enviado')

        location.reload()
    }
    
    useEffect( () => {
      const getFeedbacks = async () => {
        const response = await getTopFiveFeedbacks();
        setSavedFeedbacks(response.data)
      };
      getFeedbacks();
    }, [])

    return (
        <section>

          <h1 className="text-3xl text-primary-color text-center font-bold mb-5 lg:text-5xl">Avaliações</h1>
          <p className="text-2xl text-center lg:text-4xl">Veja as avaliações feitas pelos meus clientes </p>

          {
            savedFeedbacks.map(({ id, feedback, name, starRating }) => (
              <div key={id}>
                <h2>{name}</h2>
                <p>{feedback}</p>
                <StarRatings rating={starRating} starRatedColor="darkyellow" />
              </div>
            ))
          }

          <button className="w-4/5 m-8 text-lg p-3 rounded-3xl bg-primary-color text-white" onClick={() => setShowForm(!showForm)}>Já é nosso cliente? Faça uma avaliação</button>
          {
            showForm && (
              <form onSubmit={(e) => saveFeedback(e)} className="flex flex-col justify-center items-center">
                <input className="border-2 border-solid border-lightgray p-2 w-3/4 my-5" placeholder="Nome completo*" onChange={(e) => setName(e.target.value)} required />
                <textarea className="border-2 border-solid border-lightgray p-2 w-3/4" placeholder="Feedback*" onChange={(e) => setFeedback(e.target.value)} minLength={10} required></textarea>
                
                <StarRatings starDimension="30px" rating={starRating} changeRating={(newRating) => setStarRating(newRating)} starRatedColor="darkyellow" starHoverColor="yellow"  />

                <button className="bg-primary-color text-white text-2xl p-5 my-5 rounded-3xl w-4/5" type="submit">Enviar</button>
              </form>
            )
          }

        </section>


    );
}