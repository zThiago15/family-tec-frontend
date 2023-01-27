import { FormEvent, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

interface IFeedback {
    name: string;
    textFeedback: string;
    starsQuantity: number;
} 

export default function Feedback() {
    
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [textFeedback, setTextFeedback] = useState('');
    const [starsQuantity, setStarsQuantity] = useState(1);

    const saveFeedback = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <section>
            {
                // feedbacks.map(({name, starsQuantity, textFeedback }, index) => (
                //     <div className="w-[80%]" key={index}>
                //         <h2>{name}</h2>
                //         <p>{textFeedback}</p>
                //     </div>
                // ))
            }

          <h1 className="text-3xl text-primary-color text-center font-bold mb-5 lg:text-5xl">Avaliações</h1>
          <p className="text-2xl text-center lg:text-4xl">Veja as avaliações feitas pelos meus clientes </p>


          <button onClick={() => setShowForm(!showForm)}>Já é nosso cliente? Faça uma avaliação</button>

          {
            showForm && (
              <form onSubmit={(e) => saveFeedback(e)}>
                <input placeholder="Nome completo*" onChange={(e) => setName(e.target.value)} required />
                <textarea placeholder="Feedback*" minLength={10} ></textarea>
                <input placeholder="Nota" type="number" min={1} max={5} onChange={(e) => setStarsQuantity(Number(e.target.value))} required />
                <button type="submit">Enviar</button>
              </form>
            )
          }


        </section>


    );
}