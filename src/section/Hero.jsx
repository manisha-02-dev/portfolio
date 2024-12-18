import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    // const controls = useControls( 'HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //         rotationX: {
    //             value: 0,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationY: {
    //             value: 0,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationZ: {
    //             value: 0,
    //             min: -10,
    //             max: 10
    //         },
    //         scale: {
    //         value: 1,
    //             min: 0.1,
    //             max: 10
    //         }
    //     })
    const isSmall = useMediaQuery( {maxWidth: 480} );
    const isMobile = useMediaQuery( {maxWidth: 768} );
    const isTablet = useMediaQuery( {minWidth: 768, maxWidth: 1024} );

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen
        w-full flex flex-col relative" id="home">
        <div className="w-full mx-auto flex flex-col
        sm:mt-36 mt-20 c-space gap-3">
             <p className="sm:text-3xl text-2xl
             font-medium text-white text-center font-generalsans">Hi, I am Manisha <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">Welcome to my PortFolio</p>
        </div>


            <div className="w-full h-full absolute inset-0" >

                {/*<Leva />*/}
             <Canvas className="w-full h-full">

                 <Suspense fallback={<CanvasLoader />}>

                     <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                     <HeroCamera isMobile={isMobile} >
                         <HackerRoom
                         // scale={0.07}
                         // position={[0, 0, 0]}
                         // rotation={[0, 0, 0]}
                         // position={[x.positionX, x.positionY, x.positionZ]}
                         // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                         // scale={[x.scale, x.scale, x.scale]}
                         position={sizes.deskPosition}
                         scale={sizes.deskScale}
                         rotation={[0, -Math.PI, 0]}
                     />
                         </HeroCamera>
                     <group>
                           <Target position={sizes.targetPosition} />
                           <ReactLogo position={sizes.reactLogoPosition} />

                           <Cube position={sizes.cubePosition} />
                           <Rings position={sizes.ringPosition} />
                     </group>

                     <ambientLight intensity={1} />
                     <directionalLight position={[10, 10, 10]} intensity={0.5} />
                 </Suspense>
             </Canvas>
            </div>

            <div className="absolute bottom-1 left-0 right-0 w-full z-10 c-space">
              <a href="#about" className="w-fit">
                  <Button name="Let's Explore!!!!😊" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
              </a>
            </div>
        </section>
    )
}
export default Hero