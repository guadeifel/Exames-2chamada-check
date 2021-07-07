import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import api from '../../services/api'
import {Link} from 'react-router-dom'

const Home: React.FC = () => {

    const [exames, setExames] = useState([])
    const [nome, setNome] = useState('')
    const [tipoexame, setTipoExame] = useState('')
    const [nomeexame, setNomeExame] = useState('')
    const [laboratorio, setLabs] = useState('')
    const [mesanoexame, setData] = useState('')

    async function handleDelete(id: string){
       await api.delete(`/exames/${id}`)
     }

    async function handleAddExames(event:any) {
        event.preventDefault()

        const novoExame = {
            nome:nome,
            tipoexame:tipoexame,
            nomeexame:nomeexame,
            laboratorio:laboratorio,
            mesanoexame:mesanoexame
        }

        await api.post("/exames", novoExame)

        setTipoExame('')
        setLabs('')
        setNomeExame('')
        setNome('')
        setData('')
    } 

     useEffect(() =>{
        api.get('/exames').then(response => setExames(response.data))
      },[exames])

    return (
        <Container>
            <span>
                <form onSubmit={handleAddExames}>
                    <input value={nome} onChange={e => setNome(e.target.value)} type='text' name='nome' placeholder='Nome' />
                    <select value={tipoexame} onChange={e => setTipoExame(e.target.value)} name="tipoexame" id="tipoexame">
                        <option value="">Escolha um</option>
                        <option value="admissional">Admissional</option>
                        <option value="periodico">Periódico</option>
                        <option value="demissional">Demissional</option>
                    </select>
                    <select value={nomeexame} onChange={e => setNomeExame(e.target.value)} name="nomeexame" id="nomeexame">
                        <option value="">Escolha um</option>
                        <option value="hemograma">Hemograma Completo</option>
                        <option value="audiometria">Audiometria</option>
                        <option value="acuidade">Acuidade Visual</option>
                    </select>
                    <select value={laboratorio} onChange={e => setLabs(e.target.value)} name="laboratorio" id="laboratorio">
                        <option value="">Escolha um</option>
                        <option value="labfunc">Lab Funcional</option>
                        <option value="labmed">Lab Medicina</option>
                    </select>
                    <input value={mesanoexame} onChange={e => setData(e.target.value)} type='text' name='mesanoexame' placeholder='Mes e Ano' />
                    <button type="submit">Salvar</button>
                    <Link to='/total'><button>Totais</button></Link> 
                </form>
            </span>
            
            {exames.map((item: any, indice) =>
                <ul key={indice}>
                        <li>Nome: {item.nome}</li>
                        <li>Tipo Exame: {item.tipoexame} </li>
                        <li>Nome Exame: {item.nomeexame} </li>
                        <li>Laboratório: {item.laboratorio} </li>
                        <li>Mes e Ano: {item.mesanoexame} </li>
                        <button onClick={()=>handleDelete(item.id)}>Deletar</button>
                </ul>
                 )}
            

        </Container>
    )

}

export default Home



