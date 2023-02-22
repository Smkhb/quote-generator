// MainBox Index.jsx File

import './MainBox.css'

const MainBox = (props) => {
    return (

        <section className='Section_Principal'>
            <p className='p_Frase'>
            "{props.quote.text}"
            </p>
            <p  className='p_Autor'>
             - {props.quote.author}
            </p>
            <button onClick={props.getQuote} className='btn_Get'>
                Quote
            </button>
            <button className='btn_Tweet'>
                <a
                target="_blank"
                rel='noopener noreferrer' 
                href={`https://twitter.com/intent/tweet?text=${props.quote.text}`}>Tweet</a>
            </button>
        </section>
    )
}
export default MainBox