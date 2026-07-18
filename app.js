// Netflix Clone - App Controller
// Custom data store, UI flows, watchlist state management, and media player actions

// 1. Mock Database
const moviesData = [
  {
    id: "featured-1",
    title: "Stranger Things",
    type: "TV Show",
    year: "2026",
    rating: "16+",
    duration: "4 Seasons",
    matchScore: "98% Match",
    synopsis: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    backdrop: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    poster: "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    categories: ["trending", "scifi", "popular"],
    cast: ["Millie Bobby Brown", "Winona Ryder", "David Harbour", "Finn Wolfhard"],
    genres: ["Sci-Fi Drama", "Teen Sci-Fi", "Supernatural Mystery"]
  },
  {
    id: "movie-1",
    title: "Wednesday",
    type: "TV Show",
    year: "2022",
    rating: "16+",
    duration: "1 Season",
    matchScore: "95% Match",
    synopsis: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    backdrop: "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    poster: "https://image.tmdb.org/t/p/w500/avzWIWe6FWZi7r1qJeQZcDTv3Ex.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    categories: ["trending", "popular", "comedy"],
    cast: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome"],
    genres: ["Fantasy Comedy", "Mystery Thriller", "Teens"]
  },
  {
    id: "movie-2",
    title: "Squid Game",
    type: "TV Show",
    year: "2021",
    rating: "18+",
    duration: "1 Season",
    matchScore: "97% Match",
    synopsis: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    backdrop: "https://image.tmdb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg",
    poster: "https://image.tmdb.org/t/p/w500/iE21DSI3n5vI6v1W2HT4feKoM97.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    categories: ["trending", "action"],
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-jun"],
    genres: ["Suspense Thriller", "Action-Adventure", "Drama"]
  },
  {
    id: "movie-3",
    title: "The Witcher",
    type: "TV Show",
    year: "2023",
    rating: "18+",
    duration: "3 Seasons",
    matchScore: "92% Match",
    synopsis: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    backdrop: "https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg",
    poster: "the-witcher.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    categories: ["popular", "scifi"],
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
    genres: ["Epic Fantasy", "Action-Adventure", "Sword & Sorcery"]
  },
  {
    id: "movie-4",
    title: "Money Heist",
    type: "TV Show",
    year: "2021",
    rating: "18+",
    duration: "5 Seasons",
    matchScore: "89% Match",
    synopsis: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    backdrop: "https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    categories: ["popular", "action"],
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
    genres: ["Crime Thriller", "Suspenseful", "Heist Drama"]
  },
  {
    id: "movie-5",
    title: "Cobra Kai",
    type: "TV Show",
    year: "2025",
    rating: "16+",
    duration: "6 Seasons",
    matchScore: "94% Match",
    synopsis: "Decades after the tournament that changed their lives, the rivalry between Johnny Lawrence and Daniel LaRusso is reignited in this sequel series.",
    backdrop: "https://image.tmdb.org/t/p/original/5NrSIzfcBOFI9HRGV4nRYgMGhDU.jpg",
    poster: "cobra-kai.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    categories: ["comedy", "popular"],
    cast: ["Ralph Macchio", "William Zabka", "Xolo Maridueña"],
    genres: ["Action-Comedy", "Martial Arts", "Nostalgic"]
  },
  {
    id: "movie-6",
    title: "Black Mirror",
    type: "TV Show",
    year: "2023",
    rating: "18+",
    duration: "6 Seasons",
    matchScore: "99% Match",
    synopsis: "This sci-fi anthology series explores a twisted, high-tech near-future where humanity's greatest innovations and instincts collide.",
    backdrop: "black-mirror.jpg",
    poster: "black-mirror.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    categories: ["trending", "scifi"],
    cast: ["Aaron Paul", "Salma Hayek", "Josh Hartnett"],
    genres: ["Cynical Sci-Fi", "Anthology", "Satirical Drama"]
  },
  {
    id: "movie-7",
    title: "Peaky Blinders",
    type: "TV Show",
    year: "2022",
    rating: "18+",
    duration: "6 Seasons",
    matchScore: "91% Match",
    synopsis: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
    backdrop: "https://image.tmdb.org/t/p/original/dzq83RHwQcnP6WGJ6YkenIqeaa5.jpg",
    poster: "peaky-blinders.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    categories: ["action", "popular"],
    cast: ["Cillian Murphy", "Helen McCrory", "Paul Anderson"],
    genres: ["Period Drama", "Crime Saga", "Gritty"]
  },
  {
    id: "movie-8",
    title: "The Crown",
    type: "TV Show",
    year: "2023",
    rating: "16+",
    duration: "6 Seasons",
    matchScore: "96% Match",
    synopsis: "Based on historical events, this dramatization tells the story of Queen Elizabeth II and the political and personal events that shaped her reign.",
    backdrop: "https://image.tmdb.org/t/p/original/8VXhcrl5z2I1zEU9X3pkkNrZlD.jpg",
    poster: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    categories: ["popular"],
    cast: ["Imelda Staunton", "Jonathan Pryce", "Lesley Manville"],
    genres: ["Royal Drama", "Political Biography", "Period Piece"]
  },
  {
    id: "movie-9",
    title: "Narcos",
    type: "TV Show",
    year: "2017",
    rating: "18+",
    duration: "3 Seasons",
    matchScore: "93% Match",
    synopsis: "A gritty chronicle of the real-life rise and spread of cocaine drug cartels across the globe and the attendant efforts of law enforcement to meet them head on.",
    backdrop: "https://image.tmdb.org/t/p/original/y9ekzkPFmWSqUU3Kj0wHmYUM8qu.jpg",
    poster: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    categories: ["action"],
    cast: ["Wagner Moura", "Boyd Holbrook", "Pedro Pascal"],
    genres: ["Crime Saga", "Gritty Thriller", "Action"]
  },
  {
    id: "movie-10",
    title: "Breaking Bad",
    type: "TV Show",
    year: "2013",
    rating: "18+",
    duration: "5 Seasons",
    matchScore: "99% Match",
    synopsis: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    backdrop: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    poster: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    categories: ["trending"],
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    genres: ["Crime Drama", "Suspenseful", "Thriller"]
  },
  {
    id: "movie-11",
    title: "All of Us Are Dead",
    type: "TV Show",
    year: "2022",
    rating: "18+",
    duration: "1 Season",
    matchScore: "95% Match",
    synopsis: "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.",
    backdrop: "https://image.tmdb.org/t/p/original/oMWnpUUCeIqvTdP3IYZ0JnPdrmU.jpg",
    poster: "https://image.tmdb.org/t/p/w500/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    categories: ["trending", "action"],
    cast: ["Park Ji-hu", "Yoon Chan-young", "Cho Yi-hyun"],
    genres: ["K-Horror", "Zombie Fiction", "Survival Thriller"]
  },
  {
    id: "movie-12",
    title: "Lupin",
    type: "TV Show",
    year: "2023",
    rating: "16+",
    duration: "3 Parts",
    matchScore: "93% Match",
    synopsis: "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.",
    backdrop: "https://image.tmdb.org/t/p/original/aY7zv2pfk9H0QxaaL3PBjvalbKQ.jpg",
    poster: "https://image.tmdb.org/t/p/w500/h6Z2oogE4mJk2uffdtIlLhb0EHx.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    categories: ["popular", "action"],
    cast: ["Omar Sy", "Ludivine Sagnier", "Antoine Gouy"],
    genres: ["Heist Mystery", "Suspenseful Drama", "French"]
  },
  {
    id: "movie-13",
    title: "Lucifer",
    type: "TV Show",
    year: "2021",
    rating: "16+",
    duration: "6 Seasons",
    matchScore: "94% Match",
    synopsis: "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandons his throne and retires to Los Angeles, where he teams up with an LAPD detective.",
    backdrop: "https://image.tmdb.org/t/p/original/mAXOCbZzvmDa6PCh5dcIPOB51Qc.jpg",
    poster: "https://image.tmdb.org/t/p/w500/sHsIPzyHaIa1fx22Whfs3p5k670.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    categories: ["popular", "comedy"],
    cast: ["Tom Ellis", "Lauren German", "Kevin Alejandro"],
    genres: ["Urban Fantasy", "Crime Procedural", "Sardonic Comedy"]
  },
  {
    id: "movie-14",
    title: "Dark",
    type: "TV Show",
    year: "2020",
    rating: "18+",
    duration: "3 Seasons",
    matchScore: "98% Match",
    synopsis: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    backdrop: "https://image.tmdb.org/t/p/original/3jDXL4Xvj3AzDOF6UH1xeyHW8MH.jpg",
    poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    categories: ["scifi", "trending"],
    cast: ["Louis Hofmann", "Oliver Masucci", "Jördis Triebel"],
    genres: ["Time Travel Sci-Fi", "Mystery Thriller", "German Drama"]
  },
  {
    id: "movie-15",
    title: "Sense8",
    type: "TV Show",
    year: "2018",
    rating: "18+",
    duration: "2 Seasons",
    matchScore: "92% Match",
    synopsis: "Eight strangers around the world are telepathically connected, able to share lives, secrets, and lethal skills, as they flee a mysterious organization.",
    backdrop: "https://image.tmdb.org/t/p/original/blVLtsJUAw67DcYbEzlI5edEyCC.jpg",
    poster: "https://image.tmdb.org/t/p/w500/udRcqvws09h37sfDzzc6WVY8Rxt.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    categories: ["scifi"],
    cast: ["Tuppence Middleton", "Brian J. Smith", "Bae Doona"],
    genres: ["Mind-Bending Sci-Fi", "Character Drama", "Action-Adventure"]
  },
  {
    id: "movie-16",
    title: "The Umbrella Academy",
    type: "TV Show",
    year: "2024",
    rating: "16+",
    duration: "4 Seasons",
    matchScore: "94% Match",
    synopsis: "Reunited by their father's death, estranged siblings with extraordinary powers uncover shocking family secrets — and a looming threat to humanity.",
    backdrop: "https://image.tmdb.org/t/p/original/gHJhN9AJV4PmJ7YpLFa9ldDWuG8.jpg",
    poster: "https://image.tmdb.org/t/p/w500/qhcwrnnCnN8NE1N6XXKHFmveJR9.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    categories: ["scifi", "comedy"],
    cast: ["Elliot Page", "Tom Hopper", "David Castañeda"],
    genres: ["Superhero Fantasy", "Sci-Fi Action", "Dark Comedy"]
  },
  {
    id: "movie-17",
    title: "Sex Education",
    type: "TV Show",
    year: "2023",
    rating: "18+",
    duration: "4 Seasons",
    matchScore: "96% Match",
    synopsis: "Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mom. So rebel Maeve proposes a school sex-therapy clinic.",
    backdrop: "https://image.tmdb.org/t/p/original/u23G9KZregWHs1use6ir1fX27gl.jpg",
    poster: "https://image.tmdb.org/t/p/w500/bc3bmTdnoKcRuO9xdQKgAbB7Y9Z.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    categories: ["comedy"],
    cast: ["Asa Butterfield", "Gillian Anderson", "Ncuti Gatwa"],
    genres: ["Teen Comedy", "Heartfelt Drama", "British Humor"]
  },
  {
    id: "movie-18",
    title: "Emily in Paris",
    type: "TV Show",
    year: "2024",
    rating: "16+",
    duration: "4 Seasons",
    matchScore: "90% Match",
    synopsis: "When Chicago marketing executive Emily lands her dream job in Paris, she embraces her adventurous new life while juggling work, friends and romance.",
    backdrop: "https://image.tmdb.org/t/p/original/jXTZaHarR9TZiMoQwiQWsGYXqnS.jpg",
    poster: "https://image.tmdb.org/t/p/w500/3GGBl3mnuNDxczA1YJtkvgMnvQS.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    categories: ["comedy"],
    cast: ["Lily Collins", "Ashley Park", "Lucas Bravo"],
    genres: ["Rom-Com", "Fashion Drama", "Lighthearted Comedy"]
  },
  {
    id: "movie-19",
    title: "BoJack Horseman",
    type: "TV Show",
    year: "2020",
    rating: "18+",
    duration: "6 Seasons",
    matchScore: "99% Match",
    synopsis: "Meet the most beloved sitcom horse of the '90s... 20 years later. He's a curmudgeon with a heart of... not gold, but something like copper.",
    backdrop: "https://image.tmdb.org/t/p/original/qFYDJUIFh8zgEDy3EvnHwhgOl0S.jpg",
    poster: "https://image.tmdb.org/t/p/w500/6JFWzlChcGgLiIUo2COgNlWGFKy.jpg",
    trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    categories: ["comedy", "trending"],
    cast: ["Will Arnett", "Aaron Paul", "Amy Sedaris"],
    genres: ["Satirical Comedy", "Adult Animation", "Existential Drama"]
  }
];

