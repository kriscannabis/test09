import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiThumbUp } from '@mdi/js';
import Link from 'next/link'

const CardWraper = styled.div`
    width: 100%;
    height: 280px;
    // background: #1e1e1e;
`;

const Img = styled.img`
    width: 100%;
    // background: center/contain no-repeat url(props.src);
`;

const ImgBG = styled.div`
    width: 100%;
    height: 200px;
    background: center/cover no-repeat url(${props=>props.ssrc});
    background-color: #${props=>props.color}
`;

const Title = styled.div`
    width: 100%;
    margin: 8px 0 5px;
    text-align: left;    
`;

const BotomWr = styled.div`
    width: 100%;
    padding: 0 10px 10px;
    text-align: left;
`;

const Rating = styled.div`
    display: flex;
    align-items: flex-end;
`;

export default function Card(props) {
    return (
        <CardWraper>
            <Link href={"/game/"+props.id}>
                <div><ImgBG ssrc={props.background_image} color={props.dominant_color}/></div> 
            </Link>
            <BotomWr>
                <Title><Link href={`/game/${props.id}`}>{props.name}</Link></Title>
                Релиз:{new Date(props.released).toLocaleDateString()}
                <Rating>
                    <Icon path={mdiThumbUp} style={{'marginRight':'5px'}} size={1}/>{props.rating} 
                </Rating>
            </BotomWr>
        </CardWraper>
    )
}