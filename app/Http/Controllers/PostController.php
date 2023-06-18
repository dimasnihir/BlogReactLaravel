<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(Request $request){
        return Inertia::render('Posts', [
            'posts' => Post::Paginate(5),
        ]);
    }

    public function show($id) {
            
        return Inertia::render('Post', [
            'post' => Post::findOrFail($id),
        ]);
    }
}