// 2. Watchlist (My List) Handler using LocalStorage
let myList = JSON.parse(localStorage.getItem('netflix_mylist')) || [];

function saveMyList() {
  localStorage.setItem('netflix_mylist', JSON.stringify(myList));
}

function toggleMyList(movieId) {
  const index = myList.indexOf(movieId);
  if (index === -1) {
    myList.push(movieId);
  } else {
    myList.splice(index, 1);
  }
  saveMyList();
  renderAllRows();
  updateBillboardButton(movieId);
}

function updateBillboardButton(movieId) {
  const currentShowId = billboardShowIds[currentBillboardIndex];
  if (currentShowId === movieId) {
    const btn = document.getElementById('billboard-add-list-btn');
    if (btn) {
      const inList = myList.includes(movieId);
      btn.innerHTML = inList 
        ? `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg> <span>My List</span>`
        : `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> <span>My List</span>`;
    }
  }
}

// 3. User Auth (Mock Login State)
let isLoggedIn = localStorage.getItem('netflix_logged_in') === 'true';

// 4. Initialize Elements & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  setupAuthFlow();
  setupHeaderTransitions();
  setupMovieSearch();
  setupSliders();
  setupModals();
  setupCustomVideoPlayer();
  
  if (isLoggedIn) {
    showBrowsePage();
  } else {
    showLandingPage();
  }
});

