import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';
@Injectable({
  providedIn: 'root',
})
export class IproductService {
  product: Iproduct[] = [
    // Electronics
    {
      id: 1,
      name: 'Laptop',
      price: 999.99,
      description: 'High-performance laptop with latest specifications',
      category: 'electronics',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 699.99,
      description: 'Latest smartphone with advanced features',
      category: 'electronics',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 199.99,
      description: 'Wireless noise-cancelling headphones',
      category: 'electronics',
    },
    {
      id: 4,
      name: 'Tablet',
      price: 399.99,
      description: '10-inch tablet perfect for work and entertainment',
      category: 'electronics',
    },
    {
      id: 5,
      name: 'Smartwatch',
      price: 299.99,
      description: 'Fitness tracking smartwatch with health monitoring',
      category: 'electronics',
    },
    // Books
    {
      id: 6,
      name: 'The Great Gatsby',
      price: 12.99,
      description: 'Classic American novel by F. Scott Fitzgerald',
      category: 'books',
    },
    {
      id: 7,
      name: 'To Kill a Mockingbird',
      price: 14.99,
      description: "Harper Lee's masterpiece about justice and racism",
      category: 'books',
    },
    {
      id: 8,
      name: '1984',
      price: 11.99,
      description: "George Orwell's dystopian classic",
      category: 'books',
    },
    {
      id: 9,
      name: 'Pride and Prejudice',
      price: 9.99,
      description: "Jane Austen's beloved romantic novel",
      category: 'books',
    },
    {
      id: 10,
      name: 'The Hobbit',
      price: 15.99,
      description: "J.R.R. Tolkien's fantasy adventure",
      category: 'books',
    },
    // Clothes
    {
      id: 11,
      name: 'T-Shirt',
      price: 24.99,
      description: 'Comfortable cotton t-shirt in various colors',
      category: 'clothes',
    },
    {
      id: 12,
      name: 'Jeans',
      price: 59.99,
      description: 'Classic blue jeans with perfect fit',
      category: 'clothes',
    },
    {
      id: 13,
      name: 'Sweater',
      price: 45.99,
      description: 'Warm wool sweater for cold weather',
      category: 'clothes',
    },
    {
      id: 14,
      name: 'Dress',
      price: 79.99,
      description: 'Elegant dress for special occasions',
      category: 'clothes',
    },
    {
      id: 15,
      name: 'Jacket',
      price: 89.99,
      description: 'Stylish jacket for outdoor activities',
      category: 'clothes',
    },
  ];

  constructor() {}
  getProductsByCategory(category: string): Iproduct[] {
    return this.product.filter((product) => product.category === category);
  }

  getProductById(id: number): Iproduct | undefined {
    return this.product.find((product) => product.id === id);
  }

  getAllCategories(): string[] {
    return [...new Set(this.product.map((product) => product.category))];
  }
}
