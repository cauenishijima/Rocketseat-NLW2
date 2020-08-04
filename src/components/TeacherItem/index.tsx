import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'


function TeacherItem() {
    return (
        <article className='teacher-item'>
            <header>
                <img src="https://avatars2.githubusercontent.com/u/25585900?s=460&u=3984274f8e4936a9bbce01e253ba1080cb2bbdd4&v=4" alt="Cauê Nishijima" />
                <div>
                    <strong>Cauê Nishijima</strong>
                    <span>JavaScript</span>
                </div>
            </header>

            <p>
                Entusiasta da melhores tecnologias de desenvolvimento web.
            <br /> <br />
            Apaixonado por aprender e aplicar novas tecnologias e/ou arquiteturas que ajudam a melhorar a performance dos apps e a legibilidade do código.
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ 90,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;