// Auth System UI Actions
function setupAuthFlow() {
  const getStartedBtn = document.getElementById('get-started-btn');
  const loginModalBtn = document.getElementById('login-modal-submit');
  const signOutBtn = document.getElementById('signout-btn');
  const landingContainer = document.getElementById('landing-page');
  const mainAppContainer = document.getElementById('browse-page');
  const loginModal = document.getElementById('login-modal');
  const loginOverlay = document.getElementById('login-overlay');
  const landingInput = document.getElementById('landing-email-input');
  const loginEmailInput = document.getElementById('login-email');

  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      // Prefill email and open modal
      if (landingInput && landingInput.value.trim() !== '') {
        loginEmailInput.value = landingInput.value.trim();
      }
      loginModal.classList.add('active');
    });
  }

  if (loginOverlay) {
    loginOverlay.addEventListener('click', () => {
      loginModal.classList.remove('active');
    });
  }

  if (loginModalBtn) {
    loginModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Simple mock login validation
      const email = loginEmailInput.value.trim();
      const password = document.getElementById('login-password').value;
      if (email && password.length >= 4) {
        localStorage.setItem('netflix_logged_in', 'true');
        isLoggedIn = true;
        loginModal.classList.remove('active');
        showBrowsePage();
      } else {
        alert("Please enter a valid email and password (min 4 characters).");
      }
    });
  }

  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      localStorage.setItem('netflix_logged_in', 'false');
      isLoggedIn = false;
      showLandingPage();
    });
  }
}

