document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        {
            title: "Harry Potter",
            poster: "https://1.bp.blogspot.com/-39LiRTr5M5M/XudeNdR2eHI/AAAAAAAAAI0/FE50aQINzIwnB50AiJcXT2MfVAJZKmvYQCLcBGAsYHQ/s1600/HARRY%2BPOTTER.jpg",
            description: "The series was mainly produced by David Heyman, and stars Daniel Radcliffe, Rupert Grint, and Emma Watson as the three leading characters: Harry Potter, Ron Weasley, and Hermione Granger. Four directors worked on the series: Chris Columbus, Alfonso Cuarón, Mike Newell, and David Yates The film stars Daniel Radcliffe as Harry Potter, with Rupert Grint as Ron Weasley, and Emma Watson as Hermione Granger. Its story follows Harry's first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his formal wizarding education."
        },
        {
            title: "Dark",
            poster: "https://posterspy.com/wp-content/uploads/2021/09/Final3.jpg",
            description: "Dark is a German science fiction thriller television series co-created by the couple Baran bo Odar and Jantje Friese.It ran for three seasons from 2017 to 2020. The story follows the dysfunctional characters from the fictional town of Winden in Germany, as they pursue the truth in the aftermath of a child's disappearance. They follow connections between four estranged families to unravel a sinister time travel conspiracy that spans several generations. The series explores the existential implications of time and its effect on human nature and life. It features an ensemble cast led by Louis Hofmann."
        },
        {
            title: "Interstellar",
            poster: "https://i.pinimg.com/originals/0d/d8/34/0dd834fc765091af36a125ea9bcf8cc8.jpg",
            description: "Interstellar is about Earth’s last chance to find a habitable planet before a lack of resources causes the human race to go extinct. The film’s protagonist is Cooper (Matthew McConaughey), a former NASA pilot who is tasked with leading a mission through a wormhole to find a habitable planet in another galaxy. A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        },
        {
            title: "Dangal",
            poster: "https://3.bp.blogspot.com/-YqWHiUr3F5o/WF00T7t89zI/AAAAAAAATBU/oG4hDjVCco8QhdYNi7YbHsxlIIQ8DuEqQCLcB/s1600/Dangal-poster.jpg",
            description: "Mahavir Singh Phogat (Aamir Khan) is a former amateur wrestler and national champion based in Balali, a village in Haryana. He was forced by his father to give up the sport in order to obtain gainful employment. Dejected that he could not win a medal for his country, he vows that his unborn son will. Disappointed upon having four daughters, he gives up hope. But when his older daughters Geeta and Babita come home after beating up two boys in response to derogatory comments, he realises their potential to become wrestlers and begins coaching them."
        },
        {
            title: "Pathaan",
            poster: "https://filmfare.wwmindia.com/content/2022/dec/pathaan21669878743.jpg",
            description: "On August 5, 2019, India abolished Article 370, which gave a special status to the state of Jammu and Kashmir. The political move gained a lot of positive and negative reactions from the entire world. When Pakistan’s General Qadar heard the news, he started fuming with anger. Qadar was suffering from a terminal illness, and his doctor had told him that he had approximately three years to live. Qadar wanted to make the most of those three years, by waging war against India. He knew that his government wouldn’t let him execute such a plan, which is why he hired a mercenary group called Outfit X, infamously known for undertaking such missions"
        },
        {
            title: "Kalki 2898 AD",
            poster: "https://i0.wp.com/tellyflight.com/wp-content/uploads/2023/07/KALKI-2898.jpg?resize=847%2C1024&ssl=1",
            description: "Kalki 2898 AD takes us to a post-apocalyptic world, approximately 6000 years after the battle of Kurukshetra, where a dictator named Supreme Yaskin had control over natural resources like water and fresh air, and he made sure that the people of the world suffered. A facility called The Complex was created by Supreme Yaskin, and a commoner had to pay a huge price to get admission there. The setup resembled the conditions that prevail in first-world countries, where people overused resources and wasted them in the name of convenience while the rest of the world couldn’t even afford the basic necessities of life. A bounty hunter by the name of Bhairava, who lived in the city of Kashi, dreamt of entering The Complex one day and leading a life of privilege. But little did Bhairava know what fate had in store for him. So, let’s recap the events of Kalki 2898 AD and find out if Bhairava was able to enter The Complex."
        },
        {
            title: "RRR",
            poster: "https://www.cinemadevlugt.nl/wp-content/uploads/2022/10/rrr_poster_by_kanthi7_df60q75-fullview.jpeg",
            description: "RRR(subtitled onscreen as Roudram Ranam Rudhiram) is a 2022 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "ORANGE",
            poster: "https://2.bp.blogspot.com/_eewr1b1LpYA/TMJ5LxO1pbI/AAAAAAAAJvM/ZLcNP_xxMyc/s1600/ram_charan_teja_orange_telugu_movie_posters_05.jpg",
            description: "Orange is a 2015 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "VIKRAMARKUDU",
            poster: "https://m.media-amazon.com/images/M/MV5BY2FiODI1ZmYtMjkxYS00YzFhLWE3ODgtZWUxNzMyNDU3YWM4XkEyXkFqcGdeQXVyMTYyNjAzOTUx._V1_FMjpg_UX1000_.jpg",
            description: "Vikramarkudu is a 2007 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "ISHQ",
            poster: "https://wallpapercave.com/wp/wp7536326.jpg",
            description: "Ishq is a 2016 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "ANIMAL",
            poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieFSZNmYkBybumsiTC3gFtpB0kZGs5MhbrTdwxqHwz2J9neY6ASDZC6zjBBos1Qrf4eNjD_6VHCqTTCdwzV4yXXLgmItmNv0nqvf3mwUUu82wsB_zvGwoNN3bqov_XsqqPIHLul4fhk9dXs0MUg0k-QaB6HhV92Oa3X0fcQLGFY4Ukt5XHn0YQ1SrB/s1600/animal-movie-first-look-poster-ranbir-kapoor.jpg",
            description: "Animal is a 2023 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "ENDHUKANTE PREMANTA",
            poster: "http://4.bp.blogspot.com/-VCh-AeEr93E/T4r33ZdyynI/AAAAAAAAnqY/33uewNyOljw/s1600/Endukante+Premanta+Movie+Posters+Mycineworld+Com+(3).jpg",
            description: "Endhukante Premanta is a 2014 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "SAAHO",
            poster: "https://www.cinejosh.com/gallereys/movies/normal/sahoo_movie_new_poster_1206190641/sahoo_movie_new_poster_1206190641_01.jpg",
            description: "Saaho is a 2018 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "1917",
            poster: "https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089",
            description: "1917 is a Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "TITANIC",
            poster: "https://picfiles.alphacoders.com/140/thumb-1920-140026.jpg",
            description: "Titanic is a 1990 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "AVATAR",
            poster: "https://static.javatpoint.com/best/images/best-english-movies3.png",
            description: "Avatar is a 2006 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "WAR",
            poster: "https://wallpapercave.com/wp/wp7490940.jpg",
            description: "War is a 2018 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "LAGAAN",
            poster: "http://images.desimartini.com/media/uploads/lagaan_xlg.jpg",
            description: "Lagaan is a 2009 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "SANJU",
            poster: "https://english.cdn.zeenews.com/sites/default/files/2018/06/07/693101-sanjunargis.gif",
            description: "Sanju is a 2014 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "RAGUVARAN B.TECH",
            poster: "https://www.cinejosh.com/gallereys/movies/normal/raghuvaran_b_tech_posters_1112140644/raghuvaran_b_tech_posters_1112140644_014.jpg",
            description: "Raghuvaran B.tech is a 2012 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
        {
            title: "ROBO",
            poster: "https://www.cinejosh.com/gallereys/movies/normal/robo_movie_wallpapers/robo_movie_wallpapers_013.jpg",
            description: "ROBO is a 2022 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a historical fiction film about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj."
        },
    
    ];

    const movieList = document.getElementById('movie-list');
    const searchInput = document.getElementById('searchbar');
    const movieMain = document.getElementById('movie-main');
    const closeButton = document.querySelector('.close-btn');
    const movieTitle = document.getElementById('movie-title');
    const moviePoster = document.getElementById('movie-poster');
    const movieDescription = document.getElementById('movie-description');

    function renderMovies(filteredMovies) {
        movieList.innerHTML = '';
        filteredMovies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.className = 'movie-card';
            movieCard.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.description.substring(0, 100)}...</p>
                </div>
            `;
            movieCard.addEventListener('click', () => showModal(movie));
            movieList.appendChild(movieCard);
        });
    }

    function showModal(movie) {
        movieTitle.textContent = movie.title;
        moviePoster.src = movie.poster;
        movieDescription.textContent = movie.description;
        movieMain.style.display = 'flex';
        moviePoster.style.height='400px';
        moviePoster.style.width='450px'
    }

    function hideModal() {
        movieMain.style.display = 'none';
    }

    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
        renderMovies(filteredMovies);
    });

    closeButton.addEventListener('click', hideModal);
    window.addEventListener('click', (e) => {
        if (e.target ===movieMain) {
            hideModal();
        }
    });
    renderMovies(movies);
});
