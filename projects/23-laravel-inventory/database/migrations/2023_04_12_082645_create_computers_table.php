<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComputersTable extends Migration
{

    public function up()
    {
        Schema::create('computers', function (Blueprint $table) {
            $table->id();
            $table->string('identifier')->unique();
            $table->string('type', 2);
            $table->string('brand_model', 4);
            $table->unsignedBigInteger('room_id')->nullable();
            $table->float('processor_frequency');
            $table->unsignedInteger('ram_installed');
            $table->unsignedInteger('hdd_capacity');
            $table->timestamps();

            $table->foreign('room_id')->references('id')->on('rooms')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::dropIfExists('computers');
    }
}