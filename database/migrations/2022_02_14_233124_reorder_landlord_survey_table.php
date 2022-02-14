<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ReorderLandlordSurveyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::table('landlord_surveys', function (Blueprint $table) {
			$table->dropColumn(['tenant', 'anonymous', 'agency', 'agency_name', 'property']);
		});
			
		Schema::table('landlord_surveys', function (Blueprint $table) {
			$table->string('address')->after('id');
			$table->string('landlord')->after('end_date');
			$table->boolean('anonymous')->after('address');
			$table->boolean('agency')->after('landlord');
			$table->string('agency_name')->after('agency');
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
		Schema::table('landlord_surveys', function (Blueprint $table) {
			$table->dropColumn(['anonymous', 'agency', 'agency_name', 'address', 'landlord']);
		});	
		
		Schema::table('landlord_surveys', function (Blueprint $table) {
			$table->string('tenant')->after('id');
			$table->string('property')->after('tenant');
			$table->boolean('anonymous')->after('overall_comment');
			$table->boolean('agency')->after('contact');
			$table->string('agency_name')->after('agency');
		});
    }
};
