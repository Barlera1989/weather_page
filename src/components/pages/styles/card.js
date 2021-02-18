import styled from "styled-components"
import { motion } from "framer-motion"

export const CardContainer = styled(motion.div)`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
border: 1px solid #CCC;
background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.05), #FFF);
width: 100px;
height:120px;
margin:5px;
@media(max-width:600px)
  {
    width:15vw;
    height:20vw;
    margin:1.5vw;
  }

`

export const CardTexts = styled.div`
margin:10px;
font-size: ${(props) => `${props.font_size}px`};
@media(max-width:600px)
  {
    margin:1.5vw;
    font-size: ${(props) => `${(props.font_size) / 1.8}px`};
  }

`

