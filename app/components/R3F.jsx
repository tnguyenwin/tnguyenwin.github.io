'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { Html } from '@react-three/drei';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useState, useEffect } from 'react';

export const Credits = ({ credits }) => (
    <div
        className={`group absolute ${credits[0]} left-1/2 hidden -translate-1/2 gap-2 text-xs whitespace-nowrap duration-300 ease-in-out lg:block`}>
        {credits[1]}
    </div>
);

export default function R3F({
    testBackgrounds,
    path,
    credits
    // lampIntensity,
    // cameraFOV
}) {
    const Model = () => {
        const [gltf, setGLTF] = useState(null);
        const { set } = useThree();

        useEffect(() => {
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
                        : null;

                    child.isLight
                        ? (() => {
                              //   child.castShadow = true;
                              //   child.intensity = lampIntensity;
                          })()
                        : null;

                    child.isMesh
                        ? (() => {
                              //   child.castShadow = true;
                              //   child.receiveShadow = true;
                              child.material.side = 0;
                          })()
                        : null;
                });

                setGLTF(loaded);
            });
        }, []);

        return gltf ? <primitive object={gltf.scene} /> : null;
    };

    return (
        <>
            <Canvas
                className={`${testBackgrounds ? 'bg-red-600' : ''} lg:!size-[384px]`}
                shadows>
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
            <Credits credits={credits} />
        </>
    );
}
