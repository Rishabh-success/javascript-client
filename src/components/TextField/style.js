import styled, { css } from 'styled-components';

const Div = styled.div`
margin : 2px;
border:1px solid black;
box-shadow: 5px 10px 18px rgb(214, 212, 212);
padding:1px;
`;
const Error = styled.p`
color: red;
`;
const Input = styled.input`
width: 98.2%;
padding: 0.8%;
border: 1px solid gray;
border-radius: 5px;
margin-left: 2px;
${(props) => props.error
        && css`
border: 1px solid red;
color: red;
`};
}
${(props) => (props.value && !props.disabled && !props.error)
        && css`
border:1px solid orange;
color: black;
`};
}
`;
export { Div, Error, Input };
