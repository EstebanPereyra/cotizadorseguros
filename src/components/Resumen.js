import React from 'react';
import styled from '@emotion/styled';
import {primerMayucula} from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #ffffff;
    margin-top: 1rem;
`

const Resumen = ({datos}) => {
    
    const {marca, year, plan} = datos;
    if(marca === '' || year === '' || plan === '') return null;
    return (
        <ContenedorResumen> 
        <h2>Resumen de cotización</h2>
        <ul>
            <li>Marca: {primerMayucula(marca)} </li>
            <li>Año: {year} </li>
            <li>Plan: {primerMayucula(plan)} </li>
        </ul>
        </ContenedorResumen>
     );
}
 
export default Resumen;