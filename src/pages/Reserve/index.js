import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { api } from "../../services/api";

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import CardReserve from '../../components/CardReserve';

function Reserve() {
    const reserves = useSelector(
        state => state.reserve
    );

    console.log(reserves)


    return (
        <Container>
            <Wrapper>
                {
                    reserves.map(item => {
                        return (
                            <CardReserve key={item.id}
                                folder={item.image}
                                id={item.id} title={item.title}
                                status={item.status}
                                amount={item.amount}
                                actionButton={()=>{}}
                                textButton="Excluir"
                            />
                        );
                    })
                }
            </Wrapper>
        </Container>
    )
}

export default Reserve;