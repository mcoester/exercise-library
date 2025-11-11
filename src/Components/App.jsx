import { useState } from 'react'
import Front from './Front.jsx';
import Back from './Back.jsx';
import Header from './Header.jsx';
import Navigation from "./Navigation";
import Frame from './Frame.jsx';
import Selection from './Selection.jsx';
import Greeting from './Greeting.jsx'
import Exercise from './Exercise.jsx';


function App() {
const [abbStyle, setAbbStyle] = useState({fill: '#D9D9D9'});
const [chestStyle, setChestStyle] = useState({fill: '#D9D9D9'});
const [trapStyle, setTrapStyle] = useState({fill: '#D9D9D9'});
const [neckStyle, setNeckStyle] = useState({fill: '#D9D9D9'});
const [shoulderStyle, setShoulderStyle] = useState({fill: '#D9D9D9'});
const [upperArmStyle, setUpperArmStyle] =  useState({fill: '#D9D9D9'});
const [lowerArmStyle, setLowerArmStyle] = useState({fill: '#D9D9D9'});
const [upperLegStyle, setUpperLegStyle] = useState({fill: '#D9D9D9'});
const [lowerLegStyle, setLowerLegStyle] = useState({fill: '#D9D9D9'});
const [latStyle, setLatStyle] = useState({fill: '#D9D9D9'});
const [serStyle, setSerStyle] = useState({fill: '#D9D9D9'});
const [lowerBackStyle, setLowerBackStyle] = useState({fill: '#D9D9D9'});

const [exercise, setExercise] = useState('');
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [imgIndex, setImgIndex] = useState([]);

  return (
    <Frame> 
      <Header>
        <Navigation 
        isLoading={isLoading} setIsLoading={setIsLoading} 
        setExercise={setExercise}
        setData={setData} />
      </Header>
      {!exercise && <Greeting />}
      <Selection>
        <Front abbStyle={abbStyle} setAbbStyle={setAbbStyle}
        chestStyle={chestStyle} setChestStyle={setChestStyle}
        trapStyle={trapStyle} setTrapStyle={setTrapStyle}
        shoulderStyle={shoulderStyle} setShoulderStyle={setShoulderStyle}
        upperArmStyle={upperArmStyle} setUpperArmStyle={setUpperArmStyle}
        lowerArmStyle={lowerArmStyle} setLowerArmStyle={setLowerArmStyle}
        upperLegStyle={upperLegStyle} setUpperLegStyle={setUpperLegStyle}
        lowerLegStyle={lowerLegStyle} setLowerLegStyle={setLowerLegStyle} 
        latStyle={latStyle} setLatStyle={setLatStyle}
        serStyle={serStyle} setSerStyle={setSerStyle} 
        setExercise={setExercise} 
        data={data} setData={setData} 
        isLoading={isLoading} setIsLoading={setIsLoading} />
        <Back abbStyle={abbStyle} setAbbStyle={setAbbStyle}
        trapStyle={trapStyle} setTrapStyle={setTrapStyle}
        neckStyle={neckStyle} setNeckStyle={setNeckStyle}
        shoulderStyle={shoulderStyle} setShoulderStyle={setShoulderStyle}
        upperArmStyle={upperArmStyle} setUpperArmStyle={setUpperArmStyle}
        lowerArmStyle={lowerArmStyle} setLowerArmStyle={setLowerArmStyle}
        upperLegStyle={upperLegStyle} setUpperLegStyle={setUpperLegStyle}
        lowerLegStyle={lowerLegStyle} setLowerLegStyle={setLowerLegStyle}
        latStyle={latStyle} setLatStyle={setLatStyle} 
        lowerBackStyle={lowerBackStyle} setLowerBackStyle={setLowerBackStyle} 
        setData={setData}
        setExercise={setExercise}
        setIsLoading={setIsLoading}/>
      </Selection>
      {exercise && 
      <Exercise 
      isLoading={isLoading} 
      exercise={exercise} 
      data={data} 
      imgIndex={imgIndex} setImgIndex={setImgIndex}/> }
    </Frame> 
  )
}

export default App
