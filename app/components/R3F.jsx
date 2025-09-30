'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useThree, useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { styleDefaults } from '../globals';

export const Credits = ({ credits }) => (
    <div
        className={`${styleDefaults.textColorSecondary} group absolute transition-transform ${credits[0]} left-1/2 -translate-1/2 gap-2 whitespace-nowrap duration-200 ease-in-out`}>
        {credits[1]}
    </div>
);

export default function R3F({ extraClasses = '', path, credits }) {
    const Model = ({ path }) => {
        const gltf = useLoader(
            GLTFLoader,
            path,
            loader =>
                loader.setDRACOLoader(
                    useMemo(
                        () => new DRACOLoader().setDecoderPath('/libs/draco/'),
                        []
                    )
                )

            //     // const ktx2Loader = new KTX2Loader()
            //     //     .setTranscoderPath('/libs/basis/')
            //     //     .detectSupport(gl); // `gl` is your WebGL context

            //     // loader.setKTX2Loader(ktx2Loader);
        );
        const { set } = useThree();
        const [clonedScene, setClonedScene] = useState(null);

        useEffect(() => {
            const clone = gltf.scene.clone(true);

            clone.traverse(child => {
                child.isCamera
                    ? (() => {
                          set({ camera: child });

                          child.updateProjectionMatrix();
                      })()
                    : null;
                child.isMesh ? (child.material.side = 0) : null;
            });

            setClonedScene(clone);
        }, [gltf, set]);

        return clonedScene ? <primitive object={clonedScene} /> : null;
    };

    return (
        <>
            <Canvas
                className={`lg:!size-[384px] ${extraClasses}`}
                gl={{ preserveDrawingBuffer: true }}>
                <Suspense
                    fallback={
                        <Html center>
                            <svg
                                className={`size-40 animate-spin ${styleDefaults.textColor}`}
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'>
                                <circle
                                    className='opacity-50 dark:opacity-25'
                                    cx='12'
                                    cy='12'
                                    r='10'
                                    stroke='currentColor'
                                    strokeWidth='4'></circle>
                                <path
                                    className='opacity-100 dark:opacity-75'
                                    fill='currentColor'
                                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                            </svg>
                        </Html>
                    }>
                    <Model path={path} />
                </Suspense>
            </Canvas>
            <Credits credits={credits} />
        </>
    );
}
