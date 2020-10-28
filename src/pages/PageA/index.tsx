import React, { useState, useEffect, FormEvent } from 'react';

//import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Header, Title, EnergyProviders, Form, Error } from './styles';

import logoImg  from '../../assets/logo.svg';
import {  FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';   

import ProviderCard from '../../components/ProviderCard'


interface FilteredProviders {
    id: number;
    name: string;
}

interface EnergyProviders {
    id: number;
    name: string;
}

interface ProviderCard {
    name: string;
}

const PageA: React.FC = () => {

  const [ energyProviders, setEnergyProviders ] = useState<EnergyProviders[]>([]);

  const [ searchProviders, setSearchProviders ] = useState('');

  const [ filteredProviders, setFilteredProviders ] = useState<FilteredProviders[]>([]);
    
  const [ inputError, setInputError ] = useState('');

  useEffect(() => {
    
    api.get(`api/energy-providers`).then(response => {
        //console.log(response.data);
        setEnergyProviders(response.data);
        

    }).catch((err) => {console.log(err)})
        
  
  }, []);

  async function handleSearchRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        
    console.log(energyProviders);
    event.preventDefault();
    
    if (!searchProviders) {
        setInputError('Digite o nome de uma empresa!');
        return;
    }

    const filterProvider = energyProviders.filter(function(provider) {
        if (provider.name.toLowerCase() === searchProviders.toLowerCase())
            return provider;
        else
            return null;
    });

    console.log(filterProvider);
    setFilteredProviders(filterProvider);

    if (filterProvider.length === 0) {
        setInputError('Digite corretamente o nome da empresa!');
        return;
    }

    try {
    
        // const response = await api.get<Repository>(`repos/${newRepo}`);

        // const repository = response.data;

        // setRepositories([ ...repositories, repository]);
        // setNewRepo('');
        setInputError('');
    
    } catch (err) {
        setInputError('Erro na busca por respositório!');
    } 
}

  return (
        <>
            
            
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                      Distribuidoras
                </Link>
                <Link to="/pageb">
                      PLD
                </Link>
                
                {/* <Link to="/">
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link> */}
            </Header>
            
            
            <Title>Encontre os Dados da Distribuidora de Energia Desejada!</Title>

            <Form hasError={!!inputError} onSubmit={handleSearchRepository}>
                <input value={searchProviders} onChange={(e) => setSearchProviders(e.target.value)} placeholder="Digite o nome da empresa desejada..."/>
                <button type="submit">Procurar</button>
            </Form>
            
                {inputError && <Error>{inputError}</Error>}

            <EnergyProviders>
                {filteredProviders.map(providers => (
                    <Link key={providers.id} to="/">
                        
                        <ProviderCard name={providers.name}/>
                        
                        <FiChevronRight size={20}/>
                        
                    </Link>
                ))}
            </EnergyProviders>
        </>
  );
};

export default PageA;
