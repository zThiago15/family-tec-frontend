import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

interface FAQsProps {
  question: string;
  answer: string;
}

export default function FAQs(props: FAQsProps) {

  const { answer, question } = props;

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className={` m-6 border-solid mb-2 w-[90%] border-gray-300 border-2 ${showAnswer && 'border-l-4 border-l-primary-color'}
      mx-auto p-4 lg:w-[50%]`}
    >
        <button 
          className="cursor-pointer w-full px-4 flex justify-between items-center" 
          onClick={ () => setShowAnswer(!showAnswer)}
        >
          <p className="text-primary-color font-semibold">{question}</p>
          {showAnswer ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
        <span className={`${showAnswer ? 'block' : 'hidden'} overflow-hidden p-4`}>
          <p>{answer}</p>
        </span>

    </section>
  );
}