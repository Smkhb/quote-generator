// MainBox Index File

import './MainBox.css'

const MainBox = () => {
    return (
        <section className='Section_Principal'>
            <p className='p_Frase'>
                In order to write about life first you must live it.” 
            </p>
            <p  className='p_Autor'>
                Autor: Ernest Hemingway
            </p>
            <button className='btn_Get'>
                Get a Quote
            </button>
            <button className='btn_Tweet'>
                Tweet the Quote
            </button>
        </section>
    )
}
export default MainBox