function showLandingPage() {
  document.getElementById('landing-page').style.display = 'block';
  document.getElementById('browse-page').style.display = 'none';
  document.body.style.overflowY = 'auto';
}

function showBrowsePage() {
  document.getElementById('landing-page').style.display = 'none';
  document.getElementById('browse-page').style.display = 'block';
  document.body.style.overflowY = 'auto';
  
  // Render main screen contents
  setupBillboard();
  renderAllRows();
}

// Sticky Header Vibe
function setupHeaderTransitions() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
    }
  });
}

// 5. Billboard Slideshow Manager
let billboardInterval = null;
let currentBillboardIndex = 0;

const billboardShowIds = ["featured-1", "movie-3", "movie-10", "movie-6", "movie-14"];

function setupBillboard() {
  const shows = billboardShowIds
    .map(id => moviesData.find(m => m.id === id))
    .filter(Boolean);
  
  if (shows.length === 0) return;

  // Render indicator dots
  const indicatorsEl = document.getElementById('billboard-indicators');
  if (indicatorsEl) {
    indicatorsEl.innerHTML = shows.map((_, i) => 
      `<button class="billboard-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Show ${i + 1}"></button>`
    ).join('');
    
    // Click handler on dots
    indicatorsEl.addEventListener('click', (e) => {
      const dot = e.target.closest('.billboard-dot');
      if (!dot) return;
      const idx = parseInt(dot.dataset.index);
      if (idx === currentBillboardIndex) return;
      switchBillboard(shows, idx);
      resetBillboardTimer(shows);
    });
  }

  // Show the first slide
  applyBillboardSlide(shows[0]);

  // Start auto-rotation every 8 seconds
  resetBillboardTimer(shows);
}

function resetBillboardTimer(shows) {
  if (billboardInterval) clearInterval(billboardInterval);
  billboardInterval = setInterval(() => {
    const nextIndex = (currentBillboardIndex + 1) % shows.length;
    switchBillboard(shows, nextIndex);
  }, 8000);
}

function switchBillboard(shows, newIndex) {
  const contentEl = document.getElementById('billboard-content');
  if (!contentEl) return;

  // Fade out
  contentEl.classList.add('fade-out');
  contentEl.classList.remove('fade-in');

  setTimeout(() => {
    currentBillboardIndex = newIndex;
    const show = shows[newIndex];
    applyBillboardSlide(show);

    // Fade in
    contentEl.classList.remove('fade-out');
    contentEl.classList.add('fade-in');

    // Update indicator dots
    const dots = document.querySelectorAll('.billboard-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === newIndex);
    });
  }, 600); // matches the CSS fade-out duration
}

