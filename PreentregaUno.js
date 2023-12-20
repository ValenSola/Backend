class ProductManager {
    constructor() {
        this.products = [];
    };

    getProducts() {
        console.log(this.products);
    };

    getProductsById(id) {
        if (!id) {
            console.error("Debe ingresar un ID para la busqueda por el id");
            return;
        }
        const ProductSearch = this.products.find((p) => p.id === id);

        if (ProductSearch) {
            console.log(ProductSearch);
        } else {
            console.log("Not Found")
        }

    };

    addProduct(product) {

        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some((p) => p.code === product.code)) {
            console.error("El código ya existe.");
            return;
        }

        const { title, description, price, thumbnail, code, stock } = product;

        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct);
    }
}

const productManager = new ProductManager();
productManager.getProducts();

const producto1 = {
    title: 'producto prueba',
    description: 'producto de prueba',
    price: 20,
    thumbnail: 'Sin imagen',
    code: 'qwe1234',
    stock: 10,
};
productManager.addProduct(producto1);
productManager.getProducts();
productManager.addProduct(producto1);
productManager.getProductsById(4);
productManager.getProductsById(1);

