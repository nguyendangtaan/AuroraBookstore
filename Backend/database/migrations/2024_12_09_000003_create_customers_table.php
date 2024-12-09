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
        Schema::create('customers', function (Blueprint $table) {
            $table->bigIncrements('cusid');
            $table->timestamps();

            $table->string('cname', 30)->nullable();
            $table->date('dob')->nullable();
            $table->integer('sex')->nullable();
            $table->string('cemail', 30);
            $table->string('caddress', 100)->nullable();
            $table->char('ccity', 10)->nullable();
            $table->string('cprovince', 30)->nullable();
            $table->string('phone', 12)->nullable();
            $table->date('joindate');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
