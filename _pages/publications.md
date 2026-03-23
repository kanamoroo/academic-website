---
layout: page
permalink: /publications/
title: Publications
description: A list of peer-reviewed journal articles, conference proceedings, and datasets. (Reverse chronological order)
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications">

<h2 class="category">Refereed Journal Articles</h2>
{% bibliography -f papers -q @*[type=article]* %}

<h2 class="category">Conference Proceedings</h2>
{% bibliography -f papers -q @*[type=inproceedings]* %}

<h2 class="category">Datasets & Catalogs</h2>
{% bibliography -f papers -q @*[type=dataset]* %}

<h2 class="category">Other Contributions</h2>
{% bibliography -f papers -q @*[type=misc]* %}

</div>
