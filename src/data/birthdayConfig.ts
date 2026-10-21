/**
 * =======================================================================
 * "A LITTLE WORLD FOR DISHA" — CENTRAL CONFIGURATION
 * =======================================================================
 * This file is the single source of truth for all content, photos, dates,
 * messages, and settings on Disha's birthday website.
 * 
 * To customize any text, swap photos, or add music links, edit this file!
 */

export interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  subcaption?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
  featured?: boolean;
}

export interface BookItem {
  id: string;
  title: string;
  subtitle: string;
  coverTone: string;
  accentColor: string;
  ribbonColor: string;
  description: string;
  reflection: string;
}

export interface GrowthStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface TrackItem {
  title: string;
  artist: string;
  url?: string;
  externalLink?: string;
  platform?: 'custom' | 'spotify' | 'youtube';
}

export interface BirthdayConfig {
  recipient: {
    name: string;
    fullName: string;
    role: string;
    displayBadge: string;
  };
  sender: {
    name: string;
    relationship: string;
    signature: string;
  };
  event: {
    dateISO: string; // ISO string with Asia/Kolkata timezone offset (+05:30)
    year: number;
    month: number;
    day: number;
    timezone: string;
    displayDate: string;
  };
  opening: {
    teaser: string;
    revealName: string;
    subtext: string;
    buttonText: string;
    audioNotice: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    dateLabel: string;
    letterIntro: string[];
    closingHinglish: string;
  };
  littleThings: {
    sectionBadge: string;
    heading: string;
    subheading: string;
    paragraphs: string[];
    hinglishHighlight: string;
    closingNote: string;
  };
  growth: {
    badge: string;
    title: string;
    subtitle: string;
    steps: GrowthStep[];
    closingWish: string;
  };
  books: {
    badge: string;
    title: string;
    subtitle: string;
    intro: string;
    personalNote: string;
    list: BookItem[];
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    photos: PhotoItem[];
    placeholderNotice: string;
  };
  letter: {
    badge: string;
    envelopeTitle: string;
    openButtonText: string;
    closeButtonText: string;
    salutation: string;
    paragraphs: string[];
    signOff: string;
    senderName: string;
  };
  countdown: {
    badge: string;
    heading: string;
    subtitle: string;
    duringBirthdayTitle: string;
    duringBirthdayMessage: string;
    afterBirthdayTitle: string;
    afterBirthdayMessage: string;
  };
  surprise: {
    badge: string;
    teaser: string;
    buttonText: string;
    title: string;
    letterContent: string[];
    closingWish: string;
  };
  closing: {
    line1: string;
    line2: string;
    birthdayWish: string;
    signature: string;
    replayButtonText: string;
  };
  music: {
    defaultAutoPlayMuted: boolean;
    helperText: string;
    emptyPlaylistMessage: string;
    playlist: TrackItem[];
  };
}

