import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import CardReserve from '../../components/CardReserve';
import { removeReserve } from '../../store/modules/reserve/actions';

function Reserve() {
    const dispatch = useDispatch();

    const reserves = useSelector(
        state => state.reserve
    );

    function toggleRemoveReserve(id){
        dispatch(removeReserve(id));
    };

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
                                actionButton={()=> toggleRemoveReserve(item.id)}
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