function (doc) {
     if (doc._id.substr(0,5) === "chest"){
    	 emit(doc._id , {
       		 "catagory" : doc.catagory,
    		 "workout"  : doc.workout,
    		 "reps"     : doc.reps,
    		 "favorite" : doc.favorite,
    		 "cardio"   : doc.cardio
    	 });
     }
};