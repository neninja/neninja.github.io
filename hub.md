<ul>
{% for conta in site.data.hub %}{% assign site = conta[0] %}
  <li>
    <a href="{{ conta[1].link }}">{{ conta[1].texto }}</a>
  </li>
{% endfor %}
</ul>
