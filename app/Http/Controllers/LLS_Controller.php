<?php

namespace App\Http\Controllers;

use App\Models\LandlordSurvey;
use Illuminate\Http\Request;

class LLS_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $items = LandlordSurvey::all();
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $item = new LandlordSurvey([
            'address' => $request->address,
            'anonymous' => $request->anonymous,
            'start_date' => $request->start_date,
			'end_date' => $request->end_date,
			'landlord' => $request->landlord,
			'agency' => $request->agency,
            'agency_name' => $request->agency_name,
			'communication' => $request->communication,
            'discretion' => $request->discretion,
            'responsiveness' => $request->responsiveness,
            'compliance' => $request->compliance,
            'overall_rating' => $request->overall_rating,
            'overall_comment' => $request->overall_comment,
            'contact' => $request->contact
            
        ]);
        $item->save();
        return response()->json('Successfully added');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $item = LandlordSurvey::find($id);
        return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
//        $item = Item::find($id);
//        $item->name = $request->get('name');
//        $item->price = $request->get('price');
//        $item->save();

        return response()->json('Successfully Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $item = LandlordSurvey::find($id);
        $item->delete();

        return response()->json('Successfully Deleted');
    }
}
