---
layout: ../../../layouts/project.astro
title: Syncrosim Cloud
client: Self
publishDate: 2020-09-23 00:00:00
img: https://images.pexels.com/photos/13573321/pexels-photo-13573321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
description: |
  An online portal for facilitating spatial forecasting by decision makers.
tags:
  - web dev
  - react
  - nodeJS
  - GIS
---

Decision makers need access to spatial statistical models, especially those that forecast changes in the future. Delivering those models to decision makers in a way that is accessible is a major barrier to use. [Syncrosim](https://syncrosim.com/) is a desktop software designed to streamline the process of delivering map-based forecasting models to users without the requirement of a data scientist or extensive modelling expertise. However, the desktop applications is still limited, often requiring install permissions and extensive computer resources.
\
\
I am currently working with the team at [ApexRMS](https://apexrms.com/) to design a web-based version of Syncrosim called _Syncrosim Cloud_. _Syncrosim Cloud_ is currently released in [beta](https://cloud.syncrosim.com) and allows users to upload and share their models created on _SyncroSim Desktop_. I am continuing to develop the functionality of the web-based version to allow users to perform high-performance computer and advanced models with nothing more that a web-browser. The application currently works similar to that of other online hubs such as DockerHub and Github as a way to collaborate with fellow researchers, but the end goal is to create a workspace that allows decision makers an easy way to build, explore, and share scientific models.
\
\
<img  src="../../../../SyncrosimCloud.png" />
\
\
We built _Syncrosim Cloud_ using React on the frontend and Express on the backend within the [AWS](https://aws.amazon.com/) ecosystem. The frontend is meant to be lightweight, with the Express backend brokering the management of large spatial files (e.g., S3) and batch model runs (e.g., EC2). This structure allows users to explore GBs worth of spatial models in hundreds of scenarios all within their preferred web browser and not requiring any addition program installations.
