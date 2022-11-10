export default function SecondContainer(props){

    return(
        <div style={{maxWidth:700, alignContent:"center", marginTop:150, marginLeft:300}}>
            {props.children}
        </div>
    )
}