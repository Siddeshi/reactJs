import React from 'react';
import AnimalCard from './AnimalCard';
import data from './data';

function showAdditional(additional) {
    const alertInformation = Object.entries(additional)
      .map(information => `${information[0]}: ${information[1]}`)
      .join('\n');
    alert(alertInformation)
  };

function Animals() {
    return(
        <div className = "wrapper">
            <h1>Animals</h1>
            {
                data.map(animal => (
                    <AnimalCard 
                    key={animal.name} 
                    name={animal.name}
                    scientificName={animal.scientificName}
                    size={animal.size}
                    diet={animal.diet}
                    additional={animal.additional}
                    showAdditional={showAdditional}
                     />
                ))
            }
        </div>
    )
}
export default Animals;