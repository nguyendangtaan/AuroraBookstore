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
        Schema::create('reviews', function (Blueprint $table) {
            $table->timestamps();
            
            $table->bigIncrements('rateid');
            $table->unsignedBigInteger('orderid');
            $table->unsignedBigInteger('cusid');
            $table->unsignedBigInteger('bid');
            $table->string('detail', 100);
            $table->date('date');
            $table->foreign('cusid')->references('cusid')->on('customers')->onDelete('restrict')->onUpdate('restrict');
            $table->foreign('orderid')->references('orderid')->on('orders')->onDelete('restrict')->onUpdate('restrict');
            $table->foreign('bid')->references('bid')->on('books')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};
