const MAXLINEDISTANCE=150,MOUSERANGE=200,VELOCITYCHANGSPEED=.03,GRAVITYMULTIPLYER=.001,canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");var nNeurons=0,Neurons={};function initCanvas(){canvas.width=canvas.offsetWidth,canvas.height=canvas.offsetHeight,canvas.centerX=canvas.width/2,canvas.centerY=canvas.height/2;let nNeurons=Math.ceil(canvas.width*canvas.height/1e4);for(const[key,e]of Object.entries(Neurons))e.exists=!1;for(let index=0;index<nNeurons;index++)Neurons[index]=new Neuron}window.onresize=initCanvas,initCanvas();var cursorX=-1,cursorY=-1,gravitateMouse=!1,gravitateNeurons=!1,negativeMouse=!1,paused=!1,collisions=!0;const animate=currentTime=>{ctx.clearRect(0,0,canvas.width,canvas.height);for(let index=0;index<nNeurons;index++)void 0!==Neurons[index]&&Neurons[index].exists&&Neurons[index].draw();paused||requestAnimationFrame(animate)};requestAnimationFrame(animate),window.addEventListener("load",(function(){initCanvas()}));