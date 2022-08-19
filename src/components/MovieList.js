import styled from "styled-components" ;

export const MovieList = styled.ul`
width: 100%;
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
column-gap: 4rem;
row-gap: 2rem;
padding-inline-end: 2%;
`