function applyBillboardSlide(movie) {
  const titleEl = document.getElementById('billboard-title');
  const descEl = document.getElementById('billboard-desc');
  const bgImageEl = document.getElementById('billboard-bg');
  const badgeEl = document.getElementById('billboard-badge');
  const playBtn = document.getElementById('billboard-play-btn');
  const infoBtn = document.getElementById('billboard-info-btn');
  const addListBtn = document.getElementById('billboard-add-list-btn');

  if (titleEl) titleEl.innerText = movie.title;
  if (descEl) descEl.innerText = movie.synopsis;
  if (bgImageEl) {
    bgImageEl.style.backgroundImage = `linear-gradient(to top, #141414 5%, rgba(20, 20, 20, 0) 40%), linear-gradient(to right, #141414 15%, rgba(20, 20, 20, 0) 60%), url('${movie.backdrop}')`;
  }
  if (badgeEl) {
    const typeLabel = movie.type === 'Movie' ? 'FILM' : 'SERIES';
    badgeEl.innerHTML = `<svg viewBox="0 0 24 24" class="n-logo" fill="#E50914"><path d="M4 2v20l8-10 8 10V2H4z"/></svg> ${typeLabel}`;
  }

  // Play Button
  if (playBtn) {
    const newPlayBtn = playBtn.cloneNode(true);
    playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
    newPlayBtn.addEventListener('click', () => openVideoPlayer(movie));
  }

  // Info Button
  if (infoBtn) {
    const newInfoBtn = infoBtn.cloneNode(true);
    infoBtn.parentNode.replaceChild(newInfoBtn, infoBtn);
    newInfoBtn.addEventListener('click', () => openDetailsModal(movie));
  }

  // Add List Button
  if (addListBtn) {
    const newAddListBtn = addListBtn.cloneNode(true);
    addListBtn.parentNode.replaceChild(newAddListBtn, addListBtn);
    
    const inList = myList.includes(movie.id);
    newAddListBtn.innerHTML = inList 
      ? `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg> <span>My List</span>`
      : `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> <span>My List</span>`;

    newAddListBtn.addEventListener('click', () => toggleMyList(movie.id));
  }
}

// 6. Dynamic Slider / Content Row Builder
function renderAllRows() {
  renderRow("Trending Now", "trending", "trending-row");
  renderRow("Popular on Netflix", "popular", "popular-row");
  renderRow("Action Thrillers", "action", "action-row");
  renderRow("Sci-Fi & Fantasy", "scifi", "scifi-row");
  renderRow("Comedy Movies", "comedy", "comedy-row");
  
  // Render watchlist
  renderWatchlistRow();
}

function renderRow(title, categoryTag, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let filteredMovies = moviesData.filter(movie => movie.categories.includes(categoryTag));
  
  if (filteredMovies.length === 0) return;
  
  // Ensure the list is long enough for seamless wrapping on wide monitors
  while (filteredMovies.length < 12) {
    filteredMovies = [...filteredMovies, ...filteredMovies];
  }
  
  const cardHtml = filteredMovies.map(movie => createMovieCard(movie)).join('');
  
  // Render three identical copies for seamless looping
  container.innerHTML = cardHtml + cardHtml + cardHtml;
  attachCardEvents(container);
  
  // Setup local scroller scroll listener
  initInfiniteScroll(container);
}

function initInfiniteScroll(container) {
  if (!container) return;
  
  if (container.dataset.hasScrollListener === 'true') {
    setTimeout(() => {
      container.scrollLeft = container.scrollWidth / 3;
    }, 50);
    return;
  }
  
  container.dataset.hasScrollListener = 'true';
  
  // Set initial scroll position to start of second copy
  setTimeout(() => {
    container.scrollLeft = container.scrollWidth / 3;
  }, 50);

  // Setup loop scroll triggers
  container.addEventListener('scroll', () => {
    const third = container.scrollWidth / 3;
    if (container.scrollLeft >= third * 2) {
      container.scrollLeft -= third;
    } else if (container.scrollLeft <= third - container.clientWidth) {
      container.scrollLeft += third;
    }
  });
}

