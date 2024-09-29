var val_range;
var sal_range;
$.fn.dataTable.ext.search.push(
  function( settings, data, dataIndex ) {
    var min = parseFloat(val_range.slider( "values", 0 ));
    var max = parseFloat(val_range.slider( "values", 1 ));
    var col = parseFloat( data[3] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  },
   function( settings, data, dataIndex ) {
    var min = parseFloat(sal_range.slider( "values", 0 ));
    var max = parseFloat(sal_range.slider( "values", 1 ));
    var col = parseFloat( data[5] ) || 0; // data[number] = column number
    if ( ( isNaN( min ) && isNaN( max ) ) ||
         ( isNaN( min ) && col <= max ) ||
         ( min <= col   && isNaN( max ) ) ||
         ( min <= col   && col <= max ) )
    {
      return true;
    }
    return false;
  }
);

$(document).ready(function() {
 sal_range = $( "#val_range_salary" );
  val_range = $( "#val_range" );
  var live_range_val = $( "#live_range_val" );
  var val_range_salary =$( "#live_range_val_salary" );
  val_range.slider({
    range: true,
  	min: 0,
  	max: 90,
  	step: 1,
  	values: [ 0, 90 ],
  	slide: function( event, ui ) {
      live_range_val.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
  	stop: function( event, ui ) {
      table.draw();
    }
  });
    sal_range.slider({
    range: true,
  	min: 0,
  	max: 10000,
  	step: 1000,
  	values: [ 0, 10000 ],
  	slide: function( event, ui ) {
      val_range_salary.val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    },
  	stop: function( event, ui ) {
      table.draw();
    }
  });
  live_range_val.val(val_range.slider( "values", 0 ) + " - " + val_range.slider( "values", 1 ) );
  val_range_salary.val(sal_range.slider( "values", 0 ) + " - " + sal_range.slider( "values", 1 ) );
  
  var table = $( "#sort_table" ).DataTable({
    "bPaginate": false,
    "bFilter": true,
  });
});