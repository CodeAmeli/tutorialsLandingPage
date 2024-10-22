import React from 'react'
import * as S from './styles';
import CardActivity from '../../molecules/CardActivity';
import HeroHeaderImage from "../../assets/hero-header-image.svg";
import CardChart from '../../molecules/CardChart';

const ProductStats = () => {
    return (
        <S.Container>
            <CardActivity />
            <CardChart/>

            <img src={HeroHeaderImage} alt='Uma mulher fazendo uma pesquisa em um tablet sobre uma mesa' />
        </S.Container>
    )
}

export default ProductStats