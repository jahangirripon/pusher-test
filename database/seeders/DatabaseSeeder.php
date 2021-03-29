<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;
use App\Models\Category;
use App\Models\User;
use App\Models\Like;
use App\Models\Reply;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Category::factory(5)->create();
        \App\Models\Question::factory(10)->create();
        \App\Models\Reply::factory(50)->create();
        \App\Models\Like::factory(500)->create();
        // \App\Models\Reply::factory(10)->create()->each(function ($reply) {
        //     return $reply->like()->save(\App\Models\Like::make());
        // });
    }
}
