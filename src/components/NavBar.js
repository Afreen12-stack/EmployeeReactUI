import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

function NavBar(props) {

  return (
   
      <Navbar bg="dark" variant="dark" >
          <Navbar.Brand href="/" >Home</Navbar.Brand>
          <Navbar.Brand href="AddContact" >Add Contact</Navbar.Brand>
      </Navbar>

  );
}

export default NavBar;


export const Box = styled.div`

background: black;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	marginLeft:2%;
  marginRight:2%
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
