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
      "The Narrows as a piece is something I've wanted to write but never knew how to. Conceptually, I knew that my time at Zion National Park was something that I would love to write about, but putting it into practice, I never knew how to do it in a way that felt fresh, new, while also telling the story that I wanted to tell. I wanted to write about what I felt walking in the Narrows, in Zion, on the Riverwalk, and the ultimate awe and wonder that one could feel experiencing Zion for the first time.",
      "If I could say one thing about The Narrows, it would be this that it's a piece about renewal. I wrote it out of an experience I needed, an experience of resetting and forgetting about life for a little bit. This piece is for the wanderers who struggle to find rest, whether physical or mental, and for the dreamers, because I understand what it means to dream."
    ],
    premiereNote: "This piece placed second at WMEA State Solo and Ensemble Composition Category in 2026.",
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
      "Imaginary Gardens is a piece made for nature. It's made for those times when you are out in the world, and you are looking for a place to find peace, and you find yourself in a place that is so beautiful, and so serene, that you can just sit thereand find peace within a place that you feel could hold you forever. Taking my experiences of finding peace in the chaos that consumes me every day, I wrote four movements on what I found peace and ultimately, myself, in.",
      "Written for strings, I wanted to write a piece that was small on its instrumentation and could give a beautiful story. Throughout the movements, these lush chords express something different each time you hear them, and in each context you hear them, you can imagine a different place, a different time, and a different story.",
      `For me, each movement represents a different fictional scenario. <i>Movement 1: Snowfall</i>, was about being in a cabin watching the snow fall. <i>Movement 2: Clouds</i>, was about looking up at the sky and seeing the clouds drift by in a field. <i>Movement 3: Petals</i>, was focusing in on the small things, specifically a flower at the end of its season, and seeing the petals wilt away, and <i>Movement 4: Canyons</i>, was about gliding over a canyon, like the Grand Canyon, and seeing all the layers and history put within it. Each movement tells a different story, but all are to me connected and tell a story.`,
      "Imaginary Gardens is dedicated to Taly Turchin, who has been someone who helped me through writing this piece and many of my others, such as Saudade!"
    ],
    premiereNote: "This piece premiered with the Redmond Tech Orchestra on August 21, 2026, featuring Patrick Creighton, Bonnie You, Eleanor Mengel, and Catherine Yang."
  },
  {
    slug: "saudade",
    title: "Saudade",
    meta: "2025 / 12' / Difficulty - hard / solo oboe and full orchestra",
    scoreSrc: "/scores/saudade.pdf",
    audioSrc: "/audio/saudade.mp3",
    programNotes: [
      "Saudade is a piece that took me way too long to make. Over the course of one and a half years, I worked on and off this project and finally finished it in hopes of it being played at an Evening of Concertos '26, after the success of my previous work <i>Prabhata | Sandhya</i> for Evening of Concertos '25.",
      "Something I do when I write music is find pieces of music that really stood out to me and examine why they stood out, and a lot of that music that I find interesting are pieces that I have heard before or played before! With Saudade, there are a lot to mention: Franz Waxman's <i>Carmen Fantasie</i>, Dmitri Shostakovich's <i>Symphony No. 11</i>, Alexander Arutunian's <i>Trumpet Concerto</i>, and Joe Hisaishi's <i>One Summer Day</i>.",
      "Overall, Saudade is a piece of somberness, and a piece of sadness and anger. The word \u201cSaudade\u201d doesn't have a literal translation from Portuguese. From Wikipedia:",
      "<blockquote>Saudade[a] (English: /sa\u028a'd\u0251;d\u0259/;[2] plural saudades) is a word in Portuguese and Galician denoting an emotional state of melancholic or profoundly nostalgic longing for a beloved yet absent someone or something. It derives from the Latin word for solitude.[3] It is often associated with a repressed understanding that one might never encounter the object of longing ever again. It is a recollection of feelings, experiences, places, or events, often elusive, that cause a sense of separation from the exciting, pleasant, or joyous sensations they once caused.</blockquote>",
      "Imagine someone going through heartbreak, mental health issues, pain, or anything of the sort - that's what I was imagining when writing this.",
      "The style changes throughout the piece show the different stages of pain or heartbreak. The slow beginning marks the feeling of being alone or lonely. The faster 6/8 section expresses one's anger towards this pain and grief. The Dulce section represents a stage of acceptance, but then the fast 2/4 shows the relapse in the grief, but it comes out different. The section at m. 189 is a return to a feeling of loneliness, with there being little sound (\u00e0 la Shostakovich 11), drawing the listener back in. The return to Dulce shows the return of acceptance, but then this person gets lost in themselves again and loneliness returns. The cadenza represents one\u2019s pain and them letting it out. The anger returns, but in a way that feels refreshing and more comfortable, and it ends here. The end represents that not everything will end with a happy ending, or even a good end. The anger shouts at you in a way that keeps you from resolving to something that feels satisfying, at least more satisfying than a minor chord.",
      "Unlike most of my other pieces, Saudade doesn't represent much about my personal character or an experience I had, but more a personification of someone who's gone through heartbreak or grief. I can take bits and pieces of it and apply it to me, but this piece was an exploration of the sounds of the oboe and how to express a certain emotion, evoking some sort of beauty in the madness.",
      "I would like to thank Valerie Harris, Luke Dahlberg, and Cristina Stepin for their help and feedback in writing this piece and other pieces I have created. They have been a massive help and huge supporters in my compositions and various musical endeavors, and I can't express my appreciation enough!",
      "This piece is dedicated to Brooke Lin, who is an amazing oboe player, who offered to play this piece even in its early stages. I couldn't have done it without her.",
    ],
    premiereNote: "This piece premiered at Eastlake High School's An Evening of Concertos 2026, conducted by Valerie Harris and played by soloist Brooke Lin.",
  },
  
];