export const birthdayConfig: BirthdayConfig = {
  recipient: {
    name: 'Disha',
    fullName: 'Disha',
    role: 'Diduu',
    displayBadge: 'For My Diduu, Disha ♡',
  },

  sender: {
    name: 'Sahil',
    relationship: 'Brother',
    signature: 'Made with love for Diduu, by Sahil.',
  },

  event: {
    // Disha's birthday is October 22, 2026 at midnight Asia/Kolkata (UTC+5:30)
    dateISO: '2026-10-22T00:00:00+05:30',
    year: 2026,
    month: 10,
    day: 22,
    timezone: 'Asia/Kolkata',
    displayDate: '22 October 2026',
  },

  opening: {
    teaser: 'For my sister who notices the little things…',
    revealName: 'Disha ♡',
    subtext: 'A little birthday world created with love for my Diduu.',
    buttonText: 'Open Your Birthday Gift, Diduu',
    audioNotice: 'Turn on sound for a gentle experience',
  },

  hero: {
    badge: 'A Little World for My Diduu',
    title: 'Happy Birthday, Disha!',
    subtitle: 'To my wonderful Diduu — the girl who’s always learning, growing, and becoming.',
    dateLabel: '22 October 2026',
    letterIntro: [
      'Happy Birthday to the most wonderful Diduu! ♡',
      'Having you as my Diduu has genuinely been one of the sweetest blessings. I hope this new chapter of your life brings you closer to the things you’ve been working towards, introduces you to beautiful opportunities, and gives you plenty of reasons to smile.',
      'May you always have the courage to try, the patience to learn, and the determination to keep going even when things take time.',
      'And beyond all the achievements and big dreams, I hope life gives you those little moments that make everything feel a little lighter.',
    ],
    closingHinglish: 'Aaj ka din is all about celebrating you, my sister — exactly as you are.',
  },

  littleThings: {
    sectionBadge: 'The Memory That Matters Most',
    heading: 'Some people just understand.',
    subheading: 'Maybe the nicest thing about having you as my sister is knowing that sometimes, I don’t have to explain everything for you to understand.',
    paragraphs: [
      'One of the things I genuinely appreciate about having you as my Diduu is how you notice even the smallest changes in my face.',
      'Sometimes, when I’m feeling down or when my mood isn’t quite right, you seem to notice it without me having to explain everything.',
      'It’s a small thing, perhaps, but it means something deep. Because not everyone notices the little things. Not everyone recognizes when something feels different.',
      'And having a sister who can understand a little of what you’re feeling, even before you find the words, is genuinely special.',
      'So, on your birthday, I hope you receive some of that same understanding and care that you give so naturally. I hope you have people who notice when you’re tired, celebrate when you’re happy, listen when you need to talk, and remind you that you don’t have to be strong every single moment.',
    ],
    hinglishHighlight: '“Kabhi-kabhi, bina kuch explain kiye samajh jaana bhi apne aap mein ek beautiful thing hoti hai.”',
    closingNote: 'Thank you for being that kind of sister, Disha. For noticing the little things that mean more than you might realize. ♡',
  },

  growth: {
    badge: 'My Sister’s Quiet Strength',
    title: 'A Girl Who Keeps Becoming',
    subtitle: 'Celebrating my sister Disha — her ambition, her patience, and the way she keeps moving forward.',
    steps: [
      {
        number: '01',
        title: 'THE COURAGE TO BEGIN',
        tagline: 'Starting is already brave',
        description: 'You don’t need to know everything before you start. Sometimes, beginning is already a brave thing.',
        iconName: 'Sparkles',
      },
      {
        number: '02',
        title: 'ONE LITTLE STEP AT A TIME',
        tagline: 'Patience in every effort',
        description: 'Learning bit by bit is still learning. Every small effort becomes part of something bigger.',
        iconName: 'Footprints',
      },
      {
        number: '03',
        title: 'HER OWN WAY',
        tagline: 'Independent & determined',
        description: 'There’s something so inspiring about watching my sister want to achieve things through her own effort and discovering what she’s capable of along the way.',
        iconName: 'Compass',
      },
      {
        number: '04',
        title: 'KEEP MOVING FORWARD',
        tagline: 'Quiet progress is real',
        description: 'May my sister never forget that progress doesn’t always have to be loud to be real.',
        iconName: 'Sunrise',
      },
    ],
    closingWish: 'May this year bring my sister closer to the dreams she carries quietly, the goals she works towards, and the life she is building for herself.',
  },

  books: {
    badge: 'A Shared Literary Bond',
    title: 'Between the Pages',
    subtitle: 'Quiet evenings, thoughtful words, and the simple beauty of sharing stories with my sister.',
    intro: 'Inspired by the two books my sister asked to borrow — October Junction and Can We Be Strangers Again?',
    personalNote: 'It’s kind of nice when a story finds its way from one person to another. I lent these books to you, and now they have a tiny place in this birthday story, too. Maybe the nicest part of having a sister to share books with is that, for a little while, you get to share a whole world of words together.',
    list: [
      {
        id: 'october-junction',
        title: 'October Junction',
        subtitle: 'Of crossroads, autumn winds, and shared paths',
        coverTone: '#702D42',
        accentColor: '#C8A46B',
        ribbonColor: '#D6A0A6',
        description: 'A story that evokes the warmth of autumn, sudden intersections in life, and how two people cross paths at just the right chapter.',
        reflection: 'Stories like this remind us that life has an interesting way of bringing people into our lives at unexpected crossroads. A quiet evening with a thoughtful book is a reminder that some of the best moments are the gentle ones.',
      },
      {
        id: 'can-we-be-strangers-again',
        title: 'Can We Be Strangers Again?',
        subtitle: 'On memories, unspoken bonds, and lasting warmth',
        coverTone: '#38272B',
        accentColor: '#E5CA95',
        ribbonColor: '#C8A46B',
        description: 'An exploration of human connections, how memories linger, and the quiet understanding that holds people together.',
        reflection: 'Sometimes a book makes you reflect on the people who have left footprints in your world. It makes you value the bonds where you don’t need pretenses — where you can just be yourself.',
      },
    ],
  },

  gallery: {
    badge: 'Scrapbook of Memories',
    title: 'Little Moments, Big Feelings',
    subtitle: 'A quiet gallery celebrating my sister Disha — her smile, her warmth, and moments worth remembering.',
    photos: [
      {
        id: 'photo-1',
        url: 'images/disha_traditional_smile.jpg',
        caption: 'Little moments, lovely memories.',
        subcaption: 'A graceful festive moment caught in quiet joy.',
        aspect: 'portrait',
        featured: true,
      },
      {
        id: 'photo-2',
        url: 'images/disha_warm_night_light.jpg',
        caption: 'A frame for a day worth remembering.',
        subcaption: 'Warm golden light and that gentle, knowing smile.',
        aspect: 'square',
      },
      {
        id: 'photo-3',
        url: 'images/disha_radiant_laugh.jpg',
        caption: 'Your smile deserves its own page.',
        subcaption: 'Bright, cheerful, and bringing light into the room.',
        aspect: 'portrait',
      },
      {
        id: 'photo-4',
        url: 'images/disha_quiet_elegance.jpg',
        caption: 'Just a little reminder of how special you are.',
        subcaption: 'Poised, thoughtful, and walking her own path.',
        aspect: 'portrait',
      },
    ],
    placeholderNotice: 'To add more photos, place your image in public/images/ and add an entry in src/data/birthdayConfig.ts!',
  },

  letter: {
    badge: 'A Handwritten Keepsake',
    envelopeTitle: 'A Letter to My Diduu',
    openButtonText: 'Open your letter, Diduu',
    closeButtonText: 'Fold back letter',
    salutation: 'Dear Diduu,',
    paragraphs: [
      'Happy Birthday, my dear Diduu! ♡',
      'I wanted to make something a little different for your birthday, something that feels more personal than just sending a message and saying, “Happy Birthday, have a great year.”',
      'Because having a Diduu like you deserves more than just a few hurried words.',
      'One thing I really appreciate about you is the way you notice the little things. The smallest change on my face, the moments when my mood is a little off, or the times when I might not be feeling my best — you somehow notice.',
      'And honestly, having a sister who understands unspoken thoughts without needing an explanation is a quality I find genuinely special.',
      'Sometimes, you don’t need someone to solve everything. Sometimes, it just helps to have someone who notices, understands, or makes you feel like you don’t have to explain every little thing.',
      'I hope you know that this birthday, as your brother, I wish the same kind of care and understanding for you, too.',
      'I hope you keep chasing the things you want to achieve. I hope you keep learning, trying, figuring things out, and doing things in your own way. I hope you remember that even the smallest steps count, especially on the days when progress feels slow.',
      'You have your own journey, your own dreams, and your own pace. You don’t need to have everything figured out all at once.',
      'And while you’re busy becoming the person you want to be, I hope my Diduu always makes time for the softer parts of life — good songs, beautiful books, random laughter, little surprises, peaceful evenings, and people who make you feel understood.',
      'May this year bring you more happiness than you expect, opportunities you never saw coming, strength when things get difficult, and countless reasons to feel proud of yourself.',
      'Aur haan, life ko sirf achievements ki list mat bana dena. Thoda enjoy bhi karna, favourite songs sunna, achhi books padhna, aur chhoti-chhoti khushiyon ko bhi celebrate karna.',
      'You deserve to enjoy the journey, not just the destination.',
      'Thank you for being such a wonderful sister and Diduu who notices the little things. I hope your new year is filled with people who notice and appreciate the little things about you, too.',
      'Keep growing. Keep learning. Keep being yourself, Diduu.',
      'Happy Birthday once again, Disha.',
    ],
    signOff: 'With lots of love, blessings, and warmest wishes from your brother,',
    senderName: 'Sahil (Your Brother) ♡',
  },

  countdown: {
    badge: 'A Milestone for My Sister',
    heading: 'Some days deserve their own little countdown.',
    subtitle: 'Calculated precisely for October 22, 2026 in Asia/Kolkata timezone.',
    duringBirthdayTitle: 'It’s My Diduu’s Birthday! 🌸🎂',
    duringBirthdayMessage: 'Today is all about celebrating you, Diduu! May every moment today be filled with warmth, smiles, and sweet surprises.',
    afterBirthdayTitle: 'The Celebration Continues for My Diduu ♡',
    afterBirthdayMessage: 'Another beautiful chapter has begun. May this year hold countless reasons for my Diduu to smile and grow.',
  },

  surprise: {
    badge: 'A Little Secret',
    teaser: 'One last little thing, just for my Diduu…',
    buttonText: 'Open your surprise, Diduu ♡',
    title: 'A Brother’s Birthday Promise',
    letterContent: [
      'Dear Diduu,',
      'I hope you never forget how much there is to admire about you — not just in what you achieve, but in the way you keep trying, the way you notice people, and what a wonderful Diduu and sister you are.',
      'May your dreams find their way to you, one little step at a time.',
      'May life give you stories worth reading, songs worth remembering, people worth keeping close, and moments that make you smile long after they have passed.',
      'And whenever the world feels a little too much, I hope you remember that your brother is always rooting for you, and that you deserve the same understanding and kindness that you so naturally give to others.',
      'Keep becoming. Keep believing in yourself. And don’t forget to enjoy every beautiful little chapter along the way.',
    ],
    closingWish: 'Happy Birthday, my dear Diduu Disha. ♡',
  },

  closing: {
    line1: 'Your story is still unfolding, Diduu.',
    line2: 'May this next chapter be one of your most beautiful yet.',
    birthdayWish: 'Happy Birthday to My Diduu, Disha ♡',
    signature: 'Made with lots of love for Diduu, by Sahil.',
    replayButtonText: 'Read Your Birthday Story Again, Diduu',
  },

  music: {
    defaultAutoPlayMuted: false,
    helperText: 'A quiet, gentle melody to accompany your reading.',
    emptyPlaylistMessage: 'Some moments come with their own soundtrack. Add yours here.',
    playlist: [
      {
        title: 'Quiet Reflections (Ambient Piano)',
        artist: 'Gentle Acoustic Dream',
        platform: 'custom',
      },
      {
        title: 'Songs for Disha (Spotify Playlist)',
        artist: 'Curated by Sahil for his sister',
        externalLink: 'https://open.spotify.com',
        platform: 'spotify',
      },
      {
        title: 'Acoustic Birthday Melodies',
        artist: 'YouTube Music',
        externalLink: 'https://music.youtube.com',
        platform: 'youtube',
      },
    ],
  },
};
