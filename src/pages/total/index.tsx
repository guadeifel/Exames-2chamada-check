import React, { useState, useEffect } from 'react';
import api from '../../services/api'

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
    const [demissional, setDemissional] = useState(0);

        async function loadData() {
          const dados = await api.get('/exames').then(response => response.data)
          //setX(dados)
          console.log('dados', dados)
        }
    
    useEffect(()=>{
        loadData()
    },[])
            
    setDemissional(x.filter(f => f.tipoexame === 'demissional').length)  

   
    
    return ( 
        <div>
            Total Exames: {demissional}
        </div>
    )
}
  
export default Total



