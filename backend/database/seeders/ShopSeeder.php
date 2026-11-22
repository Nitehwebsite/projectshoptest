<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ShopSeeder extends Seeder
{
    public function run(): void
    {
        $categories = collect([
            'Computers',
            'Accessories',
            'Displays',
        ])->mapWithKeys(fn (string $name) => [
            $name => Category::firstOrCreate(['name' => $name])->id,
        ]);

        $products = [
            ['id' => 1, 'category' => 'Computers', 'name' => 'Laptop', 'price' => 650],
            ['id' => 2, 'category' => 'Accessories', 'name' => 'Mouse', 'price' => 15],
            ['id' => 3, 'category' => 'Accessories', 'name' => 'Keyboard', 'price' => 25],
            ['id' => 4, 'category' => 'Displays', 'name' => 'Monitor', 'price' => 120],
        ];

        foreach ($products as $product) {
            Product::updateOrCreate(
                ['id' => $product['id']],
                [
                    'category_id' => $categories[$product['category']],
                    'name' => $product['name'],
                    'price' => $product['price'],
                ],
            );
        }
    }
}
