import os, bpy

os.system('cls')

bpy.ops.export_scene.gltf(
    filepath=f"{os.path.dirname(os.path.dirname(bpy.path.abspath('//')))}\public\model_room.glb",
    collection='Room',
    use_selection=False,
    use_renderable=True,
    export_format='GLB',
    export_draco_mesh_compression_enable=True,
    export_apply=True,
    export_cameras=True,
    export_lights=True,
    export_animations=False
)

CSI = "\x1B["
print(CSI + "32m" + "\n[SUCCESS]\n" + CSI + "0m")
