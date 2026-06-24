<?php
    use App\Models\Room;
namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RoomSeeder extends Seeder
{

    public function run()
    {
        Room::create(['number_room' => '101']);
        Room::create(['number_room' => '102']);
        Room::create(['number_room' => '201']);
    }

}