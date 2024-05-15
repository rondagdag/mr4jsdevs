# Mixed Reality for JavaScript Developers

Mixed Reality features are available on the web through the use of WebXR. Experience virtual reality (VR) and augmented reality (AR) content in a compatible WebXR-enabled browser. Attend this session and leverage the power of JavaScript and web skills to create more engaging Mixed Reality experiences. We will look at popular open-source AR/VR JavaScript libraries available to get started. We will also look at how to use the WebXR Device API to create a simple XR experience. 

## Demo: 
In this example you find a local website that can be used to learn to create simple Mixed Reality Experiences. This repository contains a series of sample projects showcasing the usage of the WebXR Device API using different open-source libraries.

## How to use

[Website](https://rondagdag.github.io/mr4jsdevs/)

## Local Development

Using Codespaces:
- Navigate to the [github/rondagdag/mr4jsdev](https://github.com/rondagdag/mr4jsdevs)  repository.
- Click the  Code button, then click the Codespaces tab.
- Create your codespace, using the default options

```bash
npm install local-web-server
npx ws
```


For the Wonderland Engine Project:
- To run local language model download and install [Ollama](https://ollama.com/download)
```bash
ollama pull phi3
ollama serve
```
- clone this repository locally.
- download [Wonderland Engine](https://wonderlandengine.com/downloads/)
- open wonderlandengine/MixedRealityCube.wlp
- the api calls ollama serving phi3, it uses http://localhost:11434/api/generate

## Slides
[Presentation](mr4jsdevs.pdf)

### Speakers
- [Ron Dagdag](https://www.dagdag.net) - Microsoft MVP, Engineering Manager, Speaker