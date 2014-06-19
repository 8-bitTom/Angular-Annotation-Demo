'use strict';

var mongoose = require( 'mongoose' ),
	Schema = mongoose.Schema;

/**
 * Sample Schema
 */
var SampleSchema = new Schema( {
	accession: String,
	title:     String,
	source:    String,
	info :     String,
	group :    Number

} );

mongoose.model( 'Sample', SampleSchema );
