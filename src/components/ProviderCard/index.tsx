import React from 'react';
import { Container } from './styles'; 

interface NameProviders {
    name: string;
}

const ProviderCard: React.FC<NameProviders> = ({name}: NameProviders) => (
    
    <Container>
        <div>{name}</div>
    </Container>

);

export default ProviderCard;