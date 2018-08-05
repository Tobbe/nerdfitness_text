// ==UserScript==
// @name         Nerd Fitness text corrections
// @namespace    https://github.com/tobbe
// @version      0.1
// @description  Corrects small text misstakes on NF
// @license      MIT
// @author       Tobbe
// @match        https://*.nerdfitness.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href === 'https://academy.nerdfitness.com/week-three-missions/') {
        const batcaveLi = document.querySelector('.format_text ol li:nth-child(1)');
        batcaveLi.innerHTML = batcaveLi.innerHTML.replace('25', '40');

        const teamLi = document.querySelector('.format_text ol li:nth-child(2)');
        teamLi.innerHTML = teamLi.innerHTML.replace('25', '40');

        const drinkLi = document.querySelector('.format_text ol li:nth-child(3)');
        drinkLi.innerHTML = drinkLi.innerHTML.replace('50', '60');

        const warmCoolLi = document.querySelector('.format_text ol li:nth-child(4)');
        warmCoolLi.innerHTML = warmCoolLi.innerHTML.replace('50', '40');
    }

    if (window.location.href === 'https://www.nerdfitness.com/level-up/my-epic-quest/') {
        document.title = 'My Epic Quest';
    }

    if (window.location.href === 'https://www.nerdfitness.com/level-up/my-quests/') {
        document.title = 'Quests';
    }

    if (window.location.href === 'https://www.nerdfitness.com/level-up/my-character/') {
        document.title = 'My Character';
    }

    if (window.location.href === 'https://www.nerdfitness.com/my-account/') {
        document.title = 'My Account';
    }

    if (window.location.href === 'https://www.nerdfitness.com/level-up/courses/') {
        document.title = 'Courses';
    }
})();