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
        Schema::create('order_books', function (Blueprint $table) {
            $table->timestamps();

            $table->unsignedBigInteger('orderid');
            $table->unsignedBigInteger('bid');
            $table->integer('orderquan');
            $table->bigInteger('orderprice');
            $table->primary(['orderid', 'bid']);
            $table->foreign('orderid')->references('orderid')->on('orders')->onDelete('restrict')->onUpdate('restrict');
            $table->foreign('bid')->references('bid')->on('books')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_books');
    }
};
