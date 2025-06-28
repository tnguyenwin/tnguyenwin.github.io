import os, bpy

os.system('cls')

room_collection = bpy.data.collections['Room']
v_objs = bpy.context.view_layer.objects
c_objs = room_collection.objects
bpy.ops.object.select_all(action='DESELECT')
duplicates = []

#for o in [o for o in c_objs if o.type == 'MESH']:
o = bpy.data.objects['Room_Mesh_Ground.001']
d = o.copy()
d.data = o.data.copy()
c_objs.link(d)
d.select_set(True)
v_objs.active = d

for mod in d.modifiers:
    bpy.ops.object.modifier_apply(modifier=mod.name)

duplicates.append(d)

if duplicates:
    v_objs.active = duplicates[0]
    bpy.ops.object.join()
    
    joined_obj = v_objs.active
    joined_obj.data.materials.clear()
    joined_obj.data.materials.append(bpy.data.materials['Room_Export'])
   
    if joined_obj.name not in room_collection.objects:
        c_objs.link(joined_obj)
        
#    if joined_obj.name in c_objs:
#        c_objs.unlink(joined_obj)

CSI = "\x1B["
print(CSI + "32m" + "\n[SUCCESS]\n" + CSI + "0m")
