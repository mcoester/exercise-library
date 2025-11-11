function Navigation({ 
    isLoading, setIsLoading,
    setExercise,
    setData
 }){

    async function clickAbdominals(){
          setExercise('Abdominals');
          setIsLoading(true);
          try {
            const jsonData = await import('../../dataset/abdominals.json', { assert: { type: 'json' } });
            setData(jsonData.default);
          } catch(err) {
            console.log(err);
            setData([]);
          } finally {
            setIsLoading(false);
          }
    }

    async function clickNeck(){
        setExercise('HWS/Nacken');
        setIsLoading(true);
        try {
          const jsonData = await import('../../dataset/neck.json', { assert: { type: 'json' } });
          setData(jsonData.default);
        } catch(err) {
          console.log(err);
          setData([]);
        } finally {
          setIsLoading(false);
        }
    }

    async function clickLowerBack(){
        setExercise('Lower Back');
        setIsLoading(true);
        try {
          const jsonData = await import('../../dataset/lower back.json', { assert: { type: 'json' } });
          setData(jsonData.default);
        } catch(err) {
          console.log(err);
          setData([]);
        } finally {
          setIsLoading(false);
        }
    }

    async function clickChest(){
          setExercise('Chest');
          setIsLoading(true);
          try {
            const jsonData = await import('../../dataset/chest.json', { assert: { type: 'json' } });
            setData(jsonData.default);
          } catch(err) {
            console.log(err);
            setData([]);
          } finally {
            setIsLoading(false);
          }
      }

    async function clickTraps(){
        setExercise('Trapez/Rhomboideen');
        setIsLoading(true);
        try {
          const trapsData = await import('../../dataset/traps.json', { assert: { type: 'json' } });
          const middleBackData = await import ('../../dataset/middle back.json', { assert: { type: 'json' } });
          const allData = trapsData.default.concat(middleBackData.default);
          setData(allData);
        } catch(err) {
          console.log(err);
          setData([]);
        } finally {
          setIsLoading(false);
        }
    }

    async function clickShoulder(){
        setExercise('Shoulder/Serratus');
        setIsLoading(true);
        try {
          const jsonData = await import('../../dataset/shoulders.json', { assert: { type: 'json' } });
          setData(jsonData.default);
        } catch(err) {
          console.log(err);
          setData([]);
        } finally {
          setIsLoading(false);
        }
    }

    async function clickUpperArm(){
        setExercise('Upper Arm');
        setIsLoading(true);
        try {
          const bicepsData = await import('../../dataset/biceps.json', { assert: { type: 'json' } });
          const tricepsData = await import('../../dataset/triceps.json', { assert: { type: 'json' } });
          const allData = bicepsData.default.concat(tricepsData.default);
          setData(allData);
        } catch(err) {
          console.log(err);
          setData([]);
        } finally {
          setIsLoading(false);
        }
    }

    async function clickForeArm(){
        setExercise('Forearm');
        setIsLoading(true);
        try {
          const jsonData = await import('../../dataset/forearms.json', { assert: { type: 'json' } });
          setData(jsonData.default);
        } catch(err) {
          console.log(err);
          setData([]);
        } finally {
          setIsLoading(false);
        }
    }

    async function clickUpperLeg(){
        setExercise('Upper Leg');
        setIsLoading(true);
        try {
          const quadricepsData = await import('../../dataset/quadriceps.json', { assert: { type: 'json' } });
          const glutesData = await import('../../dataset/glutes.json', { assert: { type: 'json' } });
          const hamstringsData = await import('../../dataset/hamstrings.json', { assert: { type: 'json' } });
          const adductors = await import('../../dataset/adductors.json', { assert: { type: 'json' } });
          const abductors = await import('../../dataset/abductors.json', { assert: { type: 'json' } });
          const allData = quadricepsData.default.concat(adductors.default, glutesData.default, abductors.default, hamstringsData.default);
          setData(allData);
        } catch(err) {
          console.log(err);
          setData([]);
        } finally {
          setIsLoading(false);
        }
    }

    async function clicklowerLeg(){
        setExercise('Lower Leg');
        setIsLoading(true);
        try {
          const jsonData = await import('../../dataset/calves.json', { assert: { type: 'json' } });
          setData(jsonData.default);
        } catch(err) {
          console.log(err);
          setData([]);
        } finally {
          setIsLoading(false);
        }
    }

    async function clickLat(){
        setExercise('Latissimus dorsi/Rhomboideen');
        setIsLoading(true);
        try {
          const jsonData = await import('../../dataset/lats.json', { assert: { type: 'json' } });
          setData(jsonData.default);
        } catch(err) {
          console.log(err);
          setData([]);
        } finally {
          setIsLoading(false);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    <ul className="navbar-nav justify-content-evenly w-100">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fs-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Rumpf
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={clickChest}>Brust</a></li>
                                <li><a className="dropdown-item" href="#" onClick={clickAbdominals}>Bauch</a></li>
                                <li><a className="dropdown-item" href="#" onClick={clickTraps}>oberer Rücken</a></li>
                                <li><a className="dropdown-item" href="#" onClick={clickNeck}>HWS/Nacken</a></li>
                                <li><a className="dropdown-item" href="#" onClick={clickLowerBack}>unterer Rücken</a></li>
                            </ul>
                        </li>
                       <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fs-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Arme
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={clickShoulder}>Schulter/Serratus</a></li>
                                <li><a className="dropdown-item" href="#" onClick={clickLat}>Latissimus dorsi</a></li>
                                <li><a className="dropdown-item" href="#" onClick={clickUpperArm}>Oberarme</a></li>
                                <li><a className="dropdown-item" href="#" onClick={clickForeArm}>Unterarme</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown fs-3">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Beine
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={clickUpperLeg}>Oberschenkel</a></li>
                                <li><a className="dropdown-item" href="#" onClick={clicklowerLeg}>Unterschenkel</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;