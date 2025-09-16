const aside = document.querySelector('#sidebar')

aside.innerHTML = `
 <div class="p-6">
                <h2 class="text-lg font-semibold text-gray-800 mb-4">Kateqoriyalar</h2>
                <nav class="space-y-2">
                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">Siyasət</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Daxili
                                siyasət</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Xarici
                                siyasət</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Seçkilər</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">İqtisadiyyat</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                        <a href="business.html"
                            class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Maliyyə</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Biznes</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Neft
                                və qaz</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">Cəmiyyət</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Sosial
                                məsələlər</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Təhsil</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Səhiyyə</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">Texnologiya</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">İnnovasiya</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Rəqəmsal
                                həllər</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Startaplar</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">İdman</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                        <a href="category.html"
                            class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Digər
                            idman</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Futbol</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Olimpiya</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">Mədəniyyət</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Sənət</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Musiqi</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Ədəbiyyat</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">Dünya</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Avropa</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Amerika</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Asiya</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">Elm</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Tədqiqatlar</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Kosmik
                                elm</a>
                            <a href="#" class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-50 rounded">Tibb
                                elmi</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">Ətraf mühit</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">İqlim
                                dəyişikliyi</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Təbii
                                resurslar</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Ekoloji
                                layihələr</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">Turizm</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Daxili
                                turizm</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Beynəlxalq
                                turizm</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Tarixi
                                yerlər</a>
                        </div>
                    </div>

                    <div class="sidebar-item">
                        <div
                            class="flex items-center justify-between p-3 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                            <span class="font-medium">Həyat tərzi</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div class="sub-categories ml-4 mt-1">
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Sağlamlıq</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Moda</a>
                            <a href="#"
                                class="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded">Kulinariya</a>
                        </div>
                    </div>
                </nav>
            </div>
`