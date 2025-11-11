function Selection({ children }){
    const front = children[0];
    const back = children[1];
    return (
        <div className='container' id='selection'>
            <div className='row h-100'>
                <div className="col-md-6 h-100" id='front'>{front}</div>
                <div className='col-md-6 h-100' id='back'>{back}</div>
            </div>
        </div>
    );
}

export default Selection;