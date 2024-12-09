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
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('orderid');
            $table->timestamps();

            $table->unsignedBigInteger('cusid');
            $table->date('odate');
            $table->char('ophone', 12);
            $table->string('oemail', 30);
            $table->bigInteger('ototal');
            $table->string('ocity', 30);
            $table->string('oprovince', 30);
            $table->string('oaddress', 255);
            $table->integer('paystat');
            $table->integer('ostatus');
            $table->foreign('cusid')->references('cusid')->on('customers')->onDelete('restrict')->onUpdate('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
