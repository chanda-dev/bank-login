<?php

use App\Http\Controllers\BankController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    $user = Auth::user();
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'auth' => [
            'user' => Auth::user(),
            'csrfToken' => csrf_token(),
        ],
        'balance' => $user ? $user->balance : 0,
        'savings' => $user ? $user->savings : 0,
    ]);
})->name('welcome');


Route::post('/logout', function () {
    Auth::logout();
    return redirect()->route('login');
})->name('logout');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::fallback(function () {
    return redirect()->route('login');
});

require __DIR__ . '/auth.php';
