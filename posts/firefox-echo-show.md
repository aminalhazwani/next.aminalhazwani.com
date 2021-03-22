---
title: Firefox for Echo Show
description: As the sole designer, I shaped from concept to shipping the first-ever voice-controlled Firefox Browser. Available on Amazon smart displays, it’s used by 800K+ users.
date: 2018-06-01
layout: layouts/post.njk
cover: https://aminalhazwani.com/images/2x/firefox-echo-show-device.webp
published: true
---

## Problem statement

Design a browser that you can control with your voice for smart display customers. 

## Desired business objective

A 2016 research from Google highlighted how 20% of searches on mobile devices were performed with voice. Moreover the smart speakers sales continued to increase year after year. That said Mozilla wanted to explore what a voice-controlled browser might look like, or pardon, what a web browser might sound like.

This product was also supporting the evolution of Firefox’s Android Components initiative, the project at the base of the newly launched Firefox for Android browser.

## Context

With the support of the Emerging Technology research department we defined who the target audience might be. Smart displays usually find their place at home, in living rooms, kitchens, or bedrooms. And take part of the families lives during the morning or evening routine.

## Constraints

The projects had several constrains even before its start. For example we had to fork the existing code base of Firefox for Fire TV and that meant designing a browsing experience with only one tab available. 

The device screen was relatively small, with a low pixel density, therefore I had to defined new usability and ergonomics paradigms.

Or for instance I could not side load the app from Android Studio to the device due to the lack of a USB port, or even better, when they told us that a new smart display was in the works I did not had access too that device, because it was locked in a room in the Mozilla’s San Francisco office, and covered by an NDA.

Moreover Amazon’s Fire OS wasn’t based on the most recent version of Android 9, instead it was based on Android 5.1 and that limited the design and development possibilities.

## Discovery

Before diving into the actual design of this new web browser I tried to understand what could be the most essential features. What were the contexts in which such browser would be used? For example it was necessary for the interface to be visible from a distance. Or, since you could not hold the device in your hands the interface would have to be more generous and prone to touch errors.

I studied the existing research on voice interfaces conducted by Mozilla’s Emerging Technology team. And I cross-referenced the results with the existing product guidelines on voice UI: from the Alexa’s guidelines, to Google’s Material Design and Apple’s HIG on Siri.

## Ideation 

After the discovery and research phase I started to sketch out with pen and paper possible design directions. I was very lucky to be able to bring such rough drawings in front of the team during our weekly meetings. Together with PMs, engineers and QA we evaluated pros and cons of each proposed direction.

Because of the tight time we mainly focused on three experiences: home screen, browsing, and settings.

Week after week these three flows would become more defined thanks to the continues conversation with PMs and engineers.

## Delivery

Right after the first drawings the engineering team started to explore what was feasible and what was not. Even if we were 9 hours apart, myself in Berlin, them in San Francisco, we were able to keep an active and open conversation channel. I would share all my explorations by the end of my day and they would find those in their morning. They would then code, test, and iterate and leave me their feedback for my next morning.

During these iterations we simplified the experience flow and interface even more. Might be for technical constraints or time to market.

During the whole design and development process we also had an active conversation with the Amazon design’s team. The goal of these discussions was first to find the right balance between making Firefox feel at home on Fire OS, without loosing the cross-platform experience that was achieved on other platforms such as iOS, macOS, Android, Windows, and Linux. And second, how to leverage Alexa’s technology to enabled voice search on Firefox.

## Impact

The launch of this new browser was a big success, and with the growing sales of smart displays, Firefox for Echo Show hit 800K+ MAUs by the end of 2018.

## Reflect

With a greater knowledge of the market I would have further explored how to better enable voice interaction in a web browser. We were able to ship v1.0 with basic search capabilities that needed to be supported by a GUI. I would love to give a second take and explorer how to leverage less and less the visual interface.
