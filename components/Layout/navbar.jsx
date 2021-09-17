import { mdiMenu } from '@mdi/js';
import Icon from '@mdi/react';
import styled from 'styled-components';

const MenuBtn = styled.div`
padding: 10px;
height: 50px;
line-height: 44px;
`

const Header = styled.div`
display:flex;
background: #1e1e1e;
margin-bottom: 20px;
`

export default function Navbar(){
    return(
        <>
            <Header>
                <MenuBtn className="something">
                    <Icon path={mdiMenu} size={1}/>
                </MenuBtn>                
                    <img title="Gamehub"
                    height="50px" 
                    src="/logo_1.png"/>        

            </Header>
        </>
    )
}