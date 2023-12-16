import math
import array

def mapP5(valor, a, b, c, d):
    return (valor-a)/(b-a)*(d-c)+c

def esfera(raio=1,m=50,n=50):
    vertex = array.array('f')
    for i in range(m):
        theta = i*math.pi/m-math.pi/2
        # mapP5(i,0,m,-math.pi/2,math.pi/2)
        for j in range(n):
            phi = j*2*math.pi/n
            Qx = raio * math.cos(theta) * math.cos(phi)
            Qy = raio * math.sin(theta)
            Qz = raio * math.cos(theta) * math.sin(phi)
            vertex.append(Qx)
            vertex.append(Qy)
            vertex.append(Qz)
    return vertex
