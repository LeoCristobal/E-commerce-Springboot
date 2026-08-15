package com.leo.service;

import com.leo.model.Product;
import com.leo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repo;

    @Autowired
    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product createProduct(Product product) {
        return repo.save(product);
    }

    public Product getProductById(int id) {
        return repo.findById(id)
                .orElse(null);
    }

    public Product updateProduct(int id, Product product) {

        if (!repo.existsById(id)) {
            return null;
        }

        product.setId(id);
        return repo.saveAndFlush(product);
    }

    public String deleteProduct(int id) {

        if (!repo.existsById(id)) {
            return "Product with ID " + id + " does not exist";
        }

        repo.deleteById(id);
        return "Successfully deleted";
    }
}