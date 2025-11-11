function Frame({ children }){
    return (
        <div className='container border-start border-end border-dark-subtle min-vh-100 px-0' id='frame'>
            <div className='row h-100'>
                <div className='col h-100'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Frame;