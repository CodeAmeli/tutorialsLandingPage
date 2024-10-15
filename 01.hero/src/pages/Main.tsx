import { useState } from 'react';
import Frontend from '../templates/Frontend';
import * as S from "./styles";
import ButtonContact from '../atoms/ButtonContact';
import HeroHeaderImage from "../assets/hero-header-image.svg";
import CardActivity from '../molecules/CardActivity';

function Main() {

  return (
    <>
      <Frontend>
        <S.Container>

          <div>
            <h1>Design driven development of your web product</h1>
            <h6>
              We are a full service digital agency that builds immesive user experience.
            </h6>

            <ButtonContact />
          </div>

          <S.ColumnImage>
            <CardActivity/>

            <img src={HeroHeaderImage} alt='Uma mulher fazendo uma pesquisa em um tablet sobre uma mesa' />
          </S.ColumnImage>
        </S.Container>
      </Frontend>
    </>
  )
}

export default Main
