'use strict';

var mongoose = require('mongoose'),
	Sample = mongoose.model('Sample' ),
	Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove();
Sample.find({}).remove(function() {
  Sample.create({
		  accession: "GSM92163",
		  title:     "AdERb +TOT replicate3",
		  source:    "MCF-7 breast cancer cells",
		  info :     "AdErb(moi10)-infected, TOT-treated for 24hr",
		  group :    0
  }, {
		  accession: "GSM92162",
		  title:     "AdERb +TOT replicate2",
		  source:    "MCF-7 breast cancer cells",
		  info :     "AdErb(moi10)-infected, TOT-treated for 24hr",
		  group :    0
  }, {
		  accession: "GSM92161",
		  title:     "AdERb +TOT replicate1",
		  source:    "MCF-7 breast cancer cells",
		  info :     "AdErb(moi10)-infected, TOT-treated for 24hr",
		  group :    0
  }, {
		  accession: "GSM92160",
		  title:     "AdERb +E2 replicate3",
		  source:    "MCF-7 breast cancer cells",
		  info :     "AdErb(moi10)-infected, E2-treated for 24hr",
		  group :    0
  }, {
		  accession: "GSM92159",
		  title:     "AdERb +E2 replicate2",
		  source:    "MCF-7 breast cancer cells",
		  info :     "AdErb(moi10)-infected, E2-treated for 24hr",
		  group :    0
  }, {
		  accession: "GSM92158",
		  title:     "AdERb +E2 replicate1",
		  source:    "MCF-7 breast cancer cells",
		  info :     "AdErb(moi10)-infected, E2-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92157",
		  title:     "AdERb +veh replicate3",
		  source:    "MCF-7 breast cancer cells",
		  info :     "AdErb(moi10)-infected, veh-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92156",
		  title:     "AdERb +E2 replicate2",
		  source:    "MCF-7 breast cancer cells",
		  info :     "AdErb(moi10)-infected, veh-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92155",
		  title:     "AdERb +E2 replicate1",
		  source:    "MCF-7 breast cancer cells",
		  info :     "AdErb(moi10)-infected, veh-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92154",
		  title:     "Ad +TOT replicate3",
		  source:    "MCF-7 breast cancer cells",
		  info :     "Ad(moi10)-infected, TOT-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92153",
		  title:     "Ad +TOT replicate2",
		  source:    "MCF-7 breast cancer cells",
		  info :     "Ad(moi10)-infected, TOT-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92152",
		  title:     "Ad +TOT replicate1",
		  source:    "MCF-7 breast cancer cells",
		  info :     "Ad(moi10)-infected, TOT-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92151",
		  title:     "Ad +E2 replicate3",
		  source:    "MCF-7 breast cancer cells",
		  info :     "Ad(moi10)-infected, E2-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92150",
		  title:     "Ad +E2 replicate2 b",
		  source:    "MCF-7 breast cancer cells",
		  info :     "Ad(moi10)-infected, E2-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92149",
		  title:     "Ad +E2 replicate1 b",
		  source:    "MCF-7 breast cancer cells",
		  info :     "Ad(moi10)-infected, E2-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92148",
		  title:     "Ad +veh replicate2 b",
		  source:    "MCF-7 breast cancer cells",
		  info :     "Ad(moi10)-infected, vehicle-treated for 24hr",
		  group :    0
  },{
		  accession: "GSM92147",
		  title:     "Ad +veh replicate1 b",
		  source:    "MCF-7 breast cancer cells",
		  info :     "Ad(moi10)-infected, vehicle-treated for 24hr",
		  group :    0
  }, function() {
      console.log('finished populating things');
    }
  );
});
