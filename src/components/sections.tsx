import { CustomComponentProps } from "../interfaces";
import {Container} from './containers';

interface Props extends CustomComponentProps{
    title?: string
}
export const Section=(props: Props)=>{
    return (
        // <div>
        // <Container className={props.className}/>
        // {props?.title ? <h1 className="text-xl px-3 py-2">{props.title}</h1> : ''}
        // {props.children}
        // <Container/>
        // </div>
        <Container className={props.className}>
            {props?.title ? <h1 className="text-xl px-3 py-1.5">{props.title}</h1> : ''}
            {props.children}
        </Container>
    )
}