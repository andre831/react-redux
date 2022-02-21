import { WrapperField } from './style';

function Wrapper(props){
    return(
        <WrapperField>
            {props.children}
        </WrapperField>
    );
}

export default Wrapper ;