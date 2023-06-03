import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import { HELP_FAQ } from '../constant'

const Section = ({ id, question, answer, isVisible, setIsVisible }) => {
    return (
        <div className='border mt-6 p-2'>
            <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-xl'>{question}</h2>
                {
                    id === isVisible ?
                        <AiFillCaretUp className='cursor-pointer' onClick={() => setIsVisible("")} />
                        :
                        <AiFillCaretDown className='cursor-pointer' onClick={() => setIsVisible(id)} />
                }
            </div>
            {
                id === isVisible && <p className='mt-4'>{answer}</p>
            }

        </div>
    )
}

const Help = () => {
    const [isVisible, setIsVisible] = useState("")
    return (
        <div className='w-2/3 mx-auto my-6'>
            {
                HELP_FAQ.map(faq => <Section key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} isVisible={isVisible} setIsVisible={setIsVisible} />)
            }

        </div>
    )
}

export default Help