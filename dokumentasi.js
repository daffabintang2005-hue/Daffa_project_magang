// Dokumentasi Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const dokumentasiItems = document.querySelectorAll('.dokumentasi-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide items based on filter
            dokumentasiItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Create additional items (simulating loading more)
            const dokumentasiGrid = document.querySelector('.dokumentasi-grid');
            
            // Simulate loading with timeout
            this.innerHTML = 'Memuat...';
            this.disabled = true;
            
            setTimeout(() => {
                // Add more items (in a real app, this would be an API call)
                const newItems = [
                    {
                        category: 'kegiatan',
                        image: 'dk9.jpeg',
                        title: '',
                        desc: '',
                        date: '9 februari 2026'
                    },
                    {
                        category: 'kegiatan',
                        image: 'dk10.jpeg',
                        title: '',
                        desc: '',
                        date: '9 Februari 2026'
                    },
                    {
                        category: 'pembangunan',
                        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80',
                        title: 'Perbaikan Sarana Ibadah',
                        desc: 'Kegiatan perbaikan masjid di Desa Saliguma',
                        date: '30 Juni 2023'
                    }
                ];
                
                // Add new items to the grid
                newItems.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'dokumentasi-item animate-on-scroll';
                    itemElement.setAttribute('data-category', item.category);
                    
                    itemElement.innerHTML = `
                        <div class="dokumentasi-image">
                            <img src="${item.image}" alt="${item.title}">
                            <div class="image-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>
                        <div class="dokumentasi-info">
                            <h4>${item.title}</h4>
                            <p>${item.desc}</p>
                            <span class="dok-date"><i class="far fa-calendar"></i> ${item.date}</span>
                        </div>
                    `;
                    
                    dokumentasiGrid.appendChild(itemElement);
                    
                    // Add click event for modal to new items
                    const newImage = itemElement.querySelector('.dokumentasi-image');
                    newImage.addEventListener('click', function() {
                        openModal(item.image, item.title, item.desc, item.date);
                    });
                });
                
                // Reset button
                this.innerHTML = 'Tampilkan Lebih Banyak';
                this.disabled = false;
                
                // Trigger scroll animation for new items
                const newAnimateItems = document.querySelectorAll('.animate-on-scroll');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                        }
                    });
                });
                
                newAnimateItems.forEach(item => observer.observe(item));
                
                // Hide button after all items loaded (simulation)
                if (dokumentasiItems.length >= 12) {
                    this.style.display = 'none';
                }
                
            }, 1500);
        });
    }
    
    // Modal functionality
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalDate = document.getElementById('modalDate');
    const closeModalBtn = document.querySelector('.close-modal');
    
    // Function to open modal
    function openModal(imageSrc, title, description, date) {
        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalTitle.textContent = title;
        modalDesc.textContent = description;
        modalDate.textContent = date;
        modal.style.display = 'flex';
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
    
    // Add click event to all dokumentasi images
    document.querySelectorAll('.dokumentasi-image').forEach(image => {
        image.addEventListener('click', function() {
            const item = this.closest('.dokumentasi-item');
            const imgSrc = this.querySelector('img').src;
            const title = item.querySelector('h4').textContent;
            const desc = item.querySelector('p').textContent;
            const date = item.querySelector('.dok-date').textContent;
            
            openModal(imgSrc, title, desc, date);
        });
    });
    
    // Close modal when clicking X
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Initialize animations for dokumentasi items
    const dokumentasiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.dokumentasi-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        dokumentasiObserver.observe(item);
    });
});