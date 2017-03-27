<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    /**
     * Fetches all Items
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sorted = Item::all()->sortBy('order');

        return $sorted->values()->all();
    }

    /**
     * Fetches a specific Item by id
     *
     * @param \App\Item $item
     * @return \Illuminate\Http\Response
     */
    public function get(Item $item)
    {
        return $item;
    }

    /**
     * Store a newly created Item
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $item = new Item();
        $item->name = $request->name;
        $success = $item->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Update the specified Item in storage
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Item $item)
    {
        $item->name = $request->name;
        $success = $item->save();

        return response()->json([
            'success' => $success
        ]);
    }

    /**
     * Remove the specified Item from storage
     *
     * @param  \App\Item  $item
     * @return \Illuminate\Http\Response
     */
    public function destroy(Item $item)
    {
        $success = $item->delete();

        return response()->json([
            'success' => $success
        ]);
    }
}