import styled from 'styled-components';
import {motion} from 'framer-motion';
import { renderGradient } from './utils';

export const Wrapper = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    cursor: pointer;
    perspective: 2000;
` 

export const CardWrapper = styled(motion.div)`
    width: 50rem;
    height: 70rem;
    display: grid;
    place-items: center;
    overflow: hidden;
`

export const Card = styled.div`
    width: 30rem;
    height: 55rem;
    background: #eee;
    border-radius: 2.5rem;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.7);
    position: relative;
`

export const CardTop = styled.div`
    width: 100%;
    height:50%;
    padding: 3rem;
    border-radius: 2.5rem 2.5rem 0 0;
    transition: background 0.5s;
    background-image: linear-gradient(${({currentColor}) => renderGradient(currentColor)});
`

export const Logo = styled.img`
    width: 10rem;
    margin-bottom: 2rem;
`

export const CTopText = styled.div`
    color: #fff;
`

export const CTopTitle = styled.h1`
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .1rem;
    margin-bottom: 1rem;
`

export const Desrcption = styled.p`
    font-weight: 400;
    letter-spacing: .1rem;
`

export const Shoes = styled(motion.div)`
    height: 20%;
    user-select: none;

    img{
        user-select: none;
    }
`

export const ShowOne = styled(motion.img)`
    width: 25rem;
    position: absolute;
    top: -10rem;
    right: -14rem;
    transition: transform 1s;
`

export const ShowTwo = styled(motion.img)`
    width: 33rem;
    position: absolute;
    top: -22rem;
    right: -55rem;
    transition: transform 1s;
`