'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { Html } from '@react-three/drei';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useState, useEffect } from 'react';

export default function R3F({
    testBackgrounds,
    path,
    lampIntensity,
    cameraFOV
}) {
    const Model = () => {
        const { setSize } = useThree();
        const [gltf, setGLTF] = useState(null);
        const { set } = useThree();

        useEffect(() => {
            setSize(384, 384);

            const gltfLoader = new GLTFLoader();
            const dracoLoader = new DRACOLoader();

            dracoLoader.setDecoderPath('/draco/');

            gltfLoader.setDRACOLoader(dracoLoader);
            gltfLoader.load(path, loaded => {
                loaded.scene.traverse(child => {
                    child.isCamera
                        ? (() => {
                              set({ camera: child });

                              child.updateProjectionMatrix();
                          })()
                        : undefined;

                    child.isLight
                        ? (() => {
                              child.castShadow = true;
                              child.intensity = lampIntensity;
                          })()
                        : undefined;

                    child.isMesh
                        ? (() => {
                              child.castShadow = true;
                              child.receiveShadow = true;
                              child.material.side = 0;
                          })()
                        : undefined;
                });

                setGLTF(loaded);
            });
        }, [path, lampIntensity, cameraFOV]);

        return gltf ? <primitive object={gltf.scene} /> : undefined;
    };

    return (
        <Canvas
            shadows
            className={`${testBackgrounds ? 'bg-red-600' : ''}`}>
            <Suspense
                fallback={
                    <Html center>
                        <svg
                            className='size-40 animate-spin text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'>
                            <circle
                                className='opacity-25'
                                cx='12'
                                cy='12'
                                r='10'
                                stroke='currentColor'
                                strokeWidth='4'></circle>
                            <path
                                className='opacity-75'
                                fill='currentColor'
                                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                        </svg>
                    </Html>
                }>
                <Model />
            </Suspense>
        </Canvas>
    );
}
