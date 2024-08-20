import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { useMotionValue, useSpring } from "framer-motion";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { AnimationAction, Group } from "three";
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
import { GitLogo } from "../GitLogo";

type GLTFResult = GLTF & {
    nodes: {
      Cube_cell200: THREE.Mesh
      Cube_cell200_1: THREE.Mesh
      Cube_cell201: THREE.Mesh
      Cube_cell201_1: THREE.Mesh
      Cube_cell099_1: THREE.Mesh
      Cube_cell099_2: THREE.Mesh
      Cube_cell102: THREE.Mesh
      Cube_cell102_1: THREE.Mesh
      Cube_cell103: THREE.Mesh
      Cube_cell103_1: THREE.Mesh
      Cube_cell104: THREE.Mesh
      Cube_cell104_1: THREE.Mesh
      Cube_cell105: THREE.Mesh
      Cube_cell105_1: THREE.Mesh
      Cube_cell106: THREE.Mesh
      Cube_cell106_1: THREE.Mesh
      Cube_cell107: THREE.Mesh
      Cube_cell107_1: THREE.Mesh
      Cube_cell108: THREE.Mesh
      Cube_cell108_1: THREE.Mesh
      Cube_cell109: THREE.Mesh
      Cube_cell109_1: THREE.Mesh
      Cube_cell110: THREE.Mesh
      Cube_cell110_1: THREE.Mesh
      Cube_cell111: THREE.Mesh
      Cube_cell111_1: THREE.Mesh
      Cube_cell112: THREE.Mesh
      Cube_cell112_1: THREE.Mesh
      Cube_cell113: THREE.Mesh
      Cube_cell113_1: THREE.Mesh
      Cube_cell114: THREE.Mesh
      Cube_cell114_1: THREE.Mesh
      Cube_cell115: THREE.Mesh
      Cube_cell115_1: THREE.Mesh
      Cube_cell116: THREE.Mesh
      Cube_cell116_1: THREE.Mesh
      Cube_cell117: THREE.Mesh
      Cube_cell117_1: THREE.Mesh
      Cube_cell118: THREE.Mesh
      Cube_cell118_1: THREE.Mesh
      Cube_cell119: THREE.Mesh
      Cube_cell119_1: THREE.Mesh
      Cube_cell120: THREE.Mesh
      Cube_cell120_1: THREE.Mesh
      Cube_cell121: THREE.Mesh
      Cube_cell121_1: THREE.Mesh
      Cube_cell122: THREE.Mesh
      Cube_cell122_1: THREE.Mesh
      Cube_cell123: THREE.Mesh
      Cube_cell123_1: THREE.Mesh
      Cube_cell124: THREE.Mesh
      Cube_cell124_1: THREE.Mesh
      Cube_cell125: THREE.Mesh
      Cube_cell125_1: THREE.Mesh
      Cube_cell126: THREE.Mesh
      Cube_cell126_1: THREE.Mesh
      Cube_cell127: THREE.Mesh
      Cube_cell127_1: THREE.Mesh
      Cube_cell128: THREE.Mesh
      Cube_cell128_1: THREE.Mesh
      Cube_cell129: THREE.Mesh
      Cube_cell129_1: THREE.Mesh
      Cube_cell130: THREE.Mesh
      Cube_cell130_1: THREE.Mesh
      Cube_cell131: THREE.Mesh
      Cube_cell131_1: THREE.Mesh
      Cube_cell132: THREE.Mesh
      Cube_cell132_1: THREE.Mesh
      Cube_cell133: THREE.Mesh
      Cube_cell133_1: THREE.Mesh
      Cube_cell134: THREE.Mesh
      Cube_cell134_1: THREE.Mesh
      Cube_cell135: THREE.Mesh
      Cube_cell135_1: THREE.Mesh
      Cube_cell136: THREE.Mesh
      Cube_cell136_1: THREE.Mesh
      Cube_cell137: THREE.Mesh
      Cube_cell137_1: THREE.Mesh
      Cube_cell138: THREE.Mesh
      Cube_cell138_1: THREE.Mesh
      Cube_cell139: THREE.Mesh
      Cube_cell139_1: THREE.Mesh
      Cube_cell140: THREE.Mesh
      Cube_cell140_1: THREE.Mesh
      Cube_cell141: THREE.Mesh
      Cube_cell141_1: THREE.Mesh
      Cube_cell142: THREE.Mesh
      Cube_cell142_1: THREE.Mesh
      Cube_cell143: THREE.Mesh
      Cube_cell143_1: THREE.Mesh
      Cube_cell144: THREE.Mesh
      Cube_cell144_1: THREE.Mesh
      Cube_cell145: THREE.Mesh
      Cube_cell145_1: THREE.Mesh
      Cube_cell146: THREE.Mesh
      Cube_cell146_1: THREE.Mesh
      Cube_cell147: THREE.Mesh
      Cube_cell147_1: THREE.Mesh
      Cube_cell148: THREE.Mesh
      Cube_cell148_1: THREE.Mesh
      Cube_cell149: THREE.Mesh
      Cube_cell149_1: THREE.Mesh
      Cube_cell150: THREE.Mesh
      Cube_cell150_1: THREE.Mesh
      Cube_cell151: THREE.Mesh
      Cube_cell151_1: THREE.Mesh
      Cube_cell152: THREE.Mesh
      Cube_cell152_1: THREE.Mesh
      Cube_cell153: THREE.Mesh
      Cube_cell153_1: THREE.Mesh
      Cube_cell154: THREE.Mesh
      Cube_cell154_1: THREE.Mesh
      Cube_cell155: THREE.Mesh
      Cube_cell155_1: THREE.Mesh
      Cube_cell156: THREE.Mesh
      Cube_cell156_1: THREE.Mesh
      Cube_cell157: THREE.Mesh
      Cube_cell157_1: THREE.Mesh
      Cube_cell158: THREE.Mesh
      Cube_cell158_1: THREE.Mesh
      Cube_cell159: THREE.Mesh
      Cube_cell159_1: THREE.Mesh
      Cube_cell160: THREE.Mesh
      Cube_cell160_1: THREE.Mesh
      Cube_cell161: THREE.Mesh
      Cube_cell161_1: THREE.Mesh
      Cube_cell162: THREE.Mesh
      Cube_cell162_1: THREE.Mesh
      Cube_cell163: THREE.Mesh
      Cube_cell163_1: THREE.Mesh
      Cube_cell164: THREE.Mesh
      Cube_cell164_1: THREE.Mesh
      Cube_cell165: THREE.Mesh
      Cube_cell165_1: THREE.Mesh
      Cube_cell166: THREE.Mesh
      Cube_cell166_1: THREE.Mesh
      Cube_cell167: THREE.Mesh
      Cube_cell167_1: THREE.Mesh
      Cube_cell168: THREE.Mesh
      Cube_cell168_1: THREE.Mesh
      Cube_cell169: THREE.Mesh
      Cube_cell169_1: THREE.Mesh
      Cube_cell170: THREE.Mesh
      Cube_cell170_1: THREE.Mesh
      Cube_cell171: THREE.Mesh
      Cube_cell171_1: THREE.Mesh
      Cube_cell172: THREE.Mesh
      Cube_cell172_1: THREE.Mesh
      Cube_cell173: THREE.Mesh
      Cube_cell173_1: THREE.Mesh
      Cube_cell174: THREE.Mesh
      Cube_cell174_1: THREE.Mesh
      Cube_cell175: THREE.Mesh
      Cube_cell175_1: THREE.Mesh
      Cube_cell176: THREE.Mesh
      Cube_cell176_1: THREE.Mesh
      Cube_cell177: THREE.Mesh
      Cube_cell177_1: THREE.Mesh
      Cube_cell178: THREE.Mesh
      Cube_cell178_1: THREE.Mesh
      Cube_cell179: THREE.Mesh
      Cube_cell179_1: THREE.Mesh
      Cube_cell180: THREE.Mesh
      Cube_cell180_1: THREE.Mesh
      Cube_cell181: THREE.Mesh
      Cube_cell181_1: THREE.Mesh
      Cube_cell182: THREE.Mesh
      Cube_cell182_1: THREE.Mesh
      Cube_cell183: THREE.Mesh
      Cube_cell183_1: THREE.Mesh
      Cube_cell184: THREE.Mesh
      Cube_cell184_1: THREE.Mesh
      Cube_cell185: THREE.Mesh
      Cube_cell185_1: THREE.Mesh
      Cube_cell186: THREE.Mesh
      Cube_cell186_1: THREE.Mesh
      Cube_cell187: THREE.Mesh
      Cube_cell187_1: THREE.Mesh
      Cube_cell188: THREE.Mesh
      Cube_cell188_1: THREE.Mesh
      Cube_cell189: THREE.Mesh
      Cube_cell189_1: THREE.Mesh
      Cube_cell190: THREE.Mesh
      Cube_cell190_1: THREE.Mesh
      Cube_cell191: THREE.Mesh
      Cube_cell191_1: THREE.Mesh
      Cube_cell192: THREE.Mesh
      Cube_cell192_1: THREE.Mesh
      Cube_cell193: THREE.Mesh
      Cube_cell193_1: THREE.Mesh
      Cube_cell194: THREE.Mesh
      Cube_cell194_1: THREE.Mesh
      Cube_cell195: THREE.Mesh
      Cube_cell195_1: THREE.Mesh
      Cube_cell196: THREE.Mesh
      Cube_cell196_1: THREE.Mesh
      Cube_cell197: THREE.Mesh
      Cube_cell197_1: THREE.Mesh
      Cube_cell198: THREE.Mesh
      Cube_cell198_1: THREE.Mesh
    }
    materials: {
      surface: THREE.MeshStandardMaterial
      ['Material.001']: THREE.MeshStandardMaterial
    }
};
  
