<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Log;
use phpDocumentor\Reflection\Types\Context;


class UsersController extends Controller
{
    public function index()
    {
        Log::info('Entrando en indexo.');
        return UserResource::collection(User::paginate(10));
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }

    public function currentUser(){
      $usuario = Auth::user();
      log::debug('desde currentuser'.$usuario);
      return $usuario;
    }

    public function update(User $user, Request $request)
    {
        Log::info('Entrando en update.');
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);

        $user->update($data);

        return new UserResource($user);
    }

    public function destroy(User $user)
    {
        Log::info('Entrando en delete.');
        try {
            $user->delete();
            return response(null, 204);
        } catch (Exception $e){
            log::error('Algo fue mal');
            log::error($e);
            return response(null, 404);
        }
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|min:8',
        ]);

        return new UserResource(User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]));
    }
}
