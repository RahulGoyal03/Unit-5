import styled from "styled-components"

export const Button = styled.button`
color : ${props => props.theme === "light" ? "#FEECE9" : "#FE7E6D"};
background : ${props => props.theme === "light" ? "#FE7E6D" : "#FEECE9"} ;
border : 1px solid #FE7E6D;
border-radius: 5px;
padding : 10px;
cursor: pointer;

&:hover {
box-shadow: -1px 3px 3px 5px #FE7E6D;
}
`


export const Div = styled.div`
display : flex;
width : 300px;
height : 300px;
background-color : grey;
justify-content : center;
color : white;
font-weight : 600;
color:aliceblue;

& > p {
    color : green;
}
& > p:hover {
    color : blue;
}

`;

const value = 1

const str = `Value ${value}`