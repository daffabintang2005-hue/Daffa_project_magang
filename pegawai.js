
document.addEventListener('DOMContentLoaded', function() {

    const pegawaiData = [
        {
            id: 1,
            nama: "HIJON, S.Pd.SD",
            pangkat: "Pembina Tk I",
            golongan: "IV/b",
            nip: "19700207 199211 1 001",
            jabatan: "Camat"
        },
        {
            id: 2,
            nama: "YUSTINUS LALAOGOK, S.Pd.SD",
            pangkat: "Pembina",
            golongan: "IV/a",
            nip: "19691010 199109 1 001",
            jabatan: "Sekretaris Camat"
        },
        {
            id: 3,
            nama: "SELTIUS SIBULATNIA, S.Sos",
            pangkat: "Penata Tingkat I",
            golongan: "III/d",
            nip: "19730127 200003 1 001",
            jabatan: "Kasi Ekonomi Dan Pembangunan"
        },
        {
            id: 4,
            nama: "EMILIUS SABAGGALET, S.Sos",
            pangkat: "Penata Tingkat I",
            golongan: "III/d",
            nip: "19750906 200212 1 001",
            jabatan: "Kasi Pemerintahan dan Trantibum"
        },
        {
            id: 5,
            nama: "NOWO YUNIASIH, SE",
            pangkat: "Penata Tingkat I",
            golongan: "III/d",
            nip: "19790609 200901 1 006",
            jabatan: "Kasi Kesejahteraan Sosial dan PM"
        },
        {
            id: 6,
            nama: "ERJO, S.A.P",
            pangkat: "Penata Tingkat I",
            golongan: "III/c",
            nip: "19820210 200604 2 027",
            jabatan: "Kasubag Umum & Kepegawaian"
        },
        {
            id: 7,
            nama: "NURTON MARTONI FORLES,A.Md",
            pangkat: "Penata Tingkat I",
            golongan: "III/b",
            nip: "19830105 201001 1 014",
            jabatan: "Kasubag Program dan Keuangan"
        },
        {
            id: 8,
            nama: "YONNI AYU NUSANTARA, S.Sos",
            pangkat: "Penata Tingkat I",
            golongan: "III/d",
            nip: "19730930 201112 2 003",
            jabatan: "Pengelola Pemberdaya"
        },
        {
            id: 9,
            nama: "ISMAEL",
            pangkat: "Penata Muda Tingkat I",
            golongan: "III/b",
            nip: "19680508 199303 1 007",
            jabatan: "Pengelola Kesejahteraan Sosial Pada Seksi Kesejahteraan Sosial"
        },
        {
            id: 10,
            nama: "OJAK HAMONANGAN SAMARUROK",
            pangkat: "Penata Muda Tingkat I",
            golongan: "III/b",
            nip: "19690717 200112 1 002",
            jabatan: "Pengelola Keamanan Dan Ketertiban Pada Seksi Pemerintah Dan Trantibun"
        },
        {
            id: 11,
            nama: "ORPA",
            pangkat: "Penata Muda Tingkat I",
            golongan: "III/b",
            nip: "19750905 200112 2 004",
            jabatan: "Pengelola Fasilitas Sosial Dan Umum pada Seksi Kesejahteraan Sosial Dan PM"
        },
        {
            id: 12,
            nama: "SUDIRO DEBATARAJA,S.Ag",
            pangkat: "Penata Muda Tingkat I",
            golongan: "III/b",
            nip: "19870612 201001 1 005",
            jabatan: "Penyusunan Program Anggaran Dan Pelaporan,Pada Sub.Bag.Program Dan Keuangan"
        },
        {
            id: 13,
            nama: "DWI FITRIANINGSIH,S.A.P",
            pangkat: "Penata Muda",
            golongan: "III/a",
            nip: "19790828 200701 2 022",
            jabatan: "Pengelola Pemanfaatan Barang Milik Daerah Pada Sub.Bag.Program Dan Kepegawaian"
        },
        {
            id: 14,
            nama: "MARULI SABABALAT",
            pangkat: "Pengatur Tingkat I",
            golongan: "II/d",
            nip: "19751117 200906 1 001",
            jabatan: "Pengadministrasi Kependudukan Pada Seksi Pemerintahan Dan Trantibum"
        },
        {
            id: 15,
            nama: "MATEUS SABAGGALET",
            pangkat: "Pengatur",
            golongan: "II/c",
            nip: "19751216 201001 1 014",
            jabatan: "Bendahara Pada Sub.Bag.Program dan keuangan"
        },
        {
            id: 16,
            nama: "ERNAWATI SARAGIH",
            pangkat: "Pengatur",
            golongan: "II/c",
            nip: "19710313 201410 2 002",
            jabatan: "Pengadministrasi Kepegawaian pada Sub.Bag.Umum dan kepegawaian"
        },
        {
            id: 17,
            nama: "YOSEP SAGARI",
            pangkat: "Pengatur",
            golongan: "II/c",
            nip: "19760302 201410 1 003",
            jabatan: "Pengadministrasi Program pemerintahan pada seksi pemerintahan dan Trantibum"
        },
        {
            id: 18,
            nama: "ALEXANDER SALELEUBAJAK, S.Pd.SD",
            pangkat: "Penata Muda",
            golongan: "IX",
            nip: "19770807 202521 1 013",
            jabatan: "Penata layanan operasional"
        },
        {
            id: 19,
            nama: "RINI MARLINA,S.Pd",
            pangkat: "Penata Muda",
            golongan: "IX",
            nip: "19880610 202521 2 027",
            jabatan: "Penata layanan operasional"
        },
        {
            id: 20,
            nama: "MIARSAH SINAGA, S.Pd",
            pangkat: "Penata Muda",
            golongan: "IX",
            nip: "19890331 202521 2 012",
            jabatan: "Penata layanan operaional"
        },
        {
            id: 21,
            nama: "UDRI JUNIDDIN",
            pangkat: "Pengatur Muda",
            golongan: "V",
            nip: "19810601 202521 1 025",
            jabatan: "Operator layanan operasional"
        },
        {
            id: 22,
            nama: "CALVIN SALELEUBAJA",
            pangkat: "Pengatur Muda",
            golongan: "V",
            nip: "19690628 202521 1 007",
            jabatan: "Operator layanan operasional"
        },
        {
            id: 23,
            nama: "SAVERIUS.S",
            pangkat: "Pengatur Muda",
            golongan: "V",
            nip: "19700422 202521 1 003",
            jabatan: "Operator layanan operasional"
        },
        {
            id: 24,
            nama: "DODI SEPTRIA, S.Sd",
            pangkat: "-",
            golongan: "-",
            nip: "19830930 202521 1 043",
            jabatan: "Penata Layanan Operasional"
        },
        {
            id: 25,
            nama: "ALDINA SAUREI,S.IP",
            pangkat: "-",
            golongan: "-",
            nip: "19900303 202521 2 095",
            jabatan: "Penata layanan operasional "
        },
        {
            id: 26,
            nama: "JONNI HUTABALIAN",
            pangkat: "-",
            golongan: "-",
            nip: "19720311 202521 1 053",
            jabatan: "operator layanan operasioanl"
        },
        {
            id: 27,
            nama: "CICILIA DESPITA SABUKKU",
            pangkat: "-",
            golongan: "-",
            nip: "19930827 202521 2 083",
            jabatan: "operator layanan operasioanl"
        },
        {
            id: 28,
            nama: "ANGELINA MARIATI",
            pangkat: "-",
            golongan: "-",
            nip: "19960702 202521 2 065",
            jabatan: "Operator layanan operasioanl"
        }
    ];

    let currentPage = 1;
    const rowsPerPage = 10;
    let filteredData = [...pegawaiData];

    const tableBody = document.getElementById('pegawaiTableBody');
    const searchInput = document.getElementById('pegawaiSearch');
    const jabatanFilter = document.getElementById('jabatanFilter');
    const golonganFilter = document.getElementById('golonganFilter');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const pageNumbers = document.querySelectorAll('.page-number');

    
    function renderTable() {
        tableBody.innerHTML = '';
        
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const currentData = filteredData.slice(startIndex, endIndex);
        
        
        currentData.forEach((pegawai, index) => {
            const row = document.createElement('tr');
            row.className = 'pegawai-row';
            row.innerHTML = `
                <td>${startIndex + index + 1}</td>
                <td>${pegawai.nama}</td>
                <td>${pegawai.pangkat}${pegawai.golongan ? ` (${pegawai.golongan})` : ''}</td>
                <td>${pegawai.nip}</td>
                <td>${pegawai.jabatan}</td>
            `;
            tableBody.appendChild(row);
        });
        
        updatePagination();
    }
    
    function filterData() {
        const searchTerm = searchInput.value.toLowerCase();
        const jabatanValue = jabatanFilter.value;
        const golonganValue = golonganFilter.value;
        
        filteredData = pegawaiData.filter(pegawai => {
            const matchesSearch = pegawai.nama.toLowerCase().includes(searchTerm) ||
                                 pegawai.nip.toLowerCase().includes(searchTerm) ||
                                 pegawai.jabatan.toLowerCase().includes(searchTerm);
            
            const matchesJabatan = jabatanValue === 'all' || 
                                  (jabatanValue === 'camat' && pegawai.jabatan.includes('Camat')) ||
                                  (jabatanValue === 'sekretaris' && pegawai.jabatan.includes('Sekretaris')) ||
                                  (jabatanValue === 'kasi' && pegawai.jabatan.includes('Seksi')) ||
                                  (jabatanValue === 'staff' && !pegawai.jabatan.includes('Camat') && 
                                   !pegawai.jabatan.includes('Sekretaris') && !pegawai.jabatan.includes('Seksi'));
            
            const matchesGolongan = golonganValue === 'all' || 
                                   (golonganValue === 'IV' && pegawai.golongan && pegawai.golongan.startsWith('IV')) ||
                                   (golonganValue === 'III' && pegawai.golongan && pegawai.golongan.startsWith('III')) ||
                                   (golonganValue === 'II' && pegawai.golongan && pegawai.golongan.startsWith('II')) ||
                                   (golonganValue === 'I' && pegawai.golongan && pegawai.golongan.startsWith('I'));
            
            return matchesSearch && matchesJabatan && matchesGolongan;
        });
        
        currentPage = 1;
        renderTable();
    }
    
    function updatePagination() {
        const totalPages = Math.ceil(filteredData.length / rowsPerPage);
        
        // Update page numbers
        pageNumbers.forEach((page, index) => {
            if (index < totalPages) {
                page.style.display = 'flex';
                page.textContent = index + 1;
                page.classList.toggle('active', index + 1 === currentPage);
            } else {
                page.style.display = 'none';
            }
        });
        
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    }
    
    searchInput.addEventListener('input', filterData);
    jabatanFilter.addEventListener('change', filterData);
    golonganFilter.addEventListener('change', filterData);
    
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        const totalPages = Math.ceil(filteredData.length / rowsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });
    
    pageNumbers.forEach(page => {
        page.addEventListener('click', function() {
            const pageNum = parseInt(this.textContent);
            if (pageNum !== currentPage) {
                currentPage = pageNum;
                renderTable();
            }
        });
    });
    
    renderTable();
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    setTimeout(() => {
        document.querySelectorAll('.pegawai-row').forEach(row => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(20px)';
            row.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(row);
        });
    }, 100);
});