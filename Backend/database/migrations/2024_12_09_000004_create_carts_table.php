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
        Schema::create('carts', function (Blueprint $table) {
            $table->bigIncrements('cartid');
            $table->timestamps();

            $table->unsignedBigInteger('cusid');
            $table->integer('booktotal');
            $table->bigInteger('costtotal');
            $table->integer('status');
            $table->foreign('cusid')->references('cusid')->on('customers')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
