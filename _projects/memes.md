---
layout: page
title: Memetical Compositions
description: Why publish papers when you can compose memes?
img: assets/img/meme/adventure.jpg
importance: 2
category:
related_publications: true
---

<div class="row mt-3">
    {% for image in site.static_files %}
        {% if image.path contains "img/meme/" %}
        {% if image.path contains "-480.webp" or image.path contains "-800.webp" or image.path contains "-1400.webp" %}
            {% continue %}
        {% endif %}
        
        <div class="col-sm mt-3 mt-md-0">
            {% include figure.liquid path=image.path class="img-fluid rounded z-depth-1" zoomable=true %}
        </div>
        {% assign remainder = forloop.index0 | modulo: 3 %}
        {% if forloop.index0 != 0 and remainder == 2 %}
</div>
<div class="row mt-3">
        {% endif %}
        {% endif %}
    {% endfor %}
</div>