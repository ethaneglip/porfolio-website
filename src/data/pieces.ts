export interface Movement {
  title: string;
  audioSrc: string;
}

export interface Piece {
  slug: string;
  title: string;
  meta: string;           
  scoreSrc: string;
  movements?: Movement[];  
  audioSrc?: string;         
  programNotes: string[];   
  premiereNote?: string;
}

export const pieces: Piece[] = [
  {
    slug: "thenarrows",
    title: "The Narrows",
    meta: "2026 / 6' / Difficulty - hard / percussion ensemble",
    scoreSrc: "/scores/thenarrows.pdf",
    audioSrc: "/audio/thenarrows.mp3",
    programNotes: [
      "Recently, I traveled to one of the most remarkable places I've ever experienced: Zion National Park in Utah. The park's towering red cliﬀs and dramatic landscape left me genuinely awestruck—it's a place that stays with you long after you leave.",
      "Of course, being in a national park means that you are basically cut oﬀ from the rest of the world. It's just you, and the nature surrounding. And that's what drew me to this place. Lately, I'd been feeling an increasing need to step away from the noise and craze of daily life; to simply exist somewhere without the need of being somebody to someone or something. And I did that with this trip to Zion, finding a place to mentally reset and find some peace. One of the hikes I found myself going on in Zion was the Riverside Walk. This hike follows the Virgin River, and as you get further along, you find the Narrows. The Narrows is one of the most popular trails in Zion, where following its name, the towering walls are the narrowest throughout all of Zion Canyon. This hike has you walking in the Virgin River, following the beautiful geography and awe-inspiring cliﬀs filled with stripes and many diﬀerent hues of red adorning the walls.",
      "<i>The Narrows</i> as a piece is something I've wanted to write but never knew how to. Conceptually, I knew that my time at Zion National Park was something that I would love to write about, but putting it into practice, I never knew how to do it in a way that felt fresh, new, while also telling the story that I wanted to tell. I wanted to write about what I felt walking in the Narrows, in Zion, on the Riverwalk, and the ultimate awe and wonder that one could feel experiencing Zion for the first time.",
      "If I could say one thing about <i>The Narrows</i>, it would be this that it's a piece about renewal. I wrote it out of an experience I needed, an experience of resetting and forgetting about life for a little bit. This piece is for the wanderers who struggle to find rest, whether physical or mental, and for the dreamers, because I understand what it means to dream."
    ],
    premiereNote: "<i>The Narrows</i> placed second at WMEA State Solo and Ensemble Composition Category in 2026.",
  },
  {
    slug: "pastellimoncello",
    title: "Pastel Limoncello",
    meta: "2025 / 8' / Difficulty - hard / flute, clarinet, strings, piano, electronics",
    scoreSrc: "/scores/pastellimoncello.pdf",
    audioSrc: "/audio/pastellimoncellomidi.mp3",
    programNotes: [
      "David Maslanka starts his Fourth Symphony's notes by stating that:",
      "<blockquote>\"The sources that give rise to a piece of music are many and deep. It is possible to describe the technical aspects of a work -- its construction principles, its orchestration -- but nearly impossible to write of its soul-nature except through hints and suggestions.\u201d<div class=\"score-links\"><a href=\"https://davidmaslanka.com/works/symphony-no-4-2/\" target=\"_blank\">(Source)</a></div></blockquote>",
      "The roots of which Pastel Limoncello come from are plenty, but as all my music starts with, it started with a way for me to express what I felt in a certain moment. That certain moment being my personal experiences in exploring Cinque Terre and the Amalfi Coast in Italy.",
      "There are certain moments in someone's life that I feel can't be explained through words or phrases, but rather through expression, whether it be in music, art, sounds, or even colors. With this piece, I took the words of Maslanka to heart, and I put all of what I was hearing and feeling in that certain moment in Italy and pushed it all into this eight-minute piece: wonder, awe, but also a sense of somberness and longing.",
      ],

    premiereNote: "<i>Pastel Limoncello</i> premiered at the 2025-2026 Seattle Symphony Young Composers Workshop on June 19, 2026, and is dedicated to the director of the program, Marcin Pączkowski.",
  },
  {
    slug: "oases",
    title: "OASES",
    meta: "2026 / 4' / Difficulty - hard / wind ensemble",
    scoreSrc: "/scores/oases.pdf",
    audioSrc: "/audio/oases.mp3",
    programNotes: [
      "<i>OASES</i> was a piece made from the idea that I wanted to write a piece that was different from my other pieces. Coming from a very classical background, I think the music I tend to write is more within the convention that musicians tend to think in, but also to a point where it doesn't sound exactly like the piece before or after. I think that this piece is the weirdest one I've written, and I think it is a very fun, energetic and groovy piece. The thought behind the name is that this piece is the idea of stumbling upon a party of raucous fun in an oasis in the middle of a desert. This piece isn't meant to be taken too seriously, it's a mix of fun, jazz, grooves, and most of all joy."
    ],
    premiereNote: "<i>OASES</i> premiered and is dedicated to the 2025-2026 Eastlake High School Wind Ensemble under the direction of Luke Dahlberg.",
  },
  {
    slug: "imaginary-gardens",
    title: "Imaginary Gardens",
    meta: "2025 / 11' / Difficulty - medium / string quartet",
    scoreSrc: "/scores/imaginarygardens.pdf",
    movements: [
      { title: "I. Snowfall", audioSrc: "/audio/imaginarygardensmvmt1.mp3" },
      { title: "II. Clouds", audioSrc: "/audio/imaginarygardensmvmt2.mp3" },
      { title: "III. Petals", audioSrc: "/audio/imaginarygardensmvmt3.mp3" },
      { title: "IV. Canyons", audioSrc: "/audio/imaginarygardensmvmt4.mp3" },
    ],
    programNotes: [
      "<i>Imaginary Gardens</i> is a piece made for nature. It's made for those times when you are out in the world, and you are looking for a place to find peace, and you find yourself in a place that is so beautiful, and so serene, that you can just sit thereand find peace within a place that you feel could hold you forever. Taking my experiences of finding peace in the chaos that consumes me every day, I wrote four movements on what I found peace and ultimately, myself, in.",
      "Written for strings, I wanted to write a piece that was small on its instrumentation and could give a beautiful story. Throughout the movements, these lush chords express something different each time you hear them, and in each context you hear them, you can imagine a different place, a different time, and a different story.",
      `For me, each movement represents a different fictional scenario. <i>Movement 1: Snowfall</i>, was about being in a cabin watching the snow fall. <i>Movement 2: Clouds</i>, was about looking up at the sky and seeing the clouds drift by in a field. <i>Movement 3: Petals</i>, was focusing in on the small things, specifically a flower at the end of its season, and seeing the petals wilt away, and <i>Movement 4: Canyons</i>, was about gliding over a canyon, like the Grand Canyon, and seeing all the layers and history put within it. Each movement tells a different story, but all are to me connected and tell a story.`,
      "<i>Imaginary Gardens</i> is dedicated to Taly Turchin, who has been someone who helped me through writing this piece and many of my others, such as Saudade!"
    ],
    premiereNote: "<i>Imaginary Gardens</i> premiered with the Redmond Tech Orchestra on August 21, 2026, featuring Patrick Creighton, Bonnie You, Eleanor Mengel, and Catherine Yang."
  },
  {
    slug: "saudade",
    title: "Saudade",
    meta: "2025 / 12' / Difficulty - hard / solo oboe and full orchestra",
    scoreSrc: "/scores/saudade.pdf",
    audioSrc: "/audio/saudade.mp3",
    programNotes: [
      "<i>Saudade</i> is a piece that took me way too long to make. Over the course of one and a half years, I worked on and off this project and finally finished it in hopes of it being played at an Evening of Concertos '26, after the success of my previous work <i>Prabhata | Sandhya</i> for Evening of Concertos '25.",
      "Something I do when I write music is find pieces of music that really stood out to me and examine why they stood out, and a lot of that music that I find interesting are pieces that I have heard before or played before! With Saudade, there are a lot to mention: Franz Waxman's <i>Carmen Fantasie</i>, Dmitri Shostakovich's <i>Symphony No. 11</i>, Alexander Arutunian's <i>Trumpet Concerto</i>, and Joe Hisaishi's <i>One Summer Day</i>.",
      "Overall, <i>Saudade</i> is a piece of somberness, and a piece of sadness and anger. The word \u201cSaudade\u201d doesn't have a literal translation from Portuguese. From Wikipedia:",
      "<blockquote>Saudade[a] (English: /sa\u028a'd\u0251;d\u0259/;[2] plural saudades) is a word in Portuguese and Galician denoting an emotional state of melancholic or profoundly nostalgic longing for a beloved yet absent someone or something. It derives from the Latin word for solitude.[3] It is often associated with a repressed understanding that one might never encounter the object of longing ever again. It is a recollection of feelings, experiences, places, or events, often elusive, that cause a sense of separation from the exciting, pleasant, or joyous sensations they once caused.</blockquote>",
      "Imagine someone going through heartbreak, mental health issues, pain, or anything of the sort - that's what I was imagining when writing this.",
      "The style changes throughout the piece show the different stages of pain or heartbreak. The slow beginning marks the feeling of being alone or lonely. The faster 6/8 section expresses one's anger towards this pain and grief. The Dulce section represents a stage of acceptance, but then the fast 2/4 shows the relapse in the grief, but it comes out different. The section at m. 189 is a return to a feeling of loneliness, with there being little sound (\u00e0 la Shostakovich 11), drawing the listener back in. The return to Dulce shows the return of acceptance, but then this person gets lost in themselves again and loneliness returns. The cadenza represents one\u2019s pain and them letting it out. The anger returns, but in a way that feels refreshing and more comfortable, and it ends here. The end represents that not everything will end with a happy ending, or even a good end. The anger shouts at you in a way that keeps you from resolving to something that feels satisfying, at least more satisfying than a minor chord.",
      "Unlike most of my other pieces, <i>Saudade</i> doesn't represent much about my personal character or an experience I had, but more a personification of someone who's gone through heartbreak or grief. I can take bits and pieces of it and apply it to me, but this piece was an exploration of the sounds of the oboe and how to express a certain emotion, evoking some sort of beauty in the madness.",
      "I would like to thank Valerie Harris, Luke Dahlberg, and Cristina Stepin for their help and feedback in writing this piece and other pieces I have created. They have been a massive help and huge supporters in my compositions and various musical endeavors, and I can't express my appreciation enough!",
      "This piece is dedicated to Brooke Lin, who is an amazing oboe player, who offered to play this piece even in its early stages. I couldn't have done it without her.",
    ],
    premiereNote: "<i>Saudade</i> premiered at Eastlake High School's An Evening of Concertos 2026, conducted by Valerie Harris and played by soloist Brooke Lin.",
  },
  {
    slug: "prabhatasandhya",
    title: "Prabhata | Sandhya",
    meta: "2025 / 10' / Difficulty - medium / solo indian classical violin and full orchestra",
    scoreSrc: "/scores/prabhatasandhya.pdf",
    audioSrc: "/audio/prabhatasandhya.mp3",
    programNotes: [
      "<i>Prabhata | Sandhya</i> was made for the Evening of Concertos 2025 event at Eastlake High School, with Annika Karthik being the soloist! With the solo violin by Ganesh Rajagopalan, I was requested by Annika to make an orchestration for her. I would like to thank Taly Turchin for her help in writing the string parts. This piece is what I would consider to be a really cool showcase of a western style orchestration with an Indian-style solo violin!"],
    premiereNote: "<i>Prabhata | Sandhya</i> premiered at the Evening of Concertos 2025 event at Eastlake High School with soloist Annika Karthik.",
  },
  {
    slug: "wherethestarsshinebrightest",
    title: "Where the Stars Shine Brightest",
    meta: "2025 / 3' / Difficulty - medium / percussion ensemble",
    scoreSrc: "/scores/wherethestarsshinebrightest.pdf",
    audioSrc: "/audio/wherethestarsshinebrightest.mp3",
    programNotes: [
      "Where The Stars Shine Brightest is a piece that I wrote to encapsulate a poem I wrote. It reads:",
      "<blockquote>Where the stars shine brightest is where I'll be.<br>Gazing at them, I wonder how I lived without this quiet.<br>Just me, my thoughts, and the stars.<br>Oh, how beautiful they are.<br>They twinkle, dance, and smile at me.<br>Even though they are millions of miles away, I feel so close to them.<br>Will this peace ever reach where I am now?<br>In the middle of this ever-expanding town, I'll never reach it.<br>The stars are so dim here, it's like they don't exist.<br>And for many here; they don't.<br>The cold black sky stares at them, if they dared to leave when the sun doesn't shine.<br>But for me?<br>I can still see them.<br>Wanting.<br>Hoping.<br>Caring.<br>Where the stars shine brightest is where I'll be.<br>For remember,<br>We will all join them one day.</blockquote>",
      "My interpretation of the piece is related to mental health and the ideas of depression. I wrote the poem as a way to express how I was feeling during one of these times of hurt and sadness. The feeling of being \u201cout of time\u201d is something I took out of my experiences of feeling out of place, feeling insecure and hopeless. The \u201cstars\u201d in this piece represent hope, happiness, and comfort. They twinkle and gleam, shining through the \u201cdark\u201d black sky. As you might've guessed, the \u201cstars\u201d are represented by the higher pitched instruments, while the \u201cdark\u201d is represented through the lower pitched instruments.",],
    premiereNote: "<i>Where the Stars Shine Brightest</i> won WMEA Northlake Region Solo and Ensemble Composition Category in 2025.",
  },
];