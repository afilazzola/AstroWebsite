---
layout: ../../layouts/project.astro
title: Image classifier for alpine snowpack
client: Self
publishDate: 2022-09-11 00:00:00
img: https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1047&q=80
description: |
  An image classifier for quantifying alpine snowpack from aerial images
tags:
  - machine learning
  - web dev
  - gis
---

Landscape are complex with features that including vegetation, abiotic (e.g., snow, rocks), or human-made. Quantifying these features is important to understand the characteristics of the landscape that species use. However, ground surveys can be costly, subjective, and inaccessible.
\
\
Currently, I am developing an image classifier that can be used to convert aerial imagery into snow cover for alpine meadows. Quantifying snow using remote sensing is not particularly challenge when on flat ground (e.g., the arctic) or over large spatial scales. But the alpine is particularly challenging because there are extreme topographical variation in small areas, creating shadows and other visual artifiacts that limit remote sensing. Classifying aerial images can work around these limitations to more accurately estiamte snow cover. I am creating training data to be integrated into a neural net for classification.
\
\
<img  src="../../../../imageClass.png" />
\
\
Snowpack is crucial for overwintering species in the alpine and quantifying its cover will be an important step for managing biodiversity loss with climate change. Populations of the Rocky Mountain apollo butterfly ([_Parnassius smintheus_](https://en.wikipedia.org/wiki/Parnassius_smintheus)) has been monitored since 1995 in a network of alpine meadows in Kananaskis, Alberta. We have [shown](https://onlinelibrary.wiley.com/doi/abs/10.1111/ecog.05407) that snow cover, especially in the fall, is important for overwintering egg survival in the harsh alpine winter. In the previous work, we visually estimated snow cover in November of five separate years. In my current project, I plan on extending this work to use the classifier to quantify snow cover more accurately, across more time periods, and across more meadows.
