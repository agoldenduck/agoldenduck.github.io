---
layout: "post"
title: "Meet Travis"
date: "2016-10-24 16:54"
---

# Meet Travis

I've been meaning to learn how to continuously integrate for a long time. The new website is my chance.

## What should Travis do?

Whenever I add functionality or change any of my components or page templates, Travis should check that all the tests pass and the static Gatsby site gets generated correctly. It should finally update this site if all has worked.

## Process

Travis was super easy to get started with. Sign up and activate the repository I want Travis to work in.

I then created

```yaml
language: node_js
node_js:
- "node"
after_success: |
if [ -n "$GITHUB_API_KEY" ]; then
  gatsby build --prefix-links
  git config --global user.name "Travis CI"
  git config --global user.email "alex@alexdacre.com"
  gh-pages -d public -b master -r https://agoldenduck:$GITHUB_API_KEY@github.com/... -x
fi
```

jer
