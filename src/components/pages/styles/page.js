import styled from "styled-components"


export const MainContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export const CenterContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
height:80vh;


`

export const Title = styled.div`
border-bottom: 1px solid gray;
width:70%;
text-align: center;
`

export const LocationQuestion = styled.div`
text-align: center;
`

export const CityEntry = styled.input`
border: 0;
text-align: center;
border-bottom: 1px solid gray;
`

export const LocationError = styled.div`
color: red;
text-align: center;
height:122px;
`

export const LocationSuccess = styled.div`
display: flex;
justify-content: center;

`

export const AllLocationsContainer = styled.div`
display:flex;
width: 560px;
flex-direction: row;
align-items: center;
border: 1px solid #CCC;
background-color:  #EEF;
border-radius:10px;
padding:20px;
@media(max-width:600px)
  {
    padding:2vw;
    width: 95%
  }

`