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
        Schema::create('books', function (Blueprint $table) {
            $table->bigIncrements('bid');
            $table->timestamps();

            $table->unsignedBigInteger('auid');
            $table->string('bname', 100);
            $table->string('isbn', 100);
            $table->string('category', 20);
            $table->string('language', 30);
            $table->integer('pubyear');
            $table->string('description', 1000);
            $table->string('url', 1000);
            $table->bigInteger('price');
            $table->integer('page');
            $table->integer('available');
            $table->foreign('auid')->references('auid')->on('authors')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
