function (doc) {
     if (doc._id.substr(0,4) === "legs"){
    	 emit(doc._id, {
    		 "catagory"  : doc.catName,
    		 "workout"   : doc.itemName,
    		 "reps"      : doc.itemQty,
    		 "favorite"  : doc.favorite,
    		 "cardio"    : doc.cardio
    	 });
     }
};