---
layout: about
title: about
permalink: /
subtitle:

profile:
  align: right
  image: meme/summertime.jpg # TODO: better image
  image_circular: false # crops the image to make it circular
  more_info: >
    Our latest <a href="https://www.youtube.com/watch?v=yUGZVPJlvzY">hit single</a>
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

The **CompInterp** approach to interpretability treats weights and data as a unified modality to provide a compositional perspective on model design, analysis, and manipulation. By combining tensor and neural network paradigms, our $\chi$-nets pave the way for inherently interpretable AI without sacrificing performance.

**$\chi$-nets** are compositional by design, both in how they are built and in the representations they learn. Their architecture enables mathematical guarantees and weight-based subcircuit analysis, grounding interpretability in formal (de)compositions rather than post-hoc activation-based approximations.

We're currently scaling CompInterp methods to CNNs and transformers by leveraging their specialised low-rank structure. Learn more about it in our [latest talk](https://www.youtube.com/watch?v=yUGZVPJlvzY)!

<!-- prettier-ignore-start -->
*[compositionality]: Compositionality is the algebraic capacity to understand and produce novel combinations from known components.

*[inherently]: read: compositionally
<!-- prettier-ignore-end -->