function renderWatchlistRow() {
  const container = document.getElementById('mylist-row');
  const section = document.getElementById('mylist-section');
  if (!container || !section) return;

  if (myList.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  const filteredMovies = moviesData.filter(movie => myList.includes(movie.id));
  
  container.innerHTML = filteredMovies.map(movie => createMovieCard(movie)).join('');
  attachCardEvents(container);
}

function createMovieCard(movie) {
  const inList = myList.includes(movie.id);
  const heartIcon = inList 
    ? `<svg viewBox="0 0 24 24" class="in-list"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
    : `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;

  return `
    <div class="movie-card" data-movie-id="${movie.id}">
      <img src="${movie.backdrop}" alt="${movie.title}" class="card-thumbnail" loading="lazy">
      <div class="card-title-overlay">
        <span class="card-title-text">${movie.title}</span>
      </div>
      <div class="card-hover-details">
        <div class="card-action-buttons">
          <div class="btn-group-left">
            <button class="circle-btn play-card-btn" title="Play">
              <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
            </button>
            <button class="circle-btn list-card-btn" title="${inList ? 'Remove from List' : 'Add to List'}">
              ${inList ? '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>' : '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>'}
            </button>
            <button class="circle-btn like-card-btn" title="Like">
              ${heartIcon}
            </button>
          </div>
          <button class="circle-btn info-card-btn" title="More Info">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </button>
        </div>
        <div class="card-metadata">
          <span class="match-score">${movie.matchScore}</span>
          <span class="age-limit">${movie.rating}</span>
          <span class="duration-badge">${movie.duration}</span>
        </div>
        <div class="card-genres">
          ${movie.genres.map(g => `<span>${g}</span>`).join('<span class="dot">•</span>')}
        </div>
      </div>
    </div>
  `;
}

function attachCardEvents(parentContainer) {
  const cards = parentContainer.querySelectorAll('.movie-card');
  cards.forEach(card => {
    const movieId = card.getAttribute('data-movie-id');
    const movie = moviesData.find(m => m.id === movieId);
    if (!movie) return;

    // Action buttons inside hover cards
    const playBtn = card.querySelector('.play-card-btn');
    const listBtn = card.querySelector('.list-card-btn');
    const infoBtn = card.querySelector('.info-card-btn');
    const likeBtn = card.querySelector('.like-card-btn');

    if (playBtn) {
      playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openVideoPlayer(movie);
      });
    }
    if (listBtn) {
      listBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMyList(movie.id);
      });
    }
    if (likeBtn) {
      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        likeBtn.classList.toggle('liked');
      });
    }
    if (infoBtn) {
      infoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openDetailsModal(movie);
      });
    }

    // Direct card click opens details
    card.addEventListener('click', () => {
      openDetailsModal(movie);
    });
  });
}

// 7. Horizontal Scroller Navigation Trigger
function setupSliders() {
  const leftArrows = document.querySelectorAll('.slider-arrow.left');
  const rightArrows = document.querySelectorAll('.slider-arrow.right');

  leftArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const row = arrow.nextElementSibling;
      const scrollAmount = window.innerWidth * 0.75;
      row.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  });

  rightArrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const row = arrow.previousElementSibling;
      const scrollAmount = window.innerWidth * 0.75;
      row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
}

// 8. Search System (Dynamic Input filter)
function setupMovieSearch() {
  const searchInput = document.getElementById('search-input');
  const searchResultsGrid = document.getElementById('search-results-grid');
  const searchSection = document.getElementById('search-section');
  const browseMain = document.getElementById('browse-main');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length > 0) {
      searchSection.style.display = 'block';
      browseMain.style.display = 'none';
      
      const matched = moviesData.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.synopsis.toLowerCase().includes(query) ||
        movie.genres.some(g => g.toLowerCase().includes(query)) ||
        movie.cast.some(c => c.toLowerCase().includes(query))
      );

      if (matched.length > 0) {
        searchResultsGrid.innerHTML = matched.map(movie => createMovieCard(movie)).join('');
        attachCardEvents(searchResultsGrid);
      } else {
        searchResultsGrid.innerHTML = `<div class="no-results-msg">Your search for "${e.target.value}" did not find any matches.</div>`;
      }
    } else {
      searchSection.style.display = 'none';
      browseMain.style.display = 'block';
    }
  });
}

// 9. Details Modal System
function setupModals() {
  const modal = document.getElementById('details-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflowY = 'auto';
    });
    
    // Close on overlay tap
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflowY = 'auto';
      }
    });
  }
}

