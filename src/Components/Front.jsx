function Front({ 
    abbStyle, setAbbStyle,
    chestStyle, setChestStyle,
    trapStyle, setTrapStyle,
    shoulderStyle, setShoulderStyle,
    upperArmStyle, setUpperArmStyle,
    lowerArmStyle, setLowerArmStyle,
    upperLegStyle, setUpperLegStyle,
    lowerLegStyle, setLowerLegStyle,
    latStyle, setLatStyle,
    serStyle, setSerStyle,
    setExercise, 
    data, setData,  
    isLoading, setIsLoading,
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
        <>
          <h2 className="h2 text-center mt-2">Front</h2>
          <svg style={{
            width: '100%',
            height: '100%',
          }} viewBox="0 0 1440 1507" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Front">
              <rect style={{
                width: '100%',
                height: '100%',
              }} fill="white"/>
              <path id="kopf" d="M695.967 293C682.511 281.457 678.082 274.341 663.571 257.317C661.961 243.752 658.23 234.384 657.555 216.811C654.657 215.145 650.222 200.257 650.613 195.594C651.004 190.932 648.147 185.014 650.613 178.235C653.08 171.455 657.555 173.895 657.555 173.895C651.884 159.808 655.719 152.34 657.555 143.034C659.392 133.727 667.582 118.193 685.785 109.761C703.988 101.33 727.621 100.181 751.038 109.761C769.55 118.441 773.977 125.988 782.045 143.034C785.809 153.837 788.92 161.176 782.045 173.895C786.697 175.164 788.219 176.094 788.524 178.235C789.981 185.017 789.933 188.81 788.524 195.594C788.363 203.347 788.166 207.717 782.045 216.811L775.103 257.317C765.124 272.52 755.328 280.321 740.394 293H695.967Z" stroke="black" strokeWidth="3"/>
              <path id="hals" d="M678.099 273V339C687.24 338.462 709.263 343.938 720 347.5C730.906 345.056 747.987 339.087 762.099 339V273" stroke="black" strokeWidth="3"/>
              <path id="nacken links" style={trapStyle} 
                  onMouseOver={() =>{
                    setTrapStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setTrapStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickTraps}
                  d="M605.099 340C631.324 318.964 647.255 308.594 678.099 293V340H605.099Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="nacken rechts" style={trapStyle} 
                  onMouseOver={() =>{
                    setTrapStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setTrapStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickTraps}
                  d="M835 339C808.774 317.964 792.844 307.594 762 292V339H835Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Schulter links" style={shoulderStyle} 
                  onMouseOver={() =>{
                    setShoulderStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setShoulderStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickShoulder}
                  d="M601.186 340H649.599C631.447 357.8 620.779 382.147 616.244 403L566.087 430C566.087 430 551.216 415 542.743 392.5C534.271 370 553.636 352.5 553.636 352.5C553.636 352.5 573.954 340 601.186 340Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Schulter rechts" style={shoulderStyle} 
                  onMouseOver={() =>{
                    setShoulderStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setShoulderStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickShoulder}
                  d="M843.012 339H794.599C812.751 356.8 823.419 381.147 827.954 402L878.111 429C878.111 429 892.982 414 901.454 391.5C909.927 369 890.562 351.5 890.562 351.5C890.562 351.5 870.244 339 843.012 339Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Brust links" style={chestStyle}
                  onMouseOver={() =>{
                    setChestStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setChestStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickChest}
                  d="M678.5 339.5C699.5 339.5 703.587 343.876 719.599 347V441L671.599 470L615.599 430.5L620.599 390.5C628.579 367.452 636.871 358.041 648.5 341C648.5 341 657.5 339.5 678.5 339.5Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Brust rechts" style={chestStyle}
                  onMouseOver={() =>{
                    setChestStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setChestStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickChest}
                  d="M761.599 340C740.599 340 736.61 343.98 720.599 347V441.5L772.599 471L830 423.5L826.5 393C820.255 371.686 807.936 357.428 794.599 340H761.599Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Oberarm rechts" style={upperArmStyle} 
                  onMouseOver={() =>{
                    setUpperArmStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setUpperArmStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickUpperArm}
                  d="M516.599 515C516.982 473.234 528.152 448.339 547.599 404L566.599 430L617.599 404C615.166 423.07 612.599 444 609.599 458C606.599 472 598.238 484.897 584.599 515L576.599 524L516.599 515Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Oberarm links" style={upperArmStyle} 
                  onMouseOver={() =>{
                    setUpperArmStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setUpperArmStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickUpperArm}
                  d="M926.599 515C926.216 473.234 915.046 448.339 895.599 404L876.599 430L827.5 402C829.932 421.07 830.599 444 833.599 458C836.599 472 844.959 484.897 858.599 515L866.599 524L926.599 515Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Unterarm links" style={lowerArmStyle} 
                  onMouseOver={() =>{
                    setLowerArmStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setLowerArmStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickForeArm}
                  d="M502.599 651.081C504.71 596.962 508.18 567.213 521.486 516L570.055 523.888C575.491 530.869 581.843 532.562 584.099 541C583.997 552.247 575.211 563.942 556.599 603C548.58 609.351 545.77 621.5 545.77 625.445C545.77 629.391 538.958 657.255 536.776 679.182C533.644 682.856 530.005 680.233 521.486 677.703C513.188 670.701 508.748 665.994 502.599 651.081Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Unterarm rechts" style={lowerArmStyle} 
                  onMouseOver={() =>{
                    setLowerArmStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setLowerArmStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickForeArm}
                  d="M938.099 651.081C935.987 596.962 932.517 567.213 919.211 516L870.643 523.888C865.207 530.869 858.855 532.562 856.599 541C856.701 552.247 865.487 563.942 884.099 603C892.118 609.351 894.927 621.5 894.927 625.445C894.927 629.391 901.739 657.255 903.921 679.182C907.054 682.856 910.692 680.233 919.211 677.703C927.51 670.701 931.95 665.994 938.099 651.081Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Hand" d="M487.099 690C488.392 674.607 495.537 665.629 501.889 652C507.011 661.378 518.099 675.5 518.099 675.5C518.099 675.5 527.016 680.127 535.069 681.008L540.599 693.364V716L527.099 726.5H494.099C490.476 715.656 486.302 700.984 487.099 690Z" stroke="black" strokeWidth="3"/>
              <path id="Hand_2" d="M953.099 691C951.805 675.607 944.66 666.629 938.309 653C933.187 662.378 922.099 676.5 922.099 676.5C922.099 676.5 913.182 681.127 905.129 682.008L899.599 694.364V717L913.099 727.5H946.099C949.722 716.656 953.896 701.984 953.099 691Z" stroke="black" strokeWidth="3"/>
              <path id="Bauch" d="M721.099 442.5L773.099 472M721.099 442.5L671.599 472M721.099 442.5V487.5M721.099 712.5V572M721.099 712.5C714.069 711.214 705.096 706.116 693.599 697.56M721.099 712.5C729.119 712.5 739.681 706.762 752.078 697.56M721.099 712.5C735.321 708.801 741.939 705.365 752.078 697.56M773.099 472L829 425C821.612 468.791 809.013 509.819 807.486 531M773.099 472C774.474 481.233 776.963 487.3 776.099 492C776.645 495.773 773.939 501.607 770.599 506.5M671.599 472L616.599 431C626.262 476.539 633.565 508.778 635.353 531M671.599 472C669.235 482.559 667.407 490.202 667.599 492C666.804 495.442 667.967 499.638 669.599 506.5M669.599 506.5L721.099 487.5M669.599 506.5C668.824 517.766 669.367 524.12 671.599 535.5M721.099 487.5L770.599 506.5M721.099 487.5V531M770.599 506.5C772.216 516.246 771.764 522.429 767.099 535.5M671.599 535.5L721.099 531M671.599 535.5C665.475 548.374 665.105 555.208 667.599 567M721.099 531L767.099 535.5M721.099 531V572M767.099 535.5C775.211 546.133 776.802 552.985 775.599 567M667.599 567L721.099 572M667.599 567C664.349 574.811 664.689 585.69 667.599 593.5C670.028 606.741 673.202 611.79 693.599 697.56M667.599 567L635.353 531M721.099 572L775.599 567M775.599 567C780.943 578.206 775.636 592.576 776.099 593.5C774.754 602.239 769.661 616.407 752.078 697.56M775.599 567L807.486 531M693.599 697.56C676.585 684.898 654.046 664.662 624.099 638C630.838 594.096 634.872 563.354 635.599 546C635.904 541.606 635.805 536.624 635.353 531M752.078 697.56C771.367 683.24 795.097 660.532 820.599 638C813.734 594.341 806.985 557.331 807.599 546C807.035 542.292 807.035 537.249 807.486 531" stroke="black" strokeWidth="3"/>
              <path id="Lat" d="M609.599 458.5L631.099 502.5" stroke="black" strokeWidth="3"/>
              <path id="Lat_2" d="M834.099 459L812 504.5" stroke="black" strokeWidth="3"/>
              <path id="Oberschenkel links" style={upperLegStyle} 
                  onMouseOver={() =>{
                    setUpperLegStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setUpperLegStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickUpperLeg}
                  d="M606.599 752C604.448 719.637 611.411 690.194 623.599 638C685.185 692.816 707.612 710.108 721.099 711.5L687.099 934.5L657.599 930.5L629.099 940C608.783 908.637 593.727 890.075 595.099 864.5C595.814 806.255 597.305 777.729 606.599 752Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Oberschenkel rechts" style={upperLegStyle} 
                  onMouseOver={() =>{
                    setUpperLegStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setUpperLegStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickUpperLeg}
                  d="M838.099 752C840.25 719.637 833.287 690.194 821.099 638C759.513 692.816 737.085 710.108 723.599 711.5L757.599 934.5L787.099 930.5L815.599 940C835.915 908.637 850.971 890.075 849.599 864.5C848.883 806.255 847.393 777.729 838.099 752Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Unterschenkel links" style={lowerLegStyle} 
                  onMouseOver={() =>{
                    setLowerLegStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setLowerLegStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clicklowerLeg}
                  d="M612.099 1054C615.536 1015.28 617.595 976.603 629.099 939.5L658.099 930.5L683.099 934C686.788 984.838 698.669 1031.68 693.599 1070C692.992 1101.04 681.714 1120.66 671.599 1210V1272H612.099V1258L643.099 1232.5V1229H635.599L641.099 1210C624.826 1141.5 620.101 1124.82 612.099 1054Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="Unterschenkel rechts" style={lowerLegStyle} 
                  onMouseOver={() =>{
                    setLowerLegStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setLowerLegStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clicklowerLeg}
                  d="M834.339 1054.5C830.902 1015.78 826.603 976.603 815.099 939.5L788.339 931L762.599 934.5C758.91 985.338 747.769 1032.18 752.839 1070.5C753.446 1101.54 764.724 1121.16 774.839 1210.5V1272.5H834.339V1258.5L803.339 1233V1229.5H810.839L805.339 1210.5C821.612 1142 826.336 1125.32 834.339 1054.5Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="lower abs links" style={abbStyle} 
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }} 
                  onClick={clickAbdominals}
                  d="M667.5 593C664.785 582.14 665.144 576.27 667.5 566L721 571.5V711.5C709.913 708.004 703.786 704.651 693 696.5L667.5 593Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="lowser abs rechts" style={abbStyle} 
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickAbdominals}  
                  d="M776 567L721 571.5V711C730.261 711.073 737.362 707.517 752.5 696.5L776 593.5C778.856 582.845 778.633 577.068 776 567Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="3rd abs links" style={abbStyle}  
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickAbdominals}  
                  d="M667 566C665.219 552.737 666.272 545.938 672 535L721 531V571.5L667 566Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="3rd abs rechts" style={abbStyle} 
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }} 
                  onClick={clickAbdominals}
                  d="M767.5 535.5L721 531.5V571.5L776 566C777.071 552.094 774.897 545.557 767.5 535.5Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="2nd abs links" style={abbStyle} 
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }} 
                  onClick={clickAbdominals}
                  d="M669.5 506.5L721 488V531.5L671.5 535C669.34 523.882 668.992 517.641 669.5 506.5Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="2nd abs rechts" style={abbStyle} 
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }} 
                  onClick={clickAbdominals}
                  d="M770.5 506.5L720.5 489V532L767.5 535C771.608 523.59 772.079 517.368 770.5 506.5Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="side abs rechts" style={abbStyle} 
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }} 
                  onClick={clickAbdominals}
                  d="M778 584C778.614 579.039 778.109 574.878 776 565.5L807 532.5C805.293 545.62 809.259 572.38 821 638.5L753 696.5L778 584Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="upper abs links" style={abbStyle} 
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }} 
                  onClick={clickAbdominals}
                  d="M671.5 471L720 440.5V488.5L670 506.5C665.703 498.858 667.497 489.217 671.5 471Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="upper abs rechts" style={abbStyle} 
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }} 
                  onClick={clickAbdominals}
                  d="M773 471.5L720.5 440.5V488.5L771 506.5C778.805 496.345 776.807 487.463 773 471.5Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="side abs links" style={abbStyle} 
                  onMouseOver={() =>{
                    setAbbStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setAbbStyle({
                      fill: "#D9D9D9"
                    });
                  }} 
                  onClick={clickAbdominals}
                  d="M667 566L635.5 532C637.181 550.265 634.523 573.284 623.5 638.5C673.702 683.638 686.696 694.166 692.5 696L665 583C664.847 576.763 665.374 573.918 667 566Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="lat links" style={latStyle} 
                  onMouseOver={() =>{
                    setLatStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setLatStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickLat} 
                  d="M615 428C613.035 440.297 611.845 447.193 609.5 459.5L630.5 499C625.719 471.331 622.842 455.808 615 428Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="lat rechts" style={latStyle} 
                  onMouseOver={() =>{
                    setLatStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setLatStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickLat}
                  d="M834 460.5L813.5 500L830 423.5C830.629 437.218 831.369 445.212 834 460.5Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="serratus links" style={shoulderStyle} 
                  onMouseOver={() =>{
                    setShoulderStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setShoulderStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickShoulder}
                  d="M671.5 470.5L616.5 431.5C626.239 472.725 629.283 487.494 636 532.5L666.5 564.5C665.693 551.703 666.626 545.169 671.5 535C669.014 523.485 668.748 517.155 669.5 506C666.032 500.398 666.267 493.019 671.5 470.5Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
              <path id="serratus rechts" style={shoulderStyle} 
                  onMouseOver={() =>{
                    setShoulderStyle({
                      fill: "#e76f51",
                      cursor: "pointer"
                    });
                  }}
                  onMouseOut = { () =>{
                    setShoulderStyle({
                      fill: "#D9D9D9"
                    });
                  }}
                  onClick={clickShoulder}
                  d="M773 471.5L829.5 425C818.738 474.647 811.105 508.69 807 532.5L776 565C776.283 552.397 774.722 545.941 767.5 536C772.034 521.383 772.366 515.349 771 506.5C777.985 498.196 778.189 490.331 773 471.5Z" fill="#D9D9D9" stroke="black" strokeWidth="3"/>
            </g>
        </svg>
      </>
    );
}

export default Front;