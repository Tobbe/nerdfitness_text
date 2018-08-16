// ==UserScript==
// @name         Nerd Fitness text corrections
// @namespace    https://github.com/tobbe
// @version      0.2
// @description  Corrects small text misstakes on NF
// @license      MIT
// @author       Tobbe
// @match        https://*.nerdfitness.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href === 'https://academy.nerdfitness.com/week-1-missions/') {
        const measurementsLi = document.querySelector('.format_text ol li:nth-child(2)');
        measurementsLi.innerHTML = measurementsLi.innerHTML.replace('25', '40');

        const bigWhyLi = document.querySelector('.format_text ol li:nth-child(3)');
        bigWhyLi.innerHTML = bigWhyLi.innerHTML.replace('25 XP for each )', '140 XP in total)');

        const walkLi = document.querySelector('.format_text ol li:nth-child(4)');
        walkLi.innerHTML = walkLi.innerHTML.replace('100', '60');

        const foodLi = document.querySelector('.format_text ol li:nth-child(5)');
        foodLi.innerHTML = foodLi.innerHTML
            .replace('1 week', 'three days')
            .replace('50', '60')
            .replace('one week', 'three days to start with');

        const epicP = document.querySelector('.format_text p:nth-child(9)');
        epicP.innerHTML = epicP.innerHTML
            .replace('EPIC 100', 'EPIC 205')
            .replace('Level 2 by', 'Level 3 by')
            .replace('250', '325')
            .replace('3!', '4!');
    }

    if (window.location.href === 'https://academy.nerdfitness.com/week-two-missions/') {
        const goalsAndEpicQuestLi = document.querySelector('.format_text ol li:nth-child(1)');
        goalsAndEpicQuestLi.innerHTML = goalsAndEpicQuestLi.innerHTML.replace('25 XP each', '180 XP in total');

        const goalsAndEpicQuestStrong = document.querySelector('.format_text ol li:nth-child(1) strong');
        goalsAndEpicQuestLi.innerHTML = goalsAndEpicQuestLi.innerHTML.replace('> and <', '></strong> and <strong><');

        const lootLi = document.querySelector('.format_text ol li:nth-child(2)');
        lootLi.appendChild(document.createTextNode(' (25 XP)'));

        const lootStrong = document.querySelector('.format_text ol li:nth-child(2) strong');
        lootStrong.innerHTML = lootStrong.innerHTML.replace('&nbsp;(25 XP)', '');

        const benchmarkLi = document.querySelector('.format_text ol li:nth-child(3)');
        benchmarkLi.innerHTML = benchmarkLi.innerHTML.replace('&nbsp;(25 XP?)', '(25 XP)');

        const dietLi = document.querySelector('.format_text ol li:nth-child(5)');
        dietLi.innerHTML = dietLi.innerHTML
            .replace('the&nbsp;NF', 'the NF')
            .replace('passed!).<a', 'passed!). <a');
    }

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

    if (window.location.href === 'https://academy.nerdfitness.com/level-up/mindset/before-pictures/') {
        const pointA = document.querySelector('.format_text p:nth-child(6)');

        if (pointA.innerText.slice(0, 6) === 'So let') {
            pointA.innerHTML =
                `<strong>So let's start with Point A.</strong> You might not be
                happy with where you're at, and that's okay. In fact, we're not
                gonna dwell too much on Point A; that'd be like driving while
                only looking in the rear-view mirror.`;
        }

        const quote = document.querySelector('.format_text p:nth-child(15) em');

        if (quote.innerHTML.slice(1, 10) === 'But Steve') {
            quote.innerHTML =
                '"But Steve", you say, ' +
                '"I already know what I look like! I look at myself every day!"';
        }
    }

    if (window.location.href === 'https://academy.nerdfitness.com/level-up/nutrition/food-log/') {
        const nbspP = document.querySelector('.format_text p:nth-child(30)');

        if (nbspP.innerHTML === '&amp;nbsp;') {
            nbspP.parentNode.removeChild(nbspP);
        }
    }

    if (window.location.href === 'https://academy.nerdfitness.com/level-up/mindset/art-of-goals/') {
        const nbspP = document.querySelector('.format_text p:nth-child(28)');

        if (nbspP.innerHTML === '&amp;nbsp;') {
            nbspP.parentNode.removeChild(nbspP);
        }
    }

    if (window.location.href === 'https://academy.nerdfitness.com/level-up/mindset/start-your-epic-quest/') {
        const nbspP = document.querySelector('.format_text p:nth-child(11)');

        if (nbspP.innerHTML === '&amp;nbsp;') {
            nbspP.parentNode.removeChild(nbspP);
        }

        const divXp1 = document.querySelector('.format_text div:nth-child(12)');
        const pXp1 = document.createElement('p');
        pXp1.innerHTML = divXp1.innerHTML;
        divXp1.parentNode.replaceChild(pXp1, divXp1);

        const divXp2 = document.querySelector('.format_text div:nth-child(13)');
        const pXp2 = document.createElement('p');
        pXp2.innerHTML = divXp2.innerHTML;
        divXp2.parentNode.replaceChild(pXp2, divXp2);
    }

    if (window.location.href === 'https://academy.nerdfitness.com/level-up/nutrition/diet-level-up/') {
        let nbspP = document.querySelector('.format_text p:nth-child(5)');

        if (nbspP.innerHTML === '&nbsp;') {
            nbspP.parentNode.removeChild(nbspP);
        }

        nbspP = document.querySelector('.format_text p:nth-child(35)');

        if (nbspP.innerHTML === '&amp;nbsp;') {
            nbspP.parentNode.removeChild(nbspP);
        }

        nbspP = document.querySelector('.format_text p:nth-child(43)');

        if (nbspP.innerHTML === '&amp;nbsp;') {
            nbspP.parentNode.removeChild(nbspP);
        }

        const fullPaleo = document.querySelector('.format_text p:nth-child(4)');
        fullPaleo.innerHTML = fullPaleo.innerHTML
            .replace(' &nbsp;</strong>We', '</strong> We')
            .replace('So if you', 'So even if you');

        const goalP = document.querySelector('.format_text p:nth-child(5)');
        goalP.innerHTML = goalP.innerText;

        const plateP = document.querySelector('.format_text p:nth-child(18)')
        plateP.style = '';
    }

    if (window.location.href === 'https://academy.nerdfitness.com/level-up/mindset/custom-batcave/') {
        const nbspP = document.querySelector('.format_text p:nth-child(61)');

        if (nbspP.innerHTML === '&amp;nbsp;') {
            nbspP.parentNode.removeChild(nbspP);
        }
    }
})();