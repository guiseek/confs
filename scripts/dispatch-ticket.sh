#!/bin/bash

# README: replace :token and :username
curl -H "Authorization: token :token" \
    -H 'Accept: application/vnd.github.everest-preview+json' \
    "https://api.github.com/repos/guiseek/confs/dispatches" \
    -d '{ "event_type": "prerender-ticket", "client_payload": { "username": ":username" }'
