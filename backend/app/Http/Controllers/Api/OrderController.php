<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'customer.firstName' => ['required', 'string', 'max:80'],
            'customer.lastName' => ['required', 'string', 'max:80'],
            'customer.email' => ['required', 'email', 'max:254'],
            'customer.phone' => ['required', 'string', 'max:32'],
            'customer.address' => ['required', 'string', 'max:255'],
            'shippingMethod' => ['required', 'in:standard,express'],
            'shipping' => ['required', 'numeric', 'min:0'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.id' => ['required', 'integer', 'exists:products,id'],
            'items.*.quantity' => ['required', 'integer', 'min:1'],
            'items.*.price' => ['required', 'numeric', 'min:0'],
        ]);

        $order = DB::transaction(function () use ($validated) {
            $customer = Customer::updateOrCreate(
                ['email' => $validated['customer']['email']],
                [
                    'first_name' => $validated['customer']['firstName'],
                    'last_name' => $validated['customer']['lastName'],
                    'phone' => $validated['customer']['phone'],
                    'address' => $validated['customer']['address'],
                ],
            );

            $subtotal = collect($validated['items'])->sum(
                fn (array $item) => (float) $item['price'] * (int) $item['quantity']
            );
            $total = $subtotal + (float) $validated['shipping'];

            $order = Order::create([
                'customer_id' => $customer->id,
                'order_status' => 'Pending',
                'shipping_method' => $validated['shippingMethod'],
                'shipping_cost' => $validated['shipping'],
                'total_amount' => $total,
            ]);

            foreach ($validated['items'] as $item) {
                $order->items()->create([
                    'product_id' => $item['id'],
                    'quantity' => $item['quantity'],
                    'unit_price' => $item['price'],
                ]);
            }

            return $order->load(['customer', 'items.product']);
        });

        return response()->json([
            'id' => 'ORD-' . str_pad((string) $order->id, 4, '0', STR_PAD_LEFT),
            'orderStatus' => $order->order_status,
            'totalAmount' => $order->total_amount,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
