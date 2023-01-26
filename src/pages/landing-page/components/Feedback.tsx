import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

interface IFeedback {
    name: string;
    feedback: string;
    starsQuantity: number;
} 

export default function Feedback() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const saveFeedback = (e: Event) => {
        e.preventDefault();
        console.log('hello');
        
    }

    const starsFeedback = (ammount: number) => {
        for (let i = 0; i < ammount; i += 1) {
            return (
                <AiFillStar />
            )
            
        }
    }

    return (
        <section>
            {
                feedbacks.map(({name, starsQuantity, feedback }) => (
                    <div className="w-[80%]">
                        <h2>{name}</h2>
                        {starsFeedback(starsQuantity)}
                        <p>{feedback}</p>
                    </div>
                ))
            }

          <h1 className="text-3xl text-primary-color text-center font-bold mb-5 lg:text-5xl">Avaliações</h1>
          <p className="text-2xl text-center lg:text-4xl">Veja as avaliações feitas pelos meus clientes </p>


          <button onClick={() => setShowForm(!showForm)}>Já é nosso cliente? Faça uma avaliação</button>

          {
            showForm && (
              <form>
                <input placeholder="Nome completo*" required />
                <textarea placeholder="Feedback*" minLength={10} ></textarea>
                <input type="number" required />
                <button onSubmit={() => saveFeedback}></button>
              </form>
            )
          }


        </section>


    );
}