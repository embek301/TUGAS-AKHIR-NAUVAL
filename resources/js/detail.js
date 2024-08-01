document.addEventListener('DOMContentLoaded', function () {
            // Ambil nilai parameter dari URL
            const urlParams = new URLSearchParams(window.location.search);
            const productId = urlParams.get('id');

            // Misalkan kita punya data produk dalam bentuk array
            const products = [
                {
                    id: 'KP-1',
                    name: 'Surpise Army',
                    description: 'Surpise Army memiliki sentuhan gaya yang simpel namun elegan pada penampilan Anda dengan Kaos Kaki Polos Berwarna Hijau Army kami. Didesain khusus untuk kenyamanan dan daya tahan',
                    price: 'Rp.35.000',
                    imageUrl: './resources/images/produk1.jpeg'
                },
                {
                    id: 'KP-2',
                    name: 'Surprise Grey',
                    description: 'Surprise Grey memiliki gaya simpel dan elegan. Desain polosnya yang minimalis cocok untuk acara formal maupun kasual.',
                    price: 'Rp.35.000',
                    imageUrl: './resources/images/produk2.jpg'
                },
                {
                    id: 'KP-3',
                    name: 'Surprise Maroon',
                    description: 'Surprise Maroon memiliki gaya simpel dan elegan. Desain modisnya yang minimalis cocok untuk acara kasual.',
                    price: 'Rp.35.000',
                    imageUrl: './resources/images/produk3.jpg'
                },
                {
                    id: 'KG-1',
                    name: 'Surpise Attention',
                    description: 'Surprise Attention memiliki menggabungkan kenyamanan dan gaya dengan desain tulisan mencolok.',
                    price: 'Rp.40.000',
                    imageUrl: './resources/images/produk4.jpg'
                },
                {
                    id: 'KG-2',
                    name: 'Surpise Red Blue Vintage',
                    description: 'Surpise Red Blue Vintage menawarkan gaya dinamis dan elegan. Terbuat dari katun dan spandex berkualitas tinggi.',
                    price: 'Rp.40.000',
                    imageUrl: './resources/images/produk5.jpg'
                },
                {
                    id: 'KG-3',
                    name: 'Surpise Jordan Blue',
                    description: 'Surpise Jordan Blue Terbuat dari katun dan spandex berkualitas tinggi. Desain unik dan sporty ini cocok untuk gaya kasual.',
                    price: 'Rp.40.000',
                    imageUrl: './resources/images/produk6.jpg'
                },
                {
                    id: 'KT-1',
                    name: 'Surprise Wooden',
                    description: 'Surprise Wooden Terbuat dari katun dan spandex. Cocok dipadukan dengan gaya kasual atau bohemian.',
                    price: 'Rp.40.000',
                    imageUrl: './resources/images/produk7.jpg'
                },
                {
                    id: 'KT-2',
                    name: 'Surprise Red Christmas',
                    description: 'Surprise Red Christmas memiliki desain yang khas dengan motif merah yang menyala, cocok untuk suasana Natal.',
                    price: 'Rp.40.000',
                    imageUrl: './resources/images/produk8.jpg'
                },
                {
                    id: 'KT-3',
                    name: 'Surprise Sunflower',
                    description: 'Surprise Sunflower menampilkan desain yang cerah dan menyegarkan dengan motif bunga matahari. Terbuat dari bahan katun atau campuran spandex.',
                    price: 'Rp.40.000',
                    imageUrl: './resources/images/produk9.jpg'
                },
                // Data produk lainnya
            ];

            // Temukan produk dengan ID yang sesuai
            const product = products.find(prod => prod.id === productId);

            // Tampilkan detail produk di dalam elemen dengan ID product-details
            const productDetailsElement = document.getElementById('product-details');
            if (product) {
                productDetailsElement.innerHTML = `
                <main class="container">
                    <div class="card-container">
                        <div class="card">
                            <img src="${product.imageUrl}" alt="${product.id}">
                            <div class="card-content">
                                <div>
                                    <h4>${product.id}</h4>
                                </div>
                                <div>
                                    <h1>
                                        ${product.name}
                                    </h1>
                                </div>
                                <div>
                                    <p class="lead">
                                        ${product.description}
                                    </p>
                                </div>
                                <div class="product-price">
                                    <div class="price">
                                    ${product.price}
                                    </div>
                                    <!-- <div class="discount">
                                        $169.99
                                    </div> -->
                                </div>
                                <a class="" href="produk.html" style="text-decoration:none; color:white; ">
                                    <button class="btn-danger" style="cursor: pointer">
                                        <i class="bi bi-arrow-left"></i> Back
                                    </button>
                                </a>
                                <a class="" href="" style="text-decoration: none;color:white ;cursor: pointer;">
                                    <button class="btn btn-order" style="cursor: pointer">
                                            <i class="bi bi-whatsapp"></i> Order Sekarang
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
                `;

                // Dapatkan tombol "Order Sekarang"
                const orderButton = productDetailsElement.querySelector('.btn-order');

                // Tambahkan event listener ke tombol "Order Sekarang"
                orderButton.addEventListener('click', function () {
                    // Buat URL pesan WhatsApp dengan data produk
                    const whatsappURL = `whatsapp://send?phone=6283833696500&text=Halo%2C%20saya%20ingin%20membuat%20pesanan%20${encodeURIComponent(product.name)}%20dengan%20kode%20produk%20${encodeURIComponent(product.id)}%20dengan%20harga%20${encodeURIComponent(product.price)}%0A%0A*Beri%20keterangan%20atau%20pesan%20tambahan%20disini*%0A%0ATerima%20kasih.&app_absent=0`;

                    // Buka pesan WhatsApp dengan URL yang telah dibuat
                    window.open(whatsappURL, '_blank');
                });
            } else {
                productDetailsElement.innerHTML = '<p>Product not found.</p>';
            }
        });