export const FractureBox = () => {

    const groupRef = useRef<Group>(null);

    // const motionVal = useMotionValue(0);
    // const spring = useSpring(motionVal, {stiffness:20});

    const { scene, animations, materials } = useGLTF('./cellFracture.glb') as GLTFResult;
    const { actions } = useAnimations(animations, scene);

    const scrollData = useScroll();

    const { outsideColor, insideColor } = useControls({
        outsideColor: {
            value: { r: 2, g: 28, b: 190 },
        },
        insideColor: {
            value: { r: 76, g: 5, b: 137 }
        },
    });

    useEffect(() => {
        const {r, g, b} = outsideColor;
        materials.surface.color = new THREE.Color().setRGB(r/255, g/255, b/255);
        materials.surface.needsUpdate = true;
    }, [outsideColor, materials])

    useEffect(() => {
        const {r, g, b} = insideColor;
        materials["Material.001"].color = new THREE.Color().setRGB(r/255, g/255, b/255);
        materials["Material.001"].needsUpdate = true;
    }, [insideColor, materials])

    useFrame(() => {
        if (groupRef.current) {
            // groupRef.current.rotation.y += 0.002;
            Object.keys(actions).forEach((key) => {
                const action = actions[key] as AnimationAction;
                action.play().paused = true;
                action.time = scrollData.offset;
            })
        }
    });


    return (
        <group 
            ref={groupRef}
            scale={[1.25, 1.25, 1.25]}
            // onPointerDown={() => motionVal.set(1)}
            // onPointerUp={() => motionVal.set(0)}
        >
            <primitive object={scene} />    
            <GitLogo />
        </group>
    );
};

useGLTF.preload('./cellFracture.glb')