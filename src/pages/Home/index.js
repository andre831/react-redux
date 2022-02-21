import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { api } from "../../services/api";

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Card from "../../components/Card";
import { addReserve } from '../../store/modules/reserve/actions';

function Home() {
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function getTrip() {
            const response = await api.get('/trips');

            const data = response.data;

            setTrips(data)
        }
        getTrip();
    }, []);

    
    function addTrip(trip){
        dispatch(addReserve(trip));
    };

    return (
        <Container>
            <Wrapper>
                {
                    trips.map(item => {
                        return (
                            <Card key={item.id}
                                folder={item.image}
                                id={item.id} title={item.title}
                                status={item.status}
                                actionButton={()=>addTrip(item)}
                                textButton="Reservar"
                            />
                        );
                    })
                }
            </Wrapper>
        </Container>
    )
}

export default Home;