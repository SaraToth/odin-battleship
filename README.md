# Odin Battleship

## Replication of the game battleship

This project is a practice project that was built in accordance with the ODIN Project Battleship assignment to practice working with graphs and test driven development with Jest.

**Check out the Assignment guidelines for this project:**

https://www.theodinproject.com/lessons/node-path-javascript-battleship



## How to Play Battleship:

A brief synopsis if you're not familiar with the game battleship: 

The game battleship is a 2 player game, where each player has a total of 5 seperate ships of varying lengths that they must place anywhere on their gameboard. Players take turns calling out a location on their opponent's board, to launch an attack. Players announce 'hit' when their opponent's guess hits one of their ships, or "miss". Gameplay concludes when one player successfully sinks all of their opponent's ships.  

For a more in-depth understanding of how to play read: https://en.wikipedia.org/wiki/Battleship_(game) 



## A Note on Ships:

There are 5 different ships in the game battleship with specific names and lengths associated with them. For ease of understanding, all ships in this project are named based on their in-game names. 

Ship names are listed exactly as they are named (as variables) in the code.

You will likely want to refer to this information often:

|  **Ship Name**  | **Length** |
| --------------- | ---------- |
| aircraftCarrier |      5     |
| battleship      |      4     |
| cruiser         |      3     |
| submarine       |      3     |
| destroyer       |      2     |


## Getting Started

Before getting started make sure you have the latest version of npm installed.

I recommend downloading Node Version Manager (NVM) first and then downloading Node.

**For quick and easy instructions on how to download nvm and set up node:** https://www.theodinproject.com/lessons/foundations-installing-node-js

Then you will need to fork a copy of this repository to your Github account and then you can use the git clone command to clone your forked copy to your local environment and then you will need to download the following dependencies:


### Install all dependencies 

Run the following command to install all necessary dependencies.
```
npm install
```



### Local Server

After sucessfully cloning the repository, in order to launch the program locally you will need to run the webpack server using the command

```
npm run serve
```
and then the program will load at http://localhost:8080/ 

## Game Limitations

While the original game battleship allows for horizontal or vertical placement of ships on the board, this version only allows for horizontal placement. This would be a great feature to incorporate into the game, but it comes with additional complexities due to the drag and drop features already implemented, so for now it has not been included.

Additionally, when the computer places attacks in 1 player game mode, these attacks are entirely random, so if the computer does land a hit, there is no logic to ensure the computer keeps targeting adjacent spaces until the ship is sunk. 

At the moment, if computer lands a hit, this hit's coordinates are stored temporarily under the variable computerHit, which can be used to develop further logic to ensure the computer attacks adjacent coordinates, although there are no plans at this time to develop this feature.




