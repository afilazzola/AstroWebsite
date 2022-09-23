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

Decision makers need access to spatial models, especially those that predict changes in the future. Delivering those models to decision makers in a way that is accessible is a major barrier to use. [Syncrosim](https://syncrosim.com/) is a desktop software designed to streamline the process of delivering map-based forecasting models to users without the requirement of a data scientist or extensive modelling expertise. However, the desktop applications is still limiting, often requiring install permissions and upkeep for IT services.

I am currently working with the team at [ApexRMS](https://apexrms.com/) to design a web-based version of Syncrosim called _Syncrosim Cloud_. _Syncrosim Cloud_ will allow users to upload spatial data and run different forecasting models without the need to understand parallel and cloud computing. We also take the heavy lifting out from need to purchase or manage high-performance computing resources. We are currently in beta, but once released _Syncrosim Cloud_ will be available to anyone interested in conducting spatial forecasting.
<img  src="../../../../SyncrosimCloud.png" />

We built _Syncrosim Cloud_ using React and [NodeJS](https://nodejs.org/) on [AWS](https://aws.amazon.com/). The web UI is meant to be lightweight, making calls to a REST API that functions as a broker to host large spatial files on AWS S3 and run analyses on EC2. This structure allows users to run GBs worth of spatial models in hundreds of scenarios all within their preferred web browser and not requiring any addition program installations.
