import { CardContainer, CardImg,
    CardContainerTitle, CardTitleContent,
    CardContainerList, CardListContent,
    CardListButton
} from './style';

function Card(props) {
    return (
        <CardContainer>
            <CardImg src={props.folder} />
            <CardContainerTitle>
                <CardTitleContent>
                    {props.title}
                </CardTitleContent>
            </CardContainerTitle>
            <CardContainerList>
                <CardListContent>
                    {props.status ? "Disponível" : "Não disponível"}
                </CardListContent>
                <CardListContent>
                    ID: {props.id}
                </CardListContent>
                <CardListContent>
                    <CardListButton onClick={props.actionButton}>
                        {props.textButton}
                    </CardListButton>
                </CardListContent>
            </CardContainerList>
        </CardContainer>
    );
}

export default Card;