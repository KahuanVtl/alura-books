import './estilo.css'
import perfil from '../../Imagens/perfil.svg'
import sacola from '../../Imagens/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
            { icones.map( (icone) => (
            <li className='icone'><img src={icone}></img></li>
            )) }
        </ul>
    )
}

export default IconesHeader