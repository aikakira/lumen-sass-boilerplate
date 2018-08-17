<?php

namespace App\Http\Controllers;

class HomepageController extends Controller
{
    public function __construct() {
        $this->render();
    }

    public function render()
    {
        $data = [
            "title" => "Hello!",
            "menu" => [
                "items" => [
                    "Pages"
                ]
            ]
        ];
        return view('homepage', $data);
    }
}
