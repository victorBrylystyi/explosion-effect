import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";



export const GitLogo = () => {

    const logoMap = useTexture('./git-512.png');

    return (
        <mesh
            onClick={() => {
                window.open('https://github.com/victorBrylystyi/explosion-effect', '_blank')!.focus()
            }}
        >
            <planeGeometry args={[2, 2]} />
            <meshStandardMaterial map={logoMap} transparent side={DoubleSide} />
        </mesh>
    );
};