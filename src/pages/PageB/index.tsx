import React, { useState, useEffect } from 'react';

//import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Header, Title, SubTitle, Button, Table } from './styles';

import logoImg  from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi';
import { } from './styles';
import api from '../../services/api';
import { math } from 'polished';

import { parseISO, isAfter } from 'date-fns';



interface Pld { 
    name: string;
    values : {
        dateTime: string;
        value: number;
    };
    
}

interface ValuesPld {
    value: number;
}

interface DateTimePLD {
    dateTime: string;
}

interface ListData {
    name: string;
    dateTime: string;
    value: number;
}

const PageB: React.FC = () => {

    const [tariffFlags, setTariffFlags] = useState()
    const [showTable, setShowTable] = useState(false);
    const [dataPLD, setDataPLD] = useState<Pld[]>([]);

    const [valuesPLD, setValuesPld] = useState<ValuesPld[]>([]);
    const [dateTimePLD, setDateTimePld] = useState<DateTimePLD[]>([]);
    

    const [listData, setListData] = useState<ListData[]>([]);

    useEffect(() => {

        // api.get(`api/energy-providers`)
        //     .then(response => {
        //         console.log(`https://apidosetoreletrico.com.br/api/energy-providers`);  
        //         console.log(response.data);
        //     }).catch((err) => {console.log(err)})

        // api.get(`/api/energy-providers/6`)
        //     .then(response => {
        //         console.log(`https://apidosetoreletrico.com.br/api/energy-providers/{energyProviderId}`);  
        //         console.log(response.data);  
        //     }).catch((err) => {console.log(err)})

        // api.get(`api/energy-providers/6/time-of-use`)
        //     .then(response => {
        //         console.log(`api/energy-providers/{energyProviderId}/time-of-use`);  
        //         console.log(response.data);
        //     }).catch((err) => {console.log(err)})

        // api.get(`api/energy-providers/tariff-flags`)
        //     .then(response => {
        //         console.log(`api/energy-providers/tariff-flags`);  
        //         console.log(response.data);
        //     }).catch((err) => {console.log(err)})
        
        // api.get(`api/energy-providers/6/tariffs`)
        //     .then(response => {
        //         console.log(`https://apidosetoreletrico.com.br/api/energy-providers/{energyProviderId}/tariffs`);  
        //         console.log(response.data);
        //     }).catch((err) => {console.log(err)})
        
        // api.get(`api/pld`)
        //     .then(response => {
        //         console.log(`https://apidosetoreletrico.com.br/api/pld`);  
        //         console.log(response.data);
        //     }).catch((err) => {console.log(err)})
      
    }, []);

    async function handleSearch(): Promise<void> {
        
        setShowTable(true);

        api.get(`api/pld`)
            .then(response => {
                console.log(response.data);
                setDataPLD(response.data.items);
                // setDataPldValues(response.data.items.values);
                // renderDataPLD();  
                renderDataPLD(); 
            }).catch((err) => {console.log(err)})       
    }

    

    const renderDataPLD = () => {
        
        let arrayListData = [];
        console.log(dataPLD.values);

        let namePLD:Array<any> = [];
        
        for(let i = 0; i < dataPLD.length; i++) {
            namePLD.push(dataPLD[i].name);
        }

        let arrayValuePLD: Array<any> = [];
        
        arrayValuePLD = dataPLD.map(item => {
            return item.values;
        })

        for(let j = 0; j < dataPLD.length; j++) {
            let obj = { name: dataPLD[j].name, dateTime: arrayValuePLD[j][0].dateTime, value:arrayValuePLD[j][0].value  };
            arrayListData.push(obj);
        }

        // console.log(arrayValuePLD);
        // console.log(arrayValuePLD[0][0].value);


        // for (let i= 0; i < arrayValuePLD.length; i++) {
        //     valuesPLD.push(arrayValuePLD[i][0].value);
        //     dateTimePLD.push(arrayValuePLD[i][0].dateTime);
        // }

        // console.log(valuesPLD);
        // console.log(dateTimePLD);
        
        
        // arrayListData = [namePLD, valuesPLD, dateTimePLD];
        
        return (
            arrayListData.map(item => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.dateTime}</td>
                    <td>{item.value}</td>
                </tr>
            ))
        );

            
        
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
              <Title>Preço da Liquidação das Diferenças (PLD)</Title>
              <SubTitle>Dados fornecidos pela ANEEL do PLD por submercados (N, S, NE, SE/CO) com os patamares: Leve, Médio e Pesado).</SubTitle>
              
              <Button>
                <button type="button" onClick={() => handleSearch()}>Consultar</button>
              </Button>
              
              { showTable ?
                <Table>
                    <table>
                            <thead>
                                <tr>
                                    <th>Submercado e Patamar</th>
                                    <th>Data e Hora</th>
                                    <th>PLD</th>             
                                </tr>
                            </thead>
                            <tbody>  
                                    { renderDataPLD() }   
                            </tbody>
                    </table>
                </Table>
                :
                null
              }
          </>
    );
};

export default PageB;
