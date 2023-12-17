#pip3 install pysdl2
#pip3 install pysdl2-dll

from GLAPP import GLAPP
from OpenGL import GL
import glm
import math
from BlenderMonkey import *


a = 0

class BlenderMonkeyApp(GLAPP):

    def setup(self):
        # Window setup
        self.title("Blender Monkey")
        self.size(1024,1024)

        # OpenGL Initialization
        GL.glClearColor(0.2, 0.2, 0.2, 0.0)
        GL.glEnable(GL.GL_DEPTH_TEST)
        GL.glEnable(GL.GL_MULTISAMPLE)
        GL.glEnable(GL.GL_BLEND)
        GL.glBlendFunc(GL.GL_SRC_ALPHA, GL.GL_ONE_MINUS_SRC_ALPHA);

        # Pipeline (shaders)
        self.pipeline = self.loadPipeline("Intensity")
        GL.glUseProgram(self.pipeline)

        self.monkey = BlenderMonkey()

    def draw(self):
        global a
        # clear screen and depth buffer
        GL.glClear(GL.GL_COLOR_BUFFER_BIT|GL.GL_DEPTH_BUFFER_BIT)
        projection = glm.perspective(math.pi/4,self.width/self.height,0.1,100)
        camera = glm.lookAt(glm.vec3(0,0,12),glm.vec3(0,0,0),glm.vec3(0,1,0))
        model = glm.translate(glm.vec3(0,0,-50)) * glm.rotate(a,glm.vec3(0,1,0))
        mvp = projection * camera * model
        GL.glUniformMatrix4fv(GL.glGetUniformLocation(self.pipeline, "MVP"),1,GL.GL_FALSE,glm.value_ptr(mvp))
        self.monkey.draw()
        a += 0.001


if __name__ == "__main__":
    BlenderMonkeyApp()
