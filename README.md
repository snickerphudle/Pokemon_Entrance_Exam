# Pre-work - _Memory Game_

**Pokemon Trainer Entrance Exam** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **William Nguyen**

Time spent: **12** hours spent in total

Link to project: https://ribbon-mixolydian-stream.glitch.me/

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [ ] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] The sounds played are from the official Pokemon Theme Song: https://www.youtube.com/watch?v=rg6CiPI6h2g
- [x] Added a custom lives counter
- [x] Made Pokemon evolutions appear on click
- [x] Added Pokemon logo to top right corner
- [x] Custom win screen
- [x] Custom lose screen
- [x] Added embedded link to YouTube video so player can study the song before playing

## Video Walkthrough (GIF)

Show Pokemon evolution on button click
![](https://cdn.glitch.global/c98ff0fb-bd71-4328-9a5f-792ecd9febb7/evolve.gif?v=1648360205416)
Lose when player runs out of lives
![](https://cdn.glitch.global/c98ff0fb-bd71-4328-9a5f-792ecd9febb7/badGuessGid.gif?v=1648411513622)
Win when the player finishes all levels
![](https://cdn.glitch.global/c98ff0fb-bd71-4328-9a5f-792ecd9febb7/winnerGif.gif?v=1648411878514)
Lose when the timer runs out
![](https://cdn.glitch.global/c98ff0fb-bd71-4328-9a5f-792ecd9febb7/timeDeadGif.gif?v=1648411554464)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   The main resources I used to work on this project were the provided Prework Guide, Stack Overflow, and W3Schools. At first, I didn't know anything about HTML, CSS, or Javascript, but thanks to
   these resources, I was able to pick up on a few of the basics and implement the features necessary for this project.

   - https://stackoverflow.com/questions/14673603/print-a-score-counter-with-html-javascript
   - https://stackoverflow.com/questions/40858456/how-to-display-a-javascript-var-in-html-body
   - https://stackoverflow.com/questions/10541609/make-a-countdown-from-timer
   - https://stackoverflow.com/questions/1347675/html-img-scaling
   - https://stackoverflow.com/questions/3910736/how-to-call-multiple-javascript-functions-in-onclick-event
   - https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element
   - https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
   - https://www.w3schools.com/cssref/sel_class.asp
   - https://www.w3schools.com/howto/howto_css_center_button.asp
   - https://www.w3schools.com/js/js_output.asp
   - https://www.w3schools.com/jsref/prop_html_innerhtml.asp
   - https://www.w3schools.com/jsref/met_win_clearinterval.asp
   - https://www.w3schools.com/jsref/met_win_setinterval.asp
   - https://www.w3schools.com/howto/howto_js_countdown.asp
   - https://www.w3schools.com/cssref/css_websafe_fonts.asp
   - https://www.w3schools.com/howto/howto_css_button_on_image.asp
   - https://www.w3schools.com/js/js_arrays.asp
   - https://www.w3schools.com/jsref/met_win_clearinterval.asp
   - https://www.w3schools.com/jsref/met_win_setinterval.asp
   - https://www.w3schools.com/html/html_links.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   At first, I thought this project would be a breeze, since all of the code for the required parts was provided, and I had a little experience from the few programming courses I've taken at college.
   However, I quickly learned that copying code was very ineffective, as I didn't know how to implement a lot of the optional features since I didn't know how the internals of the rest of the project
   worked. Some specific problems I faced during this project were how to print variables from JavaScript into HTML, how to add functions that delay and run at specific times, how to make images appear
   and disappear, how to make my timer show on the screen and tick down in live time without refreshing the page, how to change the font, how to create arrays in JavaScript, how to center elements, how to
   scale images to the correct size, how to implement game logic such as time reduction and lives lost, and many more problems. With each of these problems, I used the same 4-step process: specify exact what
   I wanted in simple block code, search for the control feature that would allow me to achieve that, learn the basics of how to use it, and implement the feature with the code I learned.
   Focusing on one specific feature, the score and timer feature, I had an extremely hard time figuring out how to display the JavaScript variable on my HTML page. Even after searching up how to do it on numerous
   online resources, I felt like I didn't understand how it worked. To get past this challenge, I decided to carefully read the Prework Guide again and see if I could make any connections between the code that were
   provided as well as what I was trying to achieve. After a little bit of inspection, I noticed that the Javascript code was able to make the start and stop buttons disappear on the HTML page. As such, I wondered
   if I could do the same thing with HTML text. After a while, I realized that if I gave my HTML elements a unique ID, I could run functions in JavaScript that could change the HTML, such as document.getElementById("image1").classList.remove("hidden").

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   The computer science courses at my school emphasize backend programming and solving problems with computation. As such, I was very excited to be working on a front-end/full-stack project with this pre-work project.
   This was my first step into front-end work, and I am still so eager to learn more and create more cool things with programming. First of all, most of the features I implemented with the 3 languages was mainly taught
   on the spot through snippets on the guide page. I would love to go back to the basics and learn the inner workings of each function to write cleaner, more concise code to make my project better. The things I
   created in this project were pretty bare-bones, and I wonder if there are more tools to implement cooler things, such as animation, sliding carousels, and image effects using HTML, CSS, and Javascript. I've also heard about
   how people have made games and applications with Javascript, so I wonder how I can use the skills I've learned from this project to create another project, such as a game. I've always wanted to create a web app but was too
   nervous to even try. Some more questions I have about web development are how can I use code that other people have written, such as libraries, and import them into my project to add special features? How do people create
   online marketplaces full of transactions and online payments? How do sites like Google Sheets and Google Forms handle the backend processing while still maintaining a clean interface that is easy for users to use? Are
   there other communities out there who are actively building websites, and am I able to join them and help out?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   If I had a couple hours to work on the project, I would add a menu bar, a link to all the sources I used, a selection of tunes that would shuffle everytime the player clicked start, more artwork, and a timer bar
   that gets shorter and shorter as time decreases. I would also clean up my code and add comments so other programmers will be able to trace the code more easily. Some examples of cleaning up code include making
   sure the semicolons, spacing, and function calls all look consistent. Aside from these small little features, I would also spend a lot of time studying up on the basics of HTML, CSS, and Javascript to incorporate
   features more cleanly, without complex code cluttering up my project. As for larger features I would add if I had lots of time, I would love to add a username/password mechanism to allow players to save their score,
   a local leaderboard which saves the best times of the players of the game, a print function which allows the player to print a certificate of their Pokemon Entrance Exam Completion, 12 websites with pictures and
   information on each Pokemon, and add a button that allows players to share their score with their friends through social media, such as FaceBook and Instagram.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/ZAl-8pVm4Yg)

## License

    Copyright [William Nguyen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
