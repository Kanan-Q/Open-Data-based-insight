const header = document.querySelector('#header')

header.innerHTML = `
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
            <h1 class="text-2xl font-bold text-slate-800">Xəbər Portalı</h1>
        </div>
        <div class="flex-1 max-w-lg mx-8">
            <div class="relative">
                <input id="searchInput" type="text" placeholder="Xəbər axtarın..."
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="hidden md:block">
            <button
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Abunə ol
            </button>
        </div>
    </div>
</div>
`;

const searchInput = document.querySelector('#searchInput')

// Bütün xəbərləri seçirik
const newsItems = document.querySelectorAll('.p-5')

searchInput.addEventListener('keyup', function () {
    const query = this.value.toLowerCase().trim()

    newsItems.forEach(item => {
        const text = item.innerText.toLowerCase()

        // Əgər text input ilə uyğun gəlirsə
        if (query && text.includes(query)) {
            // Uyumlu xəbər görünüşünü vurğulayırıq
            item.style.opacity = '1'
            // İçindəki uyğun mətni sarı highlight edirik
            const regex = new RegExp(`(${query})`, 'gi')
            item.querySelectorAll('p').forEach(p => {
                p.innerHTML = p.textContent.replace(regex, '<span style="background-color: yellow;">$1</span>')
            })
        } else {
            // Uyumlu olmayan xəbərlər azca şəffaf görünür
            item.style.opacity = query ? '0.3' : '1'
            // Highlight-ı təmizləyirik
            item.querySelectorAll('p').forEach(p => {
                p.innerHTML = p.textContent
            })
        }
    })
})