function openDetailsModal(movie) {
  const modal = document.getElementById('details-modal');
  if (!modal) return;

  const bgEl = document.getElementById('modal-billboard-bg');
  const titleEl = document.getElementById('modal-title');
  const matchEl = document.getElementById('modal-match');
  const yearEl = document.getElementById('modal-year');
  const ratingEl = document.getElementById('modal-rating');
  const durationEl = document.getElementById('modal-duration');
  const descEl = document.getElementById('modal-desc');
  const castListEl = document.getElementById('modal-cast-list');
  const genreListEl = document.getElementById('modal-genre-list');
  const similarGridEl = document.getElementById('modal-similar-grid');
  
  const playBtn = document.getElementById('modal-play-btn');
  const listBtn = document.getElementById('modal-list-btn');

  // Fill contents
  if (bgEl) {
    bgEl.style.backgroundImage = `linear-gradient(to top, #181818 5%, rgba(24, 24, 24, 0) 50%), linear-gradient(to right, #181818 10%, rgba(24, 24, 24, 0) 50%), url('${movie.backdrop}')`;
  }
  if (titleEl) titleEl.innerText = movie.title;
  if (matchEl) matchEl.innerText = movie.matchScore;
  if (yearEl) yearEl.innerText = movie.year;
  if (ratingEl) ratingEl.innerText = movie.rating;
  if (durationEl) durationEl.innerText = movie.duration;
  if (descEl) descEl.innerText = movie.synopsis;

  if (castListEl) castListEl.innerText = movie.cast.join(', ');
  if (genreListEl) genreListEl.innerText = movie.genres.join(', ');

  // Add event listener to Play trailer
  if (playBtn) {
    const newPlayBtn = playBtn.cloneNode(true);
    playBtn.parentNode.replaceChild(newPlayBtn, playBtn);
    newPlayBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      openVideoPlayer(movie);
    });
  }

  // Watchlist action
  if (listBtn) {
    const newListBtn = listBtn.cloneNode(true);
    listBtn.parentNode.replaceChild(newListBtn, listBtn);

    const updateListBtnText = () => {
      const inList = myList.includes(movie.id);
      newListBtn.innerHTML = inList
        ? `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg> <span>Remove from List</span>`
        : `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> <span>Add to List</span>`;
    };
    updateListBtnText();

    newListBtn.addEventListener('click', () => {
      toggleMyList(movie.id);
      updateListBtnText();
    });
  }

  // Similar Recommendations
  if (similarGridEl) {
    const similarMovies = moviesData
      .filter(m => m.id !== movie.id && m.genres.some(g => movie.genres.includes(g)))
      .slice(0, 4);

    // Fallback if no genre overlapping
    const displayList = similarMovies.length > 0 
      ? similarMovies 
      : moviesData.filter(m => m.id !== movie.id).slice(0, 4);

    similarGridEl.innerHTML = displayList.map(sim => `
      <div class="similar-card" data-sim-id="${sim.id}">
        <div class="sim-thumbnail-container">
          <img src="${sim.backdrop}" alt="${sim.title}">
          <span class="sim-duration">${sim.duration}</span>
          <button class="sim-play-icon">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
        <div class="sim-details">
          <div class="sim-meta">
            <span class="sim-match">${sim.matchScore}</span>
            <span class="sim-badge">${sim.rating}</span>
            <span class="sim-year">${sim.year}</span>
          </div>
          <div class="sim-synopsis">${sim.synopsis.slice(0, 85)}...</div>
        </div>
      </div>
    `).join('');

    // Attach click events to similar cards
    similarGridEl.querySelectorAll('.similar-card').forEach(card => {
      card.addEventListener('click', () => {
        const simId = card.getAttribute('data-sim-id');
        const simMovie = moviesData.find(m => m.id === simId);
        if (simMovie) {
          openDetailsModal(simMovie);
        }
      });
    });
  }

  modal.classList.add('active');
  document.body.style.overflowY = 'hidden';
}

// 10. Custom Video Player Controls
let videoEl = null;

