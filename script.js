/*jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function() {
// Sample blog data
const blogPosts = [
    // Your blog data goes here
    {
      "id": "20",
      "title": "Data Science Made Easy with Our Expert Guidance. Let's Make Data Work for You!",
      "date": "Sep 11, 2024",
      "image": "assets/img/blog/20.png",
      "summary": "Data science is transforming the way we approach problems, make decisions, and drive innovation across industries. However, diving into data science can seem daunting, especially if you’re new to the field or managing a complex project. That’s where we come in. Data science made easy with our expert guidance. Let's make data work for you! With our tailored support and experienced team, we can help you navigate the complexities of data science and unlock its full potential for your academic or professional needs.",
      "link": "blog20-details.html"
    },
    {
      "id": "19",
      "title": "From Ideation to Execution, Our Data Science Experts Are Here to Assist You at Every Step of Your Project",
      "date": "Sep 10, 2024",
      "image": "assets/img/blog/19.png",
      "summary": "Data science projects are complex endeavors that require expertise, strategic planning, and meticulous execution. Whether you’re a student tackling a research project, a professional looking to harness the power of data, or an organization aiming to drive insights from your data, having the right support is crucial. From ideation to execution, our data science experts are here to assist you at every step of your project. With our comprehensive support, you can navigate the complexities of data science with confidence and achieve data-driven success.",
      "link": "blog19-details.html"
    },
    {
      "id": "18",
      "title": "Success Alert! See How We Helped a PhD Student Achieve Their Goals.",
      "date": "Sep 09, 2024",
      "image": "assets/img/blog/18.png",
      "summary": "Achieving a PhD is a monumental task that requires dedication, hard work, and the right support. For many students, the journey can be filled with challenges—from managing extensive research to maintaining focus during the writing process. But with the right tools and guidance, these obstacles can be overcome. Success alert! See how we helped a PhD student achieve their goals. Learn how our AI tools and personalized support can make all the difference in your academic journey.",
      "link": "blog18-details.html"
    },
    {
      "id": "17",
      "title": "Success Story: How We Helped a PhD Student Complete Their Dissertation with Our AI-Driven Tools. Read More!",
      "date": "Sep 06, 2024",
      "image": "assets/img/blog/17.png",
      "summary": "Completing a PhD dissertation is one of the most challenging academic endeavors. It requires extensive research, deep analysis, and clear, concise writing. For many students, the process can be overwhelming, leading to stress and delays. However, with the right tools and support, these challenges can be effectively managed. In this success story, we’ll share how we helped a PhD student complete their dissertation using our AI-driven tools. Read more to discover how our innovative solutions can help you achieve your academic goals.",
      "link": "blog17-details.html"
    },
    {
      "id": "16",
      "title": "Streamline Your Projects with Our Custom Web Applications.",
      "date": "Sep 05, 2024",
      "image": "assets/img/blog/16.png",
      "summary": "In the dynamic world of academia, managing multiple projects efficiently is often a challenging task. From organizing research to collaborating with peers and ensuring deadlines are met, the demands can be overwhelming. That’s where custom web applications come into play. Streamline your projects with our custom web applications. Our tailored solutions are designed to help you manage your academic tasks with ease, improving both your efficiency and performance.",
      "link": "blog16-details.html"
    },
    {
      "id": "15",
      "title": "Our Web Applications Are Designed to Streamline Your Academic Projects. Learn More About How We Can Help!",
      "date": "Sep 04, 2024",
      "image": "assets/img/blog/15.jpg",
      "summary": "In today’s fast-paced academic environment, managing projects efficiently is key to success. From research and data analysis to collaboration and presentation, students and professionals alike need tools that simplify these processes and enhance productivity. That’s where our web applications come in. Our web applications are designed to streamline your academic projects, making it easier for you to focus on what truly matters: achieving your academic goals. Learn more about how we can help you navigate your academic journey with ease and efficiency.",
      "link": "blog15-details.html"
    },
    {
      "id": "14",
      "title": "Relax and Recharge. We'll Handle the Heavy Lifting When It Comes to Your Projects",
      "date": "Sep 03, 2024",
      "image": "assets/img/blog/14.jpg",
      "summary": "In today’s fast-paced world, balancing work, studies, and personal life can be overwhelming. Whether you're a student juggling multiple assignments or a professional managing complex projects, the pressure to deliver high-quality work on time can take its toll. That’s why it’s important to take a step back, relax, and recharge. We'll handle the heavy lifting when it comes to your projects, ensuring that you achieve your goals without burning out. With our expert support, you can focus on what matters most while we take care of the details.",
      "link": "blog14-details.html"
    },
    {
      "id": "13",
      "title": "Take a Break and Recharge. Remember, We're Here to Support You When You're Ready to Get Back to Work",
      "date": "Sep 02, 2024",
      "image": "assets/img/blog/13.jpg",
      "summary": "In today’s fast-paced world, it’s easy to get caught up in the hustle and forget the importance of taking a break. Whether you’re a student juggling assignments or a professional managing deadlines, stepping back to recharge is crucial for maintaining both your productivity and well-being. Take a break and recharge. Remember, we're here to support you when you're ready to get back to work. When you return, refreshed and ready, we’ll be here to help you achieve your goals with renewed energy and focus.",
      "link": "blog13-details.html"
    },
    {
      "id": "12",
      "title": "Personalization Is Key! Learn How We Tailor Our Services to Fit Your Unique Needs",
      "date": "Aug 29, 2024",
      "image": "assets/img/blog/12.jpg",
      "summary": "In the realm of education and professional development, one size does not fit all. Every individual has unique strengths, challenges, and learning styles that must be taken into account to achieve the best outcomes. Personalization is key! Learn how we tailor our services to fit your unique needs and ensure that you receive the most effective support on your academic or professional journey.",
      "link": "blog12-details.html"
    },
    {
      "id": "11",
      "title": "Wondering How We Customize Solutions for You? Check Out Our Latest Blog Post on Personalized Academic Support",
      "date": "Aug 28, 2024",
      "image": "assets/img/blog/11.jpg",
      "summary": "Every student faces unique challenges throughout their academic journey. These challenges can range from understanding complex topics to managing time effectively while juggling multiple assignments. But with the right support tailored to your specific needs, these challenges can be transformed into stepping stones toward success. Wondering how we customize solutions for you? Check out our latest blog post on personalized academic support. Dive in to learn how our tailored approach ensures that you receive the precise guidance you need to achieve your academic goals.",
      "link": "blog11-details.html"
    },
    {
      "id": "10",
      "title": "Meet the Dream Team! We're Here to Turn Your Academic Challenges into Victories.",
      "date": "Aug 27, 2024",
      "image": "assets/img/blog/10.jpg",
      "summary": "In the ever-evolving academic world, challenges are inevitable. Whether it's tackling complex technical projects, mastering new concepts, or navigating research, the journey can be daunting. But you don't have to face these challenges alone. Meet the dream team! We're here to turn your academic challenges into victories. With our team of dedicated experts by your side, you can overcome any academic hurdle and achieve your goals with confidence.",
      "link": "blog10-details.html"
    },
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