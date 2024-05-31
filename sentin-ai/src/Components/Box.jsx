function Box(props){
    const getColor = () =>{
        switch(props.type) {
            case 'Positive':
                return 'green';
            case 'Neutral':
                return 'yellow';
            case 'Negative':
                    return 'red';
        }
    }
    const selected_style = {
        //marginTop: '20px',
        backgroundColor: getColor(),
        // display:'inline-block',
        display:'inline-block',
        // textAlign: 'center',
        alignItems: 'center',
        fontSize: '23px',
        padding: '5px',
        marginLeft: '100px'
    };

    return(
       <div className="Box" style={selected_style}>{props.name}</div>
    )
}
export default Box;