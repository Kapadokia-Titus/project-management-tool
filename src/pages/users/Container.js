export default function Container(props){

    return(
        <div style={{maxWidth:300, alignContent:"center", marginTop:300, marginLeft:500}}>
            {props.children}
        </div>
    )
}

