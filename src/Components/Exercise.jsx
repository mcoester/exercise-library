import { useEffect } from 'react';

function Exercise( { 
    isLoading, 
    exercise, 
    data,
    imgIndex, setImgIndex, } ){
        let jsxArray;
        
        useEffect(() => {
            if(data) {
                setImgIndex(new Array(data.length).fill(0));
            }
        }, [data]);
        
        const changeImgIndex = index =>{
            let currentImgIndex = imgIndex[index];
            if(currentImgIndex === 0){
                currentImgIndex = 1;
            } else {
                currentImgIndex = 0;
            }
            setImgIndex(prev =>{
                let indexArray = [...prev];
                indexArray[index] = currentImgIndex;
                return indexArray;
            });
        }

        if(data){
            jsxArray = data.map((element, index) =>{

            return (
                    <div className="col-md-6 col-12 py-5 d-flex justify-content-center" id='colHeight' key={index}>
                        <div className="card" style={ { width: "18rem" } }>
                            <img src={'../../public/exercises/' + element.images[imgIndex[index]]} className="card-img-top" id='exerciseImg' alt={element.name}
                            onClick={() =>{
                                changeImgIndex(index);
                            }} />
                            <div className="card-body overflow-y-scroll" id='card-height'>
                                <h5 className="card-title">{element.name}</h5>
                                <p className="card-text" id='instructions'>{element.instructions.join(' ')}</p>
                            </div>
                        </div>
                    </div>
                );
            });  

        }
    return (
        <div className="container h-50">
            <div className="row justify-content-center">
                <div className="col">
                    <h2 className="text-center">{exercise}:</h2>
                </div>
            </div>
                <div className="row">
                    {isLoading ?  
                        <div className="col">
                            <p className="text-center mt-5">Loading...</p>
                        </div> :
                        jsxArray
                    }
                </div>
        </div>
    );
}

export default Exercise;