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
        const { viewport } = useThree();
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

                              //   child.name === 'Room_Camera'
                              //       ? console.log(child)
                              //       : undefined;

                              const updateZoom = () => {
                                  //   const screenWidth = window.innerWidth;
                                  //   const screenHeight = window.innerWidth;
                                  //   const baseZoom = window.devicePixelRatio;
                                  //   let zoomFactor = baseZoom;

                                  //   screenWidth < 1280
                                  //       ? (() => {
                                  //             zoomFactor *=
                                  //                 (screenWidth * 1) / 1280;
                                  //             child.aspect =
                                  //                 viewport.width /
                                  //                 viewport.height;
                                  //         })()
                                  //       : (child.zoom = zoomFactor);
                                  // child.aspect = screenWidth / screenHeight;

                                  //   child.zoom = 1.5;
                                  child.aspect =
                                      viewport.width / viewport.height;
                                  //   child.fov = cameraFOV;
                                  child.updateProjectionMatrix();
                              };

                              updateZoom();

                              window.addEventListener('resize', updateZoom);

                              //   child.fov = cameraFOV;
                              //   child.updateProjectionMatrix();
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

            // return () => window.removeEventListener('resize', () => {});
        }, [path, lampIntensity, cameraFOV]);

        return gltf ? <primitive object={gltf.scene} /> : undefined;
    };

    return (
        <Canvas
            shadows
            className={`${testBackgrounds ? 'bg-red-600' : ''}`}
            // resize={{ debounce: 0 }}
        >
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
                {/* <Environment
                    files='./interior.exr'
                    environmentIntensity={0.375}
                /> */}
                <Model />
            </Suspense>
        </Canvas>
    );
}
