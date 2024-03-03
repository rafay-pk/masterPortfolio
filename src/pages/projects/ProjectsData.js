const projectsData = [
    {
        id: 1,
        title: 'Rock, Paper, Scissors',
        label: 'rps',
        videoId: 'f3kR06nOX-o',
        description: 'For the last 4 weeks of my internship at Mindstrom Studios, a game jam was held with all 10 interns and 312 fellows with the theme of "Self-Transformation". We had intense brainstorming sessions and spent long hours discussing different ideas and creating different prototypes until 1 week into the game jam. I naturally took the role of group leader and with the amazing collaborative effort from my teammates, Aiyan and Hajra, we were swiftly able to build the <a href="https://drive.google.com/file/d/18enCdA_Qdzinu8BuuCJoJa1b3nr4n2iE/view?usp=drive_link">game</a>. The game submissions were rated 50% on their design and implementation and 50% on their marketing test in which they calculated the CPI by investing $150 on each submission. Our game won in both categories and we were awarded the Rookies of the Year title. I worked on the game design, project management, level design, hand animations, event systems, player and NPC controllers and the background 3D objects.',
    },
    {
        id: 11,
        title: 'Image Search',
        label: 'is',
        videoId: 'eZppKyn6dgE',
        description: '<a href="https://github.com/rafay-pk/image-search">Image-Search</a> is an open source software that I developed as the final year project for my degree in computer engineering. It basically aims to give the same experience of managing media files as Google Photos or Apple Photos but strictly for local media files for better security and no recurring payments to large tech corporations. The target users for this software are mainly photo/video-graphers, media production studios and general power users. Users can manually tag media as they see fit or use the integrated facial recognition or image captioning to do it for them. The project was built using PyQt6 UI framework and SQLite database. I received an A grade (GPA:4/4) for it from my professors. \n Note: The executable from github won\'t run in its current state as I haven\'t figured out a way of including the ML models in the build while still keeping the CI/CD in place.',
    },
    {
        id: 2,
        title: 'Combo Counter System',
        label: 'combo',
        videoId: 'CXJkAt24LaU',
        description: 'A <a href="https://assetstore.unity.com/packages/tools/gui/combosystem-217635">published unity asset</a> I made for letting developers integrate multi-phase combo counters and optional text popups to add player feedback and game juice to their games. The asset is compatible with both DOTween and LeanTween, the 2 most used tweening plugins for Unity.',
    },
    {
        id: 12,
        title: 'Tiny Office (In Progress...)',
        label: 'to',
        videoId: 'Kj0di0hJaQ8',
        description: 'The motivation of this project is to create a tiny amalgamation of office applications with stripped-down features and a minimalistic UI. The project is currently in very early stages of development using PyQt6. I am basically trying to create an all-in-one application that serves as the ultimate data manipulation software for my needs, be it text, tables or images.',
    },
    {
        id: 17,
        title: 'RPG Loot Generator',
        label: 'rpg',
        videoId: 'c6zXXDPX0jY',
        description: 'A developer came to me having trouble with the loot generation system in their game, so I made this module to add replayability in the game and to break off monotony. The video walks through the module and its code.',
    },
    {
        id: 6,
        title: 'Roller Madness',
        label: 'rm',
        videoId: '76yjYxQWQqo',
        description: 'I made this game as part of my certification for <a href="https://coursera.org/share/6104746cd76b99fa710b604892d63453">Introduction to Game Development</a> from Michigan State University. The assets were provided and the objectives were made clear. If you search the title of this project  online, you will find other people\'s work as well. I made this <a href="https://drive.google.com/file/d/18WSP0309FqOFEInLLe2SUfMa9jKUS9m7/view?usp=drive_link">game</a> in 2020 and it was the first game I made that I could share to other people. I have since then made many more games and have improved my skills significantly. I am currently working on a sequel to this game in Unreal Engine.',
    },
    {
        id: 5,
        title: 'Dungeon Survivor',
        label: 'ds',
        videoId: 'jQCHvo8fi4o',
        description: 'I made this game from scratch (other than textures, models and music) as a semester project for my Computer Graphics course in university. I remember not doing much for a whole month other than making this game as it was during covid. I wanted to mimic the movement mechanics from a really old game called Wonderland: Secret Worlds. I made a prototype using the unity physics system with colliders and so on and soon realized the limitations of relying on physics. I scratched the project and remade it using C# Arrays, and although I am now surprised at the horrendous code I wrote then, I am still proud of the <a href="https://drive.google.com/file/d/1QrBUxEeTkdO0B1fHOkWuV3JJAoo9wt37/view?usp=drive_link">game</a> as it was an important stepping stone in my journey.',
    },
    {
        id: 4,
        title: 'LegenedEHR',
        label: 'legend',
        videoId: 'nJKJdV3Dvoo',
        description: 'As mentioned in the work description for RISETech, this project was a part of a <a href="https://legendehr.com">larger project</a> and a team effort as well where I essentially developed a 3D Model viewer in Unity using a spherical coordinate system and mapped user input actions on touch screen to rotate, zoom and pan functions. After that we made an annotation system using raycasts and an outlining system for the body by essentially dividing the mesh into many pieces. The API I developed for the flutter developers amounted to around 30 functions overall, for each of which I made test cases inside Unity.',
    },
    {
        id: 3,
        title: 'Dungeon Survivor 2',
        label: 'ds2',
        videoId: 'ltBw--wu8Ho',
        description: 'I along with my friends <a href="https://www.linkedin.com/in/mansoor-khan-a1b4101b9/">Mansoor Khan</a>, <a href="https://www.linkedin.com/in/shaheer-khan-66a9251a7/">M. Shaheer Khan</a>, <a href="https://www.linkedin.com/in/fatima-tuz-zahra-99b49b217/">Fatima tuz Zahra</a>, and a senior dev from Tintash, <a href="https://github.com/Sameer25-py">M. Sameer</a>, made a <a href="https://drive.google.com/file/d/18eAiWKnl7aET8-CcAD7tGz-TUr5hhT4L/view?usp=sharing">successor</a> to Dungeon Survivor during the Winter Game Jam 2023 by Mindstorm Studios. It was only a 2 week game jam and we had ongoing FYP presentations so we had to make a lot of compromises. I mainly worked on the game design, project management, level design, integration for everyone\'s work, grid movement, doors and switches and the UI. Here\'s the preface: An adventurer who accidentally enters a forbidden dungeon. Now, the adventurer is pitted against dungeon trials in order to survive. The forbidden dungeon is cursed with solving timed puzzles to keep the dungeon lit up which will keep deadly beasts from crawling the dungeons and eating the adventurer alive.',
    },
    {
        id: 7,
        title: 'Roller Madness 2 (In Progress...)',
        label: 'rm2',
        videoId: 'boH9Ry98nZk',
        description: 'After recently starting to learn Unreal, I decided to make a game with mechanics that I was more comfortable with. The essence of Roller Madness was a platformer game, so I thought of powers that would make sense in a game like this. I came up with these 4 powers: Super Jump (Implemented), Space Swap, Energy Blast and Phase Shift. Each power consumes 1 collected crystal and will help the player move through obstacles and challenges. I am currently working on this game and learning Unreal through this project. Thus, I will be updating this section as I make progress. I am trying to learn and apply good coding practices and making macros and functions to make my code as reusable as possible.',
    },

    {
        id: 18,
        title: 'Sketches and Digital Art',
        label: 'sketch',
        special: '2D',
        description: 'Although I wouldn\'t call myself an artist by any stretch of the word, I do have some basic sense of art styles, perspectives, shading, color theory and so on. It\'s more of a hobby than a portfolio. That being said, having this little experience allows me to have a better understanding of the work and needs of artists and designers and  effectively communicate with them about specifications, requirements and project vision.',
    },
    {
        id: 16,
        title: 'Mobile Maker',
        label: 'mobile',
        videoId: 'JgnYqfPkZ40',
        description: 'During my internship at Mindstorm Studios LABS, I came up with this game for a hyper-casual game and was working on the prototype. I wanted to continue development on this at the time, however, the Rookie Game Jam started in the process and I had to shift my focus to that. Here\'s the premise, you are a worker in a mobile manufacturing factory and have to rush through the factory line to assemble the perfect mobile according to the customer\'s needs. At the end of each level, the phone you assemble will get packed and the customer will rate your work.'
    },

    {
        id: 8,
        title: 'VRM Batch Exporter',
        label: 'vrm',
        videoId: 'BqE6-co8o8E',
        description: 'A startup reached out to me to about their process of applying a texture to a 3D model and exporting it as a VRM asset from unity for Web3 and NFT purposes. I made a tool for them in unity that automated their whole process. The tool reads any sort of texture file from the resources folder and creates a rigged 3D avatar with the texture applied to it individually or in batches. The working is explained more in the video with live demos of the 3D avatars.',
    },
    {
        id: 15,
        title: 'Shape Race',
        label: 'shape',
        videoId: '8PXjyWaylKE',
        description: 'Shape Race is an arcade mobile endless runner I made for a startup. This is the project for which I made the combo counter system module. The pace of the game rises the more you play. This, along with the hard turns in the level requires the player to stay vigilant and react quickly to beat their highscores. The level was made using a spline tool and I included some skyboxes to improve the immersiveness of the game.'
    },

    {
        id: 9,
        title: 'Animations',
        label: 'anim',
        special: 'ANIMATIONS',
        description: 'Here are some of the animations I\'ve made for games and other projects. I\'ll be adding more animations as I make them.',
    },

    {
        id: 13,
        title: '3D Props',
        label: 'prop',
        special: 'PROPS',
        description: 'Here are some of the static 3D props I\'ve made for games and other projects. I lost some data to a hard drive failure, thus only renders of some of the props are left. I\'ll be adding more props as I make them.',
    },
    {
        id: 19,
        title: '3D Renders',
        label: 'rend',
        special: 'RENDER',
        description: 'Here are some of the cool wallpapers I\'ve made while experimenting with colors, shaders, materials, lighting and cameras within Blender.',
    },
    // Add more project objects here
];

export default projectsData;