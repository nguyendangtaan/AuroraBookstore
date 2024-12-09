<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cart_books', function (Blueprint $table) {
            $table->timestamps();

            $table->unsignedBigInteger('bid');
            $table->unsignedBigInteger('cartid');
            $table->integer('bquan');
            $table->bigInteger('bcost');
            $table->primary(['bid', 'cartid']);
            $table->foreign('bid')->references('bid')->on('books')->onDelete('restrict')->onUpdate('restrict');
            $table->foreign('cartid')->references('cartid')->on('carts')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_books');
    }
};
