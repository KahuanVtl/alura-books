import Header from './Componentes/Header'
import styled from 'styled-components'
import Pesquisa from './Componentes/Pesquisa'
import UltimoLancamentos from './Componentes/UltimosLancamentos'

const AppContainer = styled.div`
        width: 100vw;
        height: 100vh;
        background-image: linear-gradient(90deg, #002F52 35%, #326589);
        
        li {
            list-style: none;
        }
`

function App() {
    return (
        <AppContainer>
            <Header/>
            <Pesquisa/>
            <UltimoLancamentos/>
        </AppContainer>
  );
}

export default App