function setupCustomVideoPlayer() {
  const player = document.getElementById('custom-video-player');
  const closeBtn = document.getElementById('player-back-btn');
  videoEl = document.getElementById('player-video');

  if (!player || !videoEl) return;

  // Back Button
  closeBtn.addEventListener('click', () => {
    videoEl.pause();
    videoEl.src = "";
    player.classList.remove('active');
    document.body.style.overflowY = 'auto';
  });

  // Play / Pause controls
  const playPauseBtn = document.getElementById('player-play-pause-btn');
  const playBtnSvg = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>`;
  const pauseBtnSvg = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;

  function togglePlay() {
    if (videoEl.paused) {
      videoEl.play();
      playPauseBtn.innerHTML = pauseBtnSvg;
    } else {
      videoEl.pause();
      playPauseBtn.innerHTML = playBtnSvg;
    }
  }

  playPauseBtn.addEventListener('click', togglePlay);
  videoEl.addEventListener('click', togglePlay);

  videoEl.addEventListener('play', () => {
    playPauseBtn.innerHTML = pauseBtnSvg;
  });

  videoEl.addEventListener('pause', () => {
    playPauseBtn.innerHTML = playBtnSvg;
  });

  // Timeline / Progress updates
  const timeline = document.getElementById('player-timeline');
  const progressFill = document.getElementById('player-progress-fill');
  const timeElapsed = document.getElementById('player-time-elapsed');
  const timeRemaining = document.getElementById('player-time-remaining');

  videoEl.addEventListener('timeupdate', () => {
    const percentage = (videoEl.currentTime / videoEl.duration) * 100;
    if (timeline) timeline.value = percentage || 0;
    if (progressFill) progressFill.style.width = `${percentage}%`;

    // Time calculations
    if (timeElapsed) timeElapsed.innerText = formatTime(videoEl.currentTime);
    if (timeRemaining && videoEl.duration) {
      timeRemaining.innerText = formatTime(videoEl.duration - videoEl.currentTime);
    }
  });

  // Scrubbing
  if (timeline) {
    timeline.addEventListener('input', (e) => {
      const percentage = e.target.value;
      const targetTime = (percentage / 100) * videoEl.duration;
      videoEl.currentTime = targetTime;
    });
  }

  // Volume / Mute
  const volumeBtn = document.getElementById('player-volume-btn');
  const volumeSlider = document.getElementById('player-volume-slider');
  
  const volUpSvg = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`;
  const volMutedSvg = `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;

  function toggleMute() {
    videoEl.muted = !videoEl.muted;
    if (videoEl.muted) {
      volumeBtn.innerHTML = volMutedSvg;
      volumeSlider.value = 0;
    } else {
      volumeBtn.innerHTML = volUpSvg;
      volumeSlider.value = videoEl.volume;
    }
  }

  volumeBtn.addEventListener('click', toggleMute);

  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      const vol = e.target.value;
      videoEl.volume = vol;
      videoEl.muted = vol === "0";
      if (videoEl.muted) {
        volumeBtn.innerHTML = volMutedSvg;
      } else {
        volumeBtn.innerHTML = volUpSvg;
      }
    });
  }

  // Speed adjustments
  const speedBtn = document.getElementById('player-speed-btn');
  const speeds = [1, 1.25, 1.5, 2, 0.75];
  let currentSpeedIdx = 0;

  if (speedBtn) {
    speedBtn.addEventListener('click', () => {
      currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
      const speed = speeds[currentSpeedIdx];
      videoEl.playbackRate = speed;
      speedBtn.innerText = `${speed}x`;
    });
  }

  // Fullscreen
  const fullscreenBtn = document.getElementById('player-fullscreen-btn');
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        player.requestFullscreen().catch(err => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Double tap to jump 10 seconds (or standard controls keybinds)
  document.addEventListener('keydown', (e) => {
    if (!player.classList.contains('active')) return;

    if (e.key === ' ' || e.key === 'k') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'ArrowRight' || e.key === 'l') {
      videoEl.currentTime = Math.min(videoEl.currentTime + 10, videoEl.duration);
    } else if (e.key === 'ArrowLeft' || e.key === 'j') {
      videoEl.currentTime = Math.max(videoEl.currentTime - 10, 0);
    } else if (e.key === 'm') {
      toggleMute();
    } else if (e.key === 'f') {
      fullscreenBtn.click();
    }
  });

  // Hide/Show Controls Overlay on mouse move
  let controlsTimeout;
  const controlsOverlay = document.querySelector('.player-controls-overlay');
  
  if (controlsOverlay) {
    player.addEventListener('mousemove', () => {
      controlsOverlay.style.opacity = '1';
      player.style.cursor = 'default';
      clearTimeout(controlsTimeout);
      controlsTimeout = setTimeout(() => {
        if (!videoEl.paused) {
          controlsOverlay.style.opacity = '0';
          player.style.cursor = 'none';
        }
      }, 3000);
    });
  }
}

function openVideoPlayer(movie) {
  const player = document.getElementById('custom-video-player');
  const video = document.getElementById('player-video');
  const playerTitle = document.getElementById('player-movie-title');

  if (!player || !video) return;

  if (playerTitle) playerTitle.innerText = `${movie.title} - ${movie.type}`;
  video.src = movie.trailerUrl;
  video.play().then(() => {
    player.classList.add('active');
    document.body.style.overflowY = 'hidden';
  }).catch(err => {
    console.error("Playback failed:", err);
    // Fallback if browser blocks autoplay/source
    player.classList.add('active');
    document.body.style.overflowY = 'hidden';
  });
}

function formatTime(secs) {
  if (isNaN(secs)) return "00:00";
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = Math.floor(secs % 60);

  const formattedMin = minutes < 10 && hours > 0 ? `0${minutes}` : minutes;
  const formattedSec = seconds < 10 ? `0${seconds}` : seconds;

  if (hours > 0) {
    return `${hours}:${formattedMin}:${formattedSec}`;
  }
  return `${formattedMin}:${formattedSec}`;
}
