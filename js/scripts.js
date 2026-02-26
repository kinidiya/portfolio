// Spotify Wrapped Portfolio Script

document.addEventListener('DOMContentLoaded', () => {
    // Portfolio Data
    const portfolioData = {
        skills: [
            { name: 'Python', proficiency: 95, category: 'Programming' },
            { name: 'LLMs & AI Agents', proficiency: 92, category: 'AI/ML' },
            { name: 'Machine Learning', proficiency: 90, category: 'AI/ML' },
            { name: 'Computer Vision', proficiency: 88, category: 'AI/ML' },
            { name: 'TensorFlow', proficiency: 87, category: 'ML Frameworks' },
            { name: 'PyTorch', proficiency: 85, category: 'ML Frameworks' },
            { name: 'C++', proficiency: 88, category: 'Programming' },
            { name: 'Reinforcement Learning', proficiency: 85, category: 'AI/ML' },
            { name: 'Docker & CI/CD', proficiency: 83, category: 'DevOps' },
            { name: 'OpenCV', proficiency: 86, category: 'Computer Vision' },
            { name: 'Distributed Systems', proficiency: 82, category: 'Software Engineering' },
            { name: 'Data Structures & Algorithms', proficiency: 90, category: 'Software Engineering' },
            { name: 'ROS', proficiency: 84, category: 'Robotics' },
            { name: 'RAG', proficiency: 88, category: 'AI/ML' },
            { name: 'Time-Series Analysis', proficiency: 87, category: 'Data Science' }
        ],
        projects: [
            { 
                name: 'Medical Liquid Dispenser', 
                description: 'CV & Robotics - Hand gesture recognition with MediaPipe', 
                impact: 95, 
                year: 'Feb 2025',
                details: [
                    '95% accuracy in hand gesture recognition using MediaPipe Hands',
                    'Real-time control of dispensing with hand signals',
                    '86% reliability in various lighting conditions'
                ]
            },
            { 
                name: 'Predicting FX Rates with Sentiment Analysis', 
                description: 'TensorFlow - LSTM & NLP for EUR/USD prediction', 
                impact: 94, 
                year: 'July 2024',
                details: [
                    'Time-series analysis and LSTMs for EUR/USD exchange rate prediction',
                    'NLP sentiment analysis from news articles',
                    'Improved forecast accuracy through emotional tone analysis'
                ]
            },
            { 
                name: 'ML Robot Tour', 
                description: 'Python & CV - Vision-based navigation with SLAM', 
                impact: 92, 
                year: 'Dec 2023',
                details: [
                    '22% better obstacle avoidance using SLAM and BFS',
                    'MBot Omni navigation via numerical cues',
                    'Trained KNN, Linear Classifier, NN on MNIST for vision-based detection'
                ]
            },
            { 
                name: 'Forward Kinematics', 
                description: 'JRDF/TF Graphs - Rigid-body robotics simulation', 
                impact: 91, 
                year: 'Nov 2025',
                details: [
                    'C++ pipeline modeling joint-link kinematics via homogeneous transformations',
                    'Time-aware frame graph with buffered transforms',
                    'LERP/SLERP interpolation for real-time pose computation'
                ]
            },
            { 
                name: 'Robot Interprocess Exchange', 
                description: 'Distributed Pub/Sub Messaging - Fault-tolerant framework', 
                impact: 90, 
                year: 'Oct 2025',
                details: [
                    'C++ publish/subscribe framework with dynamic registration',
                    'Low-latency topic streaming with TCP transport',
                    'Validated on Linux with POSIX sockets and concurrency primitives'
                ]
            },
            { 
                name: 'Click-to-Drive Remote Control', 
                description: 'MBot + RPLIDAR Drivers & GUI - Real-time teleoperation', 
                impact: 89, 
                year: 'Oct 2025',
                details: [
                    'C++ drivers and Python GUI for TCP streaming',
                    'Mutex-protected multithreaded pipelines',
                    'Bidirectional telemetry flow for latency remote control'
                ]
            },
            { 
                name: 'AlphaZero for Othello', 
                description: 'Reinforcement Learning & MCTS - Self-play training', 
                impact: 93, 
                year: 'Mar 2025',
                details: [
                    'PyTorch-based AlphaZero-inspired RL agent',
                    'Monte Carlo Tree Search (MCTS) for policy/value networks',
                    '37% win rate improvement against baseline minimax agents'
                ]
            }
        ],
        experiences: [
            { 
                title: 'Software & Artificial Intelligence Intern', 
                company: 'Lockheed Martin', 
                location: 'Remote',
                duration: 'May 2025 - Present', 
                impact: 'High',
                bulletPoints: [
                    'Built STELLA, a production LLM agent automating UCI message-to-entity mapping, cutting manual lookup 300% and saving ~$27K per employee',
                    'Architected and deployed enterprise AI pipelines from data ingestion through generation and integration',
                    'Implemented and evaluated temporal deep learning models on synthetic trajectory data',
                    'Built reproducible ML systems with Docker, Podman, and CI/CD in Agile teams',
                    'Developed low-latency Python WebSocket integration with a C++ OMS server',
                    'Won 2nd Place in the AI Intern Challenge for a production-ready AI system integrated into EO workflows'
                ]
            },
            { 
                title: 'Computational Linear Algebra Instructional Aide', 
                company: 'University of Michigan College of Engineering', 
                location: 'Ann Arbor, MI',
                duration: 'Jan 2024 - Present', 
                impact: 'High',
                bulletPoints: [
                    'Guided 200+ students in applying linear algebra and numerical methods to robotics and perception tasks, including LiDAR point-cloud processing and sensor modeling',
                    'Instructed with Python, Julia, eigendecomposition, and matrix modeling techniques',
                    'Taught core ML concepts such as regression and classification with hands-on robotics simulations, including control examples'
                ]
            },
            { 
                title: 'Computer Vision Research Assistant', 
                company: 'University of Michigan Robotics', 
                location: 'Ann Arbor, MI',
                duration: 'Jan 2024 - May 2024', 
                impact: 'High',
                bulletPoints: [
                    'Led autonomous development for 100+ vision-controlled robots across 2 courses, impacting 40+ graduate students',
                    'Applied mathematical operations to Python, OpenCV, and computer vision algorithms to facilitate distance learning',
                    'Enhanced the NVIDIA Jetson Nano\'s stereo vision implementation within the MBot ecosystem through ORB SLAM'
                ]
            },
            { 
                title: 'Data Science Intern', 
                company: 'Berry Consultants, LLC', 
                location: 'Austin, TX',
                duration: 'Jun 2022 - Aug 2022', 
                impact: 'Medium',
                bulletPoints: [
                    'Assisted in the FDA approval of 2 treatments by investigating the relationship between biomarkers of the gut biome and clinical outcomes for an innovative treatment for C-difficile infections through data analysis and the R programming language',
                    'Applied statistical modeling and exploratory data analysis to support regulatory and clinical decision making practices',
                    'Analyzed the optimal length of time a novel gene therapy would keep hemophilia patients at a safe level of clotting'
                ]
            }
        ],
        stats: {
            yearsExperience: 10,
            studentsTaught: 672,
            projectsCompleted: 15,
            robotsDeveloped: 100,
            researchPapers: 2,
            scholarships: 2
        },
        timeBreakdown: [
            { category: 'Robotics Development', years: 10, value: '10 years' },
            { category: 'AI/ML Research', years: 4, value: '4 years' },
            { category: 'Teaching/Mentoring', years: 7, value: '7 years' },
            { category: 'Software Engineering', years: 8, value: '8 years' }
        ],
        achievements: [
            { 
                icon: '🎓', 
                title: 'Double Major', 
                desc: 'CS & Robotics at UMich',
                details: 'I am pursuing a double major in Computer Science and Robotics at the University of Michigan College of Engineering. This unique combination allows me to bridge software engineering with physical systems, applying computational methods to solve real-world robotics challenges.'
            },
            { 
                icon: '🏆', 
                title: 'EV & Mobility Scholar', 
                desc: 'University of Michigan',
                details: 'Selected as an EV & Mobility Scholar at the University of Michigan, recognizing my commitment to advancing electric vehicle and mobility technologies. This scholarship supports students working at the intersection of engineering, sustainability, and transportation innovation.'
            },
            { 
                icon: '🌟', 
                title: 'Live Más Scholar', 
                desc: 'Taco Bell Foundation',
                details: 'Awarded the Live Más Scholarship by the Taco Bell Foundation, which supports students who are passionate about making a positive impact in their communities. This scholarship recognizes my dedication to STEM education and mentorship.'
            },
            { 
                icon: '🤖', 
                title: '10+ Years Robotics', 
                desc: 'Extensive experience',
                details: 'With over 10 years of hands-on experience in robotics, I have developed expertise in robot design, programming, and autonomous systems. This extensive background includes competitive robotics, research projects, and teaching robotics concepts to others.'
            },
            { 
                icon: '👨‍🏫', 
                title: '200 Students Taught', 
                desc: 'Instructional excellence',
                details: 'As a Computational Linear Algebra Instructional Aide at the University of Michigan, I have guided over 200 students in applying linear algebra and numerical methods to robotics and perception tasks. I teach Python, Julia, eigendecomposition, and matrix modeling techniques with hands-on robotics simulations.'
            },
            { 
                icon: '🔬', 
                title: 'Research Impact', 
                desc: '40+ graduate students',
                details: 'As a Computer Vision Research Assistant at the University of Michigan Robotics, I led autonomous development for 100+ vision-controlled robots across 2 courses, directly impacting 40+ graduate students. I enhanced the NVIDIA Jetson Nano\'s stereo vision implementation within the MBot ecosystem through ORB SLAM.'
            }
        ],
        genres: [
            { name: 'AI/ML', percentage: 30 },
            { name: 'Robotics', percentage: 25 },
            { name: 'Computer Vision', percentage: 18 },
            { name: 'Data Science', percentage: 12 },
            { name: 'Web Development', percentage: 8 },
            { name: 'Operating Systems', percentage: 7 }
        ],
        interests: [
            { name: 'Singing', icon: '🎤', description: 'Expressing creativity through music' },
            { name: 'Dancing', icon: '💃', description: 'Moving to the rhythm of life' },
            { name: 'Poker', icon: '🃏', description: 'Strategic thinking and calculated risks' },
            { name: 'STEM Advocacy in Government', icon: '🏛️', description: 'Promoting science and technology policy' }
        ]
    };

    // Initialize
    let currentSlide = 0;
    let totalSlides = document.querySelectorAll('.wrapped-slide').length;
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // Populate slides
    populateTopSkills();
    populateFloatingSkills();
    populateTopProjects();
    populateStats();
    populateExperiences();
    populateTimeBreakdown();
    populateAchievements();
    populateGenres();
    populateInterests();
    populateFinalStats();
    createNavDots();

    // Event Listeners
    document.getElementById('startBtn').addEventListener('click', () => {
        goToSlide(1);
    });

    document.getElementById('restartBtn').addEventListener('click', () => {
        goToSlide(0);
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            goToSlide(currentSlide + 1);
        }
    });

    // Slide navigation
    function goToSlide(slideIndex) {
        const slides = document.querySelectorAll('.wrapped-slide');
        slides[currentSlide].classList.remove('active');
        
        // Stop confetti if leaving final slide
        if (currentSlide === totalSlides - 1) {
            stopConfetti();
        }
        
        currentSlide = slideIndex;
        slides[currentSlide].classList.add('active');
        
        updateNavigation();
        
        // Start confetti on final slide
        if (slideIndex === totalSlides - 1) {
            setTimeout(() => {
                startConfetti();
            }, 500);
        }
    }

    function updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
        
        // Update nav dots
        const dots = document.querySelectorAll('.nav-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Populate functions
    function populateFloatingSkills() {
        const container = document.getElementById('floatingSkillsBackground');
        if (!container) return;
        
        // Get top 5 skills (sorted by proficiency)
        const topSkills = portfolioData.skills
            .sort((a, b) => b.proficiency - a.proficiency)
            .slice(0, 5)
            .map(skill => skill.name.toLowerCase());
        
        // Get all other skills (not in top 5)
        const otherSkills = portfolioData.skills
            .filter(skill => !topSkills.includes(skill.name.toLowerCase()))
            .map(skill => skill.name);
        
        // Additional skills from the user's list that aren't in portfolioData
        const additionalSkills = [
            'AI Planning', 'Prompt Engineering', 'Podman', 'REST APIs', 
            'Agile Dev', 'SQL', 'R', 'Java', 'Julia', 'Git', 'MATLAB', 
            'Linux', 'Flask', 'React', 'AWS', 'OOP C++'
        ];
        
        // Combine other skills with additional skills
        const allFloatingSkills = [...otherSkills, ...additionalSkills];
        
        // Create floating skill elements
        allFloatingSkills.forEach((skill, index) => {
            const skillElement = document.createElement('div');
            skillElement.className = 'floating-skill';
            skillElement.textContent = skill;
            
            // Random positioning
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = 15 + Math.random() * 10; // 15-25 seconds
            const size = 0.7 + Math.random() * 0.6; // 0.7-1.3em
            
            skillElement.style.left = `${left}%`;
            skillElement.style.top = `${top}%`;
            skillElement.style.animationDelay = `${delay}s`;
            skillElement.style.animationDuration = `${duration}s`;
            skillElement.style.fontSize = `${size}em`;
            skillElement.style.opacity = 0.15 + Math.random() * 0.15; // 0.15-0.3 opacity
            
            container.appendChild(skillElement);
        });
    }

    function populateTopSkills() {
        const list = document.getElementById('topSkillsList');
        const topSkills = portfolioData.skills
            .sort((a, b) => b.proficiency - a.proficiency)
            .slice(0, 5);
        
        list.innerHTML = topSkills.map((skill, index) => `
            <div class="top-item">
                <div class="item-rank">${index + 1}</div>
                <div class="item-content">
                    <div class="item-title">${skill.name}</div>
                    <div class="item-subtitle">${skill.category}</div>
                </div>
                <div class="item-stat">${skill.proficiency}%</div>
            </div>
        `).join('');
    }

    function populateTopProjects() {
        const list = document.getElementById('topProjectsList');
        const topProjects = portfolioData.projects
            .sort((a, b) => b.impact - a.impact)
            .slice(0, 7);
        
        list.innerHTML = topProjects.map((project, index) => `
            <div class="top-item">
                <div class="item-rank">${index + 1}</div>
                <div class="item-content">
                    <div class="item-title">${project.name}</div>
                    <div class="item-subtitle">${project.description} • ${project.year}</div>
                </div>
            </div>
        `).join('');
    }

    function populateStats() {
        const grid = document.getElementById('statsGrid');
        const stats = portfolioData.stats;
        
        grid.innerHTML = `
            <div class="stat-item">
                <div class="stat-number">${stats.yearsExperience}+</div>
                <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${stats.studentsTaught}</div>
                <div class="stat-label">Students Taught</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${stats.projectsCompleted}</div>
                <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${stats.robotsDeveloped}+</div>
                <div class="stat-label">Robots Developed</div>
            </div>
        `;
    }

    function populateExperiences() {
        const grid = document.getElementById('experiencesGrid');
        
        grid.innerHTML = portfolioData.experiences.map((exp, index) => `
            <div class="experience-card" data-experience-index="${index}">
                <div class="experience-title">${exp.title}</div>
                <div class="experience-company">${exp.company}${exp.location ? ` • ${exp.location}` : ''}</div>
                <div class="experience-duration">${exp.duration}</div>
                <div class="experience-popup" id="experience-popup-${index}">
                    <div class="popup-content">
                        <div class="popup-title">${exp.title}</div>
                        <div class="popup-company">${exp.company}${exp.location ? ` • ${exp.location}` : ''}</div>
                        <div class="popup-duration">${exp.duration}</div>
                        <ul class="popup-bullets">
                            ${exp.bulletPoints ? exp.bulletPoints.map(point => `<li>${point}</li>`).join('') : ''}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add hover event listeners
        portfolioData.experiences.forEach((exp, index) => {
            const card = document.querySelector(`[data-experience-index="${index}"]`);
            const popup = document.getElementById(`experience-popup-${index}`);
            
            if (card && popup) {
                // First column (index 0, 2) - popup to the right
                // Second column (index 1, 3) - popup to the left
                const isFirstColumn = index % 2 === 0;
                
                if (isFirstColumn) {
                    popup.classList.add('popup-right');
                } else {
                    popup.classList.add('popup-left');
                }
                
                card.addEventListener('mouseenter', () => {
                    popup.classList.add('visible');
                });
                
                card.addEventListener('mouseleave', () => {
                    popup.classList.remove('visible');
                });
            }
        });
    }

    function populateTimeBreakdown() {
        const container = document.getElementById('timeBreakdown');
        const totalYears = 20; // Total years of life
        
        container.innerHTML = portfolioData.timeBreakdown.map(item => {
            const percentage = (item.years / totalYears) * 100;
            return `
            <div class="time-item">
                <div class="time-label">${item.category}</div>
                <div class="time-bar-container">
                    <div class="time-bar" style="width: 0%" data-width="${percentage}">
                        ${Math.round(percentage)}%
                    </div>
                </div>
                <div class="time-value">${item.value}</div>
            </div>
        `;
        }).join('');
        
        // Animate bars when slide becomes active
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bars = entry.target.querySelectorAll('.time-bar');
                    bars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, 300);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        const timeSlide = document.querySelector('[data-slide="5"]');
        if (timeSlide) {
            observer.observe(timeSlide);
        }
    }

    function populateAchievements() {
        const list = document.getElementById('achievementsList');
        
        list.innerHTML = portfolioData.achievements.map((achievement, index) => `
            <button class="achievement-item achievement-button" data-achievement-index="${index}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-content">
                    <div class="achievement-title">${achievement.title}</div>
                    <div class="achievement-desc">${achievement.desc}</div>
                </div>
                <div class="achievement-arrow">→</div>
            </button>
        `).join('');
        
        // Add click handlers to achievement buttons
        list.querySelectorAll('.achievement-button').forEach(button => {
            button.addEventListener('click', () => {
                const index = parseInt(button.getAttribute('data-achievement-index'));
                const achievement = portfolioData.achievements[index];
                showAchievementDetails(achievement);
            });
        });
    }
    
    function showAchievementDetails(achievement) {
        // Open chatbot and send achievement details
        const chatbotWindow = document.getElementById('chatbotWindow');
        const chatbotMessages = document.getElementById('chatbotMessages');
        const chatbotInput = document.getElementById('chatbotInput');
        
        // Open chatbot if closed
        if (chatbotWindow && !chatbotWindow.classList.contains('active')) {
            document.getElementById('chatbotToggle').click();
        }
        
        // Wait for animation, then add message
        setTimeout(() => {
            if (chatbotMessages) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'chatbot-message bot-message';
                messageDiv.innerHTML = `
                    <div class="message-content">
                        <strong>${achievement.icon} ${achievement.title}</strong><br>
                        <em>${achievement.desc}</em><br><br>
                        ${achievement.details}
                    </div>
                `;
                chatbotMessages.appendChild(messageDiv);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        }, 300);
    }

    function populateGenres() {
        const grid = document.getElementById('genresGrid');
        
        grid.innerHTML = portfolioData.genres.map(genre => `
            <div class="genre-card">
                <div class="genre-name">${genre.name}</div>
                <div class="genre-percentage">${genre.percentage}%</div>
            </div>
        `).join('');
    }

    function populateInterests() {
        const grid = document.getElementById('interestsGrid');
        
        grid.innerHTML = portfolioData.interests.map(interest => `
            <div class="interest-card">
                <div class="interest-icon">${interest.icon}</div>
                <div class="interest-name">${interest.name}</div>
                <div class="interest-description">${interest.description}</div>
            </div>
        `).join('');
    }

    function populateFinalStats() {
        const stats = portfolioData.stats;
        
        // Animate numbers
        animateNumber('totalProjects', stats.projectsCompleted, 0, 2000);
        animateNumber('totalExperience', stats.yearsExperience, 0, 2000);
        animateNumber('totalStudents', stats.studentsTaught, 0, 2000);
    }

    // Confetti animation
    let confettiAnimationId = null;
    let confettiParticles = [];
    
    function startConfetti() {
        const canvas = document.getElementById('confettiCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Update canvas on resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        
        // Confetti colors
        const colors = ['#1DB954', '#1ed760', '#ffffff', '#191414', '#b3b3b3'];
        
        // Create confetti particles
        confettiParticles = [];
        const particleCount = 150;
        
        for (let i = 0; i < particleCount; i++) {
            confettiParticles.push({
                x: Math.random() * canvas.width,
                y: -Math.random() * canvas.height * 0.5, // Start above screen
                width: 8 + Math.random() * 6,
                height: 8 + Math.random() * 6,
                color: colors[Math.floor(Math.random() * colors.length)],
                speed: 2 + Math.random() * 3,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                wobble: Math.random() * 2,
                wobbleSpeed: Math.random() * 0.1
            });
        }
        
        // Animation function
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            confettiParticles.forEach((particle, index) => {
                // Update position
                particle.y += particle.speed;
                particle.x += Math.sin(particle.wobble) * 0.5;
                particle.wobble += particle.wobbleSpeed;
                particle.rotation += particle.rotationSpeed;
                
                // Reset if off screen
                if (particle.y > canvas.height + 50) {
                    particle.y = -50;
                    particle.x = Math.random() * canvas.width;
                }
                
                // Draw confetti piece
                ctx.save();
                ctx.translate(particle.x, particle.y);
                ctx.rotate((particle.rotation * Math.PI) / 180);
                ctx.fillStyle = particle.color;
                ctx.fillRect(-particle.width / 2, -particle.height / 2, particle.width, particle.height);
                ctx.restore();
            });
            
            confettiAnimationId = requestAnimationFrame(animate);
        }
        
        // Start animation
        animate();
    }
    
    function stopConfetti() {
        if (confettiAnimationId) {
            cancelAnimationFrame(confettiAnimationId);
            confettiAnimationId = null;
        }
        const canvas = document.getElementById('confettiCanvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        confettiParticles = [];
    }

    function animateNumber(elementId, target, start, duration) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const startTime = performance.now();
        const startValue = start;
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(startValue + (target - startValue) * progress);
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }
        
        // Start animation when final slide is visible
        const finalSlide = document.querySelector('[data-slide="8"]');
        if (finalSlide) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(update);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(finalSlide);
        }
    }

    function createNavDots() {
        const dotsContainer = document.getElementById('navDots');
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentSlide > 0) {
            goToSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
            goToSlide(currentSlide + 1);
        }
    });

    // Swipe navigation for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentSlide < totalSlides - 1) {
                goToSlide(currentSlide + 1);
            } else if (diff < 0 && currentSlide > 0) {
                goToSlide(currentSlide - 1);
            }
        }
    }

    // ============================================
    // CHATBOT FUNCTIONALITY
    // ============================================
    
    const chatbotData = {
        resume: {
            link: 'assets/img/SoFi Resume.pdf',
            text: 'Here\'s my resume!',
            download: true
        },
        linkedin: {
            link: 'https://www.linkedin.com/in/diya-kini/',
            text: 'Connect with me on LinkedIn!',
            download: false
        },
        github: {
            link: 'https://github.com/kinidiya',
            text: 'Check out my GitHub profile!',
            download: false
        },
        projects: {
            text: 'I have several exciting projects including Medical Liquid Dispenser, Predicting FX Rates with Sentiment Analysis, ML Robot Tour, Forward Kinematics, Robot Interprocess Exchange, Click-to-Drive Remote Control, and AlphaZero for Othello. Check out the Projects slide for more details!'
        },
        experiences: {
            'lockheed martin': {
                title: 'Software & Artificial Intelligence Intern',
                company: 'Lockheed Martin',
                location: 'Remote',
                duration: 'May 2025 - Present',
                details: [
                    'Built STELLA, a production LLM agent automating UCI message-to-entity mapping, cutting manual lookup 300% and saving ~$27K per employee',
                    'Architected and deployed enterprise AI pipelines from data ingestion through generation and integration',
                    'Implemented and evaluated temporal deep learning models on synthetic trajectory data',
                    'Built reproducible ML systems with Docker, Podman, and CI/CD in Agile teams',
                    'Developed low-latency Python WebSocket integration with a C++ OMS server',
                    'Won 2nd Place in the AI Intern Challenge for a production-ready AI system integrated into EO workflows'
                ]
            },
            'computational linear algebra': {
                title: 'Computational Linear Algebra Instructional Aide',
                company: 'University of Michigan College of Engineering',
                location: 'Ann Arbor, MI',
                duration: 'Jan 2024 - Present',
                details: [
                    'Guided 200+ students in applying linear algebra and numerical methods to robotics and perception tasks, including LiDAR point-cloud processing and sensor modeling',
                    'Instructed with Python, Julia, eigendecomposition, and matrix modeling techniques',
                    'Taught core ML concepts such as regression and classification with hands-on robotics simulations, including control examples'
                ]
            },
            'computer vision research': {
                title: 'Computer Vision Research Assistant',
                company: 'University of Michigan Robotics',
                location: 'Ann Arbor, MI',
                duration: 'Jan 2024 - May 2024',
                details: [
                    'Led autonomous development for 100+ vision-controlled robots across 2 courses, impacting 40+ graduate students',
                    'Applied mathematical operations to Python, OpenCV, and computer vision algorithms to facilitate distance learning',
                    'Enhanced the NVIDIA Jetson Nano\'s stereo vision implementation within the MBot ecosystem through ORB SLAM'
                ]
            },
            'berry consultants': {
                title: 'Data Science Intern',
                company: 'Berry Consultants, LLC',
                location: 'Austin, TX',
                duration: 'Jun 2022 - Aug 2022',
                details: [
                    'Assisted in the FDA approval of 2 treatments by investigating the relationship between biomarkers of the gut biome and clinical outcomes for an innovative treatment for C-difficile infections through data analysis and the R programming language',
                    'Applied statistical modeling and exploratory data analysis to support regulatory and clinical decision making practices',
                    'Analyzed the optimal length of time a novel gene therapy would keep hemophilia patients at a safe level of clotting'
                ]
            }
        },
        experience: {
            text: 'I have experience at Lockheed Martin as a Software & AI Intern, University of Michigan as a Computational Linear Algebra Instructional Aide and Computer Vision Research Assistant, and Berry Consultants as a Data Science Intern. Ask me about any specific company or role for more details!'
        },
        email: {
            text: 'You can reach me through LinkedIn or check my resume for contact information.'
        },
        contact: {
            text: 'Feel free to connect with me on LinkedIn at https://www.linkedin.com/in/diya-kini/ or check out my GitHub at https://github.com/kinidiya'
        }
    };

    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');

    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('active');
        });
    }

    if (chatbotClose) {
        chatbotClose.addEventListener('click', () => {
            chatbotWindow.classList.remove('active');
        });
    }

    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${isUser ? 'user-message' : 'bot-message'}`;
        messageDiv.innerHTML = `<div class="message-content">${text}</div>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function processMessage(message) {
        const lowerMessage = message.toLowerCase().trim();
        
        // Resume
        if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
            const data = chatbotData.resume;
            addMessage(`${data.text} <a href="${data.link}" target="_blank" class="link-button">View Resume</a>`, false);
            return;
        }
        
        // LinkedIn
        if (lowerMessage.includes('linkedin') || lowerMessage.includes('linked in')) {
            const data = chatbotData.linkedin;
            addMessage(`${data.text} <a href="${data.link}" target="_blank" class="link-button">Visit LinkedIn</a>`, false);
            return;
        }
        
        // GitHub
        if (lowerMessage.includes('github') || lowerMessage.includes('git hub') || lowerMessage.includes('code')) {
            const data = chatbotData.github;
            addMessage(`${data.text} <a href="${data.link}" target="_blank" class="link-button">Visit GitHub</a>`, false);
            return;
        }
        
        // Projects
        if (lowerMessage.includes('project')) {
            addMessage(chatbotData.projects.text, false);
            return;
        }
        
        // Specific Experience Questions
        let experienceMatched = false;
        for (const [key, experience] of Object.entries(chatbotData.experiences)) {
            const companyLower = experience.company.toLowerCase();
            const titleLower = experience.title.toLowerCase();
            
            // Check for company name variations
            if (lowerMessage.includes(key) || 
                lowerMessage.includes(companyLower) ||
                (companyLower.includes('lockheed') && lowerMessage.includes('lockheed')) ||
                (companyLower.includes('michigan') && lowerMessage.includes('michigan') && (lowerMessage.includes('linear') || lowerMessage.includes('algebra') || lowerMessage.includes('instructional'))) ||
                (companyLower.includes('michigan') && lowerMessage.includes('michigan') && (lowerMessage.includes('vision') || lowerMessage.includes('research'))) ||
                (companyLower.includes('berry') && lowerMessage.includes('berry'))) {
                let response = `<strong>${experience.title}</strong><br>`;
                response += `<strong>${experience.company}</strong> | ${experience.location}<br>`;
                response += `<em>${experience.duration}</em><br><br>`;
                response += '<strong>Key Responsibilities:</strong><ul style="margin: 0.5rem 0; padding-left: 1.5rem; list-style-type: disc;">';
                experience.details.forEach(detail => {
                    response += `<li style="margin: 0.5rem 0; line-height: 1.5;">${detail}</li>`;
                });
                response += '</ul>';
                addMessage(response, false);
                experienceMatched = true;
                return;
            }
            
            // Check for title keywords
            if (lowerMessage.includes(titleLower.split(' ')[0]) || 
                (titleLower.includes('software') && lowerMessage.includes('software') && lowerMessage.includes('ai')) ||
                (titleLower.includes('linear') && lowerMessage.includes('linear') && lowerMessage.includes('algebra')) ||
                (titleLower.includes('vision') && lowerMessage.includes('vision') && lowerMessage.includes('research')) ||
                (titleLower.includes('data science') && lowerMessage.includes('data science'))) {
                let response = `<strong>${experience.title}</strong><br>`;
                response += `<strong>${experience.company}</strong> | ${experience.location}<br>`;
                response += `<em>${experience.duration}</em><br><br>`;
                response += '<strong>Key Responsibilities:</strong><ul style="margin: 0.5rem 0; padding-left: 1.5rem; list-style-type: disc;">';
                experience.details.forEach(detail => {
                    response += `<li style="margin: 0.5rem 0; line-height: 1.5;">${detail}</li>`;
                });
                response += '</ul>';
                addMessage(response, false);
                experienceMatched = true;
                return;
            }
        }
        
        // General Experience
        if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('intern') || lowerMessage.includes('employment')) {
            if (!experienceMatched) {
                let response = chatbotData.experience.text + '<br><br><strong>My experiences include:</strong><ul style="margin: 0.5rem 0; padding-left: 1.5rem;">';
                response += '<li>Software & AI Intern at Lockheed Martin</li>';
                response += '<li>Computational Linear Algebra Instructional Aide at University of Michigan</li>';
                response += '<li>Computer Vision Research Assistant at University of Michigan</li>';
                response += '<li>Data Science Intern at Berry Consultants</li>';
                response += '</ul>';
                response += '<br>Ask me about any specific company or role for detailed information!';
                addMessage(response, false);
            }
            return;
        }
        
        // Email/Contact
        if (lowerMessage.includes('email') || lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
            addMessage(chatbotData.contact.text, false);
            return;
        }
        
        // Greeting
        if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
            addMessage('Hello! How can I help you today? You can ask me about my resume, LinkedIn, GitHub, projects, or experience.', false);
            return;
        }
        
        // Default response
        addMessage('I can help you with information about my resume, LinkedIn, GitHub, projects, or experience. What would you like to know?', false);
    }

    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        addMessage(message, true);
        chatbotInput.value = '';
        
        // Simulate thinking delay
        setTimeout(() => {
            processMessage(message);
        }, 500);
    }

    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }

    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Quick suggestion clicks
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('quick-suggestions') || e.target.closest('.quick-suggestions li')) {
            const suggestion = e.target.closest('.quick-suggestions li');
            if (suggestion) {
                const text = suggestion.textContent.trim();
                addMessage(text, true);
                setTimeout(() => {
                    processMessage(text);
                }, 500);
            }
        }
    });
});

