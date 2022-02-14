<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLandlordSurveyRequest;
use App\Http\Requests\UpdateLandlordSurveyRequest;
use App\Models\LandlordSurvey;

class LandlordSurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreLandlordSurveyRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLandlordSurveyRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LandlordSurvey  $landlordSurvey
     * @return \Illuminate\Http\Response
     */
    public function show(LandlordSurvey $landlordSurvey)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LandlordSurvey  $landlordSurvey
     * @return \Illuminate\Http\Response
     */
    public function edit(LandlordSurvey $landlordSurvey)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLandlordSurveyRequest  $request
     * @param  \App\Models\LandlordSurvey  $landlordSurvey
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLandlordSurveyRequest $request, LandlordSurvey $landlordSurvey)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LandlordSurvey  $landlordSurvey
     * @return \Illuminate\Http\Response
     */
    public function destroy(LandlordSurvey $landlordSurvey)
    {
        //
    }
}
