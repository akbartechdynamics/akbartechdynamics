/*jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function() {
// Sample blog data
const blogPosts = [
    // Your blog data goes here
    {
      "id": "9",
      "title": "Meet Our Team of Experts Dedicated to Helping You Succeed. With Innovation at Our Core, We Provide Top-Notch Academic Support",
      "date": "Aug 26, 2024",
      "image": "assets/img/blog/9.jpg",
      "summary": "In today's fast-paced academic world, having the right support can make all the difference in achieving your goals. Whether you're tackling a challenging research paper, developing a complex project, or preparing for exams, expert guidance is crucial. Meet our team of experts dedicated to helping you succeed. With innovation at our core, we provide top-notch academic support that empowers you to excel. Discover how our innovative approach and expert team can elevate your academic journey.",
      "link": "blog9-details.html"
    },
    {
      "id": "8",
      "title": "Presenting Your Project with Confidence Starts with the Right Support. Let's Make It Happen!",
      "date": "Aug 23, 2024",
      "image": "assets/img/blog/8.jpg",
      "summary": "Presenting your project confidently can be a game-changer, whether in academics, business, or tech development. The success of your project hinges not only on the quality of your work but also on how effectively you present it. Presenting your project with confidence starts with the right support. Let’s make it happen!. With the right tools, guidance, and strategies, you can deliver a powerful presentation that highlights your hard work and expertise.",
      "link": "blog8-details.html"
    },
    {
      "id": "7",
      "title": "From Web Applications to Data Science Projects, We Offer Tailored Solutions for Every Academic Need. Discover Our Services!",
      "date": "Aug 22, 2024",
      "image": "assets/img/blog/7.jpg",
      "summary": "In today’s rapidly evolving academic landscape, students face a diverse range of challenges that require specialized skills and innovative solutions. From web applications to data science projects, we offer tailored solutions for every academic need. Discover our services and how we can help you succeed in your studies, no matter the complexity or field of study.",
      "link": "blog7-details.html"
    },
    {
      "id": "6",
      "title": "When You Realize Your Thesis Is Due Next Week... Don't Worry, We've Got Your Back!",
      "date": "Aug 21, 2024",
      "image": "assets/img/blog/6.png",
      "summary": "The realization that your thesis is due next week can be overwhelming. As the deadline looms, stress levels rise, and the pressure to produce a high-quality thesis in a short time can seem insurmountable. But don't worry, we've got your back! Whether you're just starting or need to refine your final draft, our expert support can help you meet your deadline and achieve the success you deserve.",
      "link": "blog6-details.html"
    },
    {
      "id": "5",
      "title": "Struggling with Your Thesis? Our Experts Provide Personalized Support to Ensure You Meet All Requirements. Get in Touch Today!",
      "date": "Aug 16, 2024",
      "image": "assets/img/blog/5.png",
      "summary": "Writing a thesis can be one of the most challenging tasks in your academic journey. It requires extensive research, critical thinking, and a clear, structured presentation of your findings. Struggling with your thesis? Our experts provide personalized support to ensure you meet all requirements. Get in touch today! Let's explore how personalized expert support can make the thesis-writing process smoother and more successful.",
      "link": "blog5-details.html"
    },
    {
      "id": "4",
      "title": "AI Isn't Just for Tech Giants. It's Here to Make Your Academic Journey Smoother.",
      "date": "Aug 15, 2024",
      "image": "assets/img/blog/4.png",
      "summary": "Artificial Intelligence (AI) and machine learning are often associated with tech giants and complex industries, but did you know they are also revolutionizing education? AI isn't just for tech giants. It's here to make your academic journey smoother. From personalized learning experiences to efficient project management, AI offers numerous benefits that can help students achieve their academic goals.",
      "link": "blog4-details.html"
    },
    {
      "id": "3",
      "title": "Did You Know? Our AI-Driven Solutions Make Project Completion a Breeze! From Data Analysis to Natural Language Processing, We've Got You Covered",
      "date": "Aug 14, 2024",
      "image": "assets/img/blog/3.png",
      "summary": "In today's fast-paced academic and professional environments, completing projects efficiently and effectively is crucial. Did you know? Our AI-driven solutions make project completion a breeze! From data analysis to natural language processing, we've got you covered. Let's explore how these cutting-edge technologies can transform the way you approach your projects and help you achieve outstanding results.",
      "link": "blog3-details.html"
    },
    {
      "id": "2",
      "title": "New Semester, New Projects! Let Us Help You Achieve Your Academic Goals with Customized Solutions",
      "date": "Aug 13, 2024",
      "image": "assets/img/blog/2.jpg",
      "summary": "As a new semester begins, students everywhere are gearing up for fresh challenges and exciting projects. At AkbarTech Dynamics, we understand the importance of staying ahead in the academic game. New semester, new projects! Let us help you achieve your academic goals with customized solutions. #Innovation #StudentLife #AkbarTechDynamics. Dive into the world of innovation and personalized academic support designed to make your student life more successful and fulfilling.",
      "link": "blog2-details.html"
    },
    {
      "id": "1",
      "title": "The Future of Academic Success with AkbarTech Dynamics",
      "date": "Aug 04, 2024",
      "image": "assets/img/blog/1.jpg",
      "summary": "In the fast-paced world of academia, students often face the challenge of keeping up with technological advancements and leveraging them effectively for their academic projects. Welcome to AkbarTech Dynamics! We're here to help you ace your academic projects with cutting-edge technology and personalized solutions. Let's innovate together and unlock your full potential.",
      "link": "blog1-details.html"
    }
  ];

  const postsPerPage = 4;
  let currentPage = 1;

  function renderBlogs() {
      const startIndex = (currentPage - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const paginatedPosts = blogPosts.slice(startIndex, endIndex);

      const blogContainer = document.getElementById('blog-posts');
      blogContainer.innerHTML = '';

      paginatedPosts.forEach(post => {
          const article = document.createElement('article');
          article.innerHTML = `
              <div class="post-img">
                  <img src="${post.image}" alt="${post.title}">
              </div>
              <h2 class="title"><a href="${post.link}">${post.title}</a></h2>
              <div class="meta-top">
              <ul>
              <li class="d-flex align-items-center"><i class="bi bi-person"></i> <a>Akbar pasha</a></li>
              <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a><time datetime="${post.date}">${post.date}</time></a></li>
              </ul>
              </div>
                  
              <div class="content">
                  <p>${post.summary}</p>
              </div>
              <div class="read-more">
              <a href="${post.link}">Read More</a>
              </div>
          `;
          blogContainer.appendChild(article);
      });

      renderPagination();
  }

  function renderPagination() {
      const pageCount = Math.ceil(blogPosts.length / postsPerPage);
      const paginationControls = document.getElementById('pagination-controls');
      paginationControls.innerHTML = '';

      if (pageCount <= 1) return; // No pagination if there's only one page

      const createPageLink = (page, text, className) => {
          const pageLink = document.createElement('a');
          pageLink.href = '#';
          pageLink.textContent = text;
          pageLink.dataset.page = page;
          pageLink.className = className || '';
          pageLink.addEventListener('click', function(event) {
              event.preventDefault();
              currentPage = page;
              renderBlogs();
          });
          return pageLink;
      };

      if (currentPage > 1) {
          const prevLink = createPageLink(currentPage - 1, 'Previous');
          paginationControls.appendChild(prevLink);
      }

      for (let i = 1; i <= pageCount; i++) {
          paginationControls.appendChild(createPageLink(i, i, i === currentPage ? 'active' : ''));
      }

      if (currentPage < pageCount) {
          const nextLink = createPageLink(currentPage + 1, 'Next');
          paginationControls.appendChild(nextLink);
      }
  }

  renderBlogs();
});