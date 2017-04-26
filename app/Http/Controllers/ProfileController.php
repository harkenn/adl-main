<?php

namespace App\Http\Controllers;

use App\Models\Data\User;
use Illuminate\Http\Request;
use Jrean\UserVerification\UserVerification;

class ProfileController extends Controller
{
    /**
     * Fetch the authenticated user's user information
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        return response()->json($request->user());
    }

    public function update(Request $request, User $user)
    {

    }

    public function sendVerificationEmail(User $user)
    {
        UserVerification::generate($user);
        UserVerification::send($user, 'AdventureLookup E-mail Verification');
    }
}