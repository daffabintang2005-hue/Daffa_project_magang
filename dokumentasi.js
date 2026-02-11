// Dokumentasi Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const dokumentasiItems = document.querySelectorAll('.dokumentasi-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {

            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
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
    
    const loadMoreBtn = document.getElementById('loadMore');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const dokumentasiGrid = document.querySelector('.dokumentasi-grid');
            
            this.innerHTML = 'Memuat...';
            this.disabled = true;
            
            setTimeout(() => {
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
                        title: 'Kegiatan Rapat',
                        desc: '',
                        date: '9 Februari 2026'
                    },
                    {
                        category: 'pembangunan',
                        image: 'dk11.jpeg',
                        title: 'Kegiatan Pagi',
                        desc: 'Melaksanakan Apel Pagi',
                        date: '9 Februari 2026'
                    }
                ];
                
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
                    
                    const newImage = itemElement.querySelector('.dokumentasi-image');
                    newImage.addEventListener('click', function() {
                        openModal(item.image, item.title, item.desc, item.date);
                    });
                });
                
                this.innerHTML = 'Tampilkan Lebih Banyak';
                this.disabled = false;
                
                const newAnimateItems = document.querySelectorAll('.animate-on-scroll');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                        }
                    });
                });
                
                newAnimateItems.forEach(item => observer.observe(item));
                
                if (dokumentasiItems.length >= 12) {
                    this.style.display = 'none';
                }
                
            }, 1500);
        });
    }

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalDate = document.getElementById('modalDate');
    const closeModalBtn = document.querySelector('.close-modal');
    
    function openModal(imageSrc, title, description, date) {
        modalImage.src = imageSrc;
        modalImage.alt = title;
        modalTitle.textContent = title;
        modalDesc.textContent = description;
        modalDate.textContent = date;
        modal.style.display = 'flex';
        
        document.body.style.overflow = 'hidden';
    }

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
    
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
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