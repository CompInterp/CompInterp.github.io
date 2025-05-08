---
layout: page
title: Memetical Compositions
description: Why publish papers when you can compose memes?
img: assets/img/meme/adventure.jpg
importance: 2
category:
related_publications: false
---

<div class="row">
    <div class="masonry">
        {% for image in site.static_files %}
            {% if image.path contains "img/meme/" %}
            {% if image.path contains "-480.webp" or image.path contains "-800.webp" or image.path contains "-1400.webp" %}
                {% continue %}
            {% endif %}
            
            <div class="masonry-item">
                {% include figure.liquid path=image.path class="img-fluid rounded z-depth-1" zoomable=true %}
            </div>
            {% endif %}
        {% endfor %}
    </div>
</div>

<style>
.masonry {
    column-count: 1;
    column-gap: 15px;
    width: 100%;
}

.masonry-item {
    display: inline-block;
    margin-bottom: 15px;
    width: 100%;
}

@media (min-width: 576px) {
    .masonry {
        column-count: 2;
    }
}

@media (min-width: 992px) {
    .masonry {
        column-count: 3;
    }
}
</style>
