import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import {Container} from './styles'
import {Link} from 'react-router-dom'

interface IExame {
    id: string;
    nome: string;
    tipoexame: string;
    nomeexame: string;
    mesanoexame: string;
    laboratorio: string;
}

const Total: React.FC = () => {
    const [x, setX] = useState<IExame[]>([]);
        
    useEffect(()=>{
        api.get('/exames').then(response => setX(response.data))
    },[])

    let totDemissional =  x.filter(f => f.tipoexame === 'demissional').length
    let totPeriodico =  x.filter(f => f.tipoexame === 'periodico').length
    let totAdmissional =  x.filter(f => f.tipoexame === 'admissional').length
    let totHemograma =  x.filter(f => f.nomeexame === 'hemograma').length
    let totAudiometria =  x.filter(f => f.nomeexame === 'audiometria').length
    let totAcuidade =  x.filter(f => f.nomeexame === 'acuidade').length
    let totLabMed =  x.filter(f => f.laboratorio === 'labmed').length
    let totLabFunc =  x.filter(f => f.laboratorio === 'labfunc').length
    
    return ( 
        <Container>
            <div>
            <h1>Live Report</h1>
            <table>
                <tr>
                    <th>Total Tipo Demissional:</th>
                    <td>{totDemissional}</td>
                </tr>
                <tr>
                    <th>Total Tipo Periódico:</th>
                    <td>{totPeriodico}</td>
                </tr>
                <tr>
                    <th>Total Tipo Admissional:</th>
                    <td>{totAdmissional}</td>
                </tr>
                <tr>
                    <th>Total Hemograma Completo:</th>
                    <td>{totHemograma}</td>
                </tr>
                <tr>
                    <th>Total Audiometria:</th>
                    <td>{totAudiometria}</td>
                </tr>
                <tr>
                    <th>Total Acuidade: </th>
                    <td>{totAcuidade}</td>
                </tr>
                <tr>
                    <th>Total Hemograma Completo: </th>
                    <td>{totHemograma}</td>
                </tr>
                <tr>
                    <th>Total Audiometria: </th>
                    <td>{totAudiometria}</td>
                </tr>
                <tr>
                    <th>Total Acuidade:</th>
                    <td>{totAcuidade}</td>
                </tr>
                <tr>
                    <th>Exames Realizados no Lab Medicina:</th>
                    <td>{totLabMed}</td>
                </tr>
                <tr>
                    <th>Exames Realizados no Lab Funcional: </th>
                    <td>{totLabFunc}</td>
                </tr>           
            </table> 

           <Link to="/"><button type="button">Voltar</button></Link> 
        </div>
        </Container>
        
    )
}
  